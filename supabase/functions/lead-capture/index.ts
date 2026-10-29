import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { z } from 'npm:zod@3'

const text = (max: number) => z.string().trim().max(max)

const BodySchema = z.object({
  id: z.string().uuid(),
  stage: z.enum(['partial', 'submitted']),
  topic: text(40).min(1),
  answers: z.record(text(60), text(200)).refine((a) => Object.keys(a).length <= 12),
  name: text(100).min(1),
  phone: text(40).optional().default(''),
  email: z.union([z.literal(''), z.string().trim().email().max(255)]).optional().default(''),
  message: text(3000).optional().default(''),
  consentMarketing: z.boolean().optional().default(false),
  consentVersion: text(40).min(1),
  language: z.enum(['hu', 'en']),
  website: z.string().max(0).optional().default(''), // honeypot
}).refine((b) => b.phone.length >= 6 || b.email.length > 0, { message: 'phone or email required' })

const hits = new Map<string, number[]>()
function limited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > 20
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405)

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  if (limited(ip)) return json({ error: 'too many requests' }, 429)

  let raw: unknown
  try { raw = await req.json() } catch { return json({ error: 'invalid json' }, 400) }
  const parsed = BodySchema.safeParse(raw)
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400)
  const b = parsed.data

  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

  const { data: existing } = await supabase.from('contact_leads').select('status').eq('id', b.id).maybeSingle()
  const status = existing?.status === 'submitted' ? 'submitted' : b.stage

  const row = {
    id: b.id,
    topic: b.topic,
    answers: b.answers,
    name: b.name,
    phone: b.phone || null,
    email: b.email || null,
    status,
    consent_contact: true,
    consent_text_version: b.consentVersion,
    language: b.language,
    updated_at: new Date().toISOString(),
    ...(b.stage === 'submitted' ? { message: b.message || null, consent_marketing: b.consentMarketing } : {}),
  }

  const { error } = await supabase.from('contact_leads').upsert(row, { onConflict: 'id' })
  if (error) {
    console.error('lead upsert failed', error.message)
    return json({ error: 'save failed' }, 500)
  }

  // Owner notifications are sent here once the email domain is verified.
  return json({ ok: true, status })
})
