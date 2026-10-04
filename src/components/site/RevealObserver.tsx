import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function RevealObserver() {
  const location = useLocation();
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (reduced) { elements.forEach(el => el.classList.add("is-visible")); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .12 });
    elements.forEach((el, index) => { el.style.setProperty("--reveal-delay", `${Math.min(index % 6, 4) * 80}ms`); observer.observe(el); });
    return () => observer.disconnect();
  }, [location.pathname]);
  return null;
}
