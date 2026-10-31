// Google Analytics 4. The measurement ID is public (visible in every page's source).
export const GA_MEASUREMENT_ID = "G-01M3MMHG3F";

type Gtag = (...args: unknown[]) => void;
declare global { interface Window { dataLayer?: unknown[]; gtag?: Gtag; __ikBot?: boolean } }

let started = false;

export function initAnalytics() {
  if (started || !GA_MEASUREMENT_ID || typeof window === "undefined" || window.__ikBot) return;
  started = true;
  // The Google tag itself is loaded in index.html <head>; only add it if missing.
  if (!window.gtag) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.prepend(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params -- gtag.js needs the Arguments object
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
  }

  // Phone and WhatsApp clicks anywhere on the site.
  document.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement | null)?.closest?.("a");
    const href = a?.getAttribute("href") || "";
    if (href.startsWith("tel:")) trackEvent("phone_click", { link_url: href });
    else if (href.includes("wa.me") || href.includes("whatsapp")) trackEvent("whatsapp_click", { link_url: href });
  }, true);
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  window.gtag?.("event", name, params);
}

export function trackPageView(path: string, search: string) {
  const lang = new URLSearchParams(search).get("lang") === "en" ? "en" : "hu";
  trackEvent("page_view", {
    page_path: path + search,
    page_location: window.location.href,
    page_title: document.title,
    language: lang,
  });
}
