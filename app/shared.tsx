export const news = [
  {
    category: "Alianzas estratégicas",
    title: "AD Consulting fortalece sus soluciones junto a Lukkap y Leadership Consulting",
    excerpt: "Las alianzas amplían la propuesta en transición laboral, outplacement y desarrollo de liderazgo con metodologías especializadas.",
    href: "https://revistanos.cl/ad-consulting-firmo-alianzas-con-lukkap-y-leadership-consulting/",
  },
  {
    category: "Historias de impacto",
    title: "Tres experiencias reales de selección y transición profesional",
    excerpt: "Personas acompañadas por AD Consulting relatan procesos basados en diagnóstico, preparación, marca personal, competencias y ajuste cultural.",
    href: "https://es.linkedin.com/posts/ad-consulting-chile_potenciamoseltalento-adconsulting-outplacement-activity-7381705011719725056-jPD6",
  },
  {
    category: "Selección",
    title: "Nuevo proceso de búsqueda ejecutiva cerrado con éxito",
    excerpt: "AD Consulting completó la selección de una Gerencia de Administración y Finanzas para una organización en Constitución.",
    href: "https://es.linkedin.com/posts/ad-consulting-chile_hunting-reclutamientoyseleccion-consultoraseleccion-activity-7400162559938686976-0ttZ",
  },
];

export function CtaIcon({ children = "→" }: { children?: React.ReactNode }) {
  return <span className="cta-icon" aria-hidden="true">{children}</span>;
}

export function Ad50Logo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const src = tone === "light" ? "/ad50-logo-light.png" : "/ad50-logo-dark.png";
  return <img className={`ad50-original-logo ${className}`} src={src} alt="AD+50 Talento Senior" />;
}

export function BrandLogo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const src = tone === "light" ? "/ad-consulting-logo-light.png" : "/ad-consulting-logo-dark.png";
  return <img className={`brand-logo ${className}`} src={src} alt="AD Consulting · Gestión y desarrollo de talento" />;
}
