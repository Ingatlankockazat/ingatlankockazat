CREATE TABLE public.contact_leads (
  id uuid PRIMARY KEY,
  topic text NOT NULL,
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  name text NOT NULL,
  phone text,
  email text,
  message text,
  status text NOT NULL DEFAULT 'partial' CHECK (status IN ('partial','submitted')),
  consent_contact boolean NOT NULL DEFAULT false,
  consent_marketing boolean NOT NULL DEFAULT false,
  consent_text_version text NOT NULL,
  consent_at timestamptz NOT NULL DEFAULT now(),
  language text NOT NULL DEFAULT 'hu',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.contact_leads TO service_role;
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;
CREATE INDEX contact_leads_created_at_idx ON public.contact_leads (created_at DESC);