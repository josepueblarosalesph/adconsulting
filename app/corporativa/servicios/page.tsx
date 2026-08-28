import type { Metadata } from "next";
import { CtaIcon } from "../../shared";
import { CorporateFooter, CorporateHeader } from "../corporate-shell";

export const metadata: Metadata = {
  title: "Servicios | AD Consulting",
  description: "Head Hunting, selección, liderazgo, outplacement y capacitación para organizaciones en todo Chile.",
};

const services = [
  ["01", "head-hunting", "Head Hunting", "Talento ejecutivo para decisiones críticas", "Identificamos perfiles directivos y altamente especializados, combinando conocimiento del mercado, evaluación rigurosa y comprensión de la cultura de cada organización."],
  ["02", "seleccion", "Reclutamiento y Selección", "Procesos completos, claros y cercanos", "Nos encargamos del proceso desde el levantamiento del perfil hasta la evaluación y presentación de candidaturas, liberando tiempo de los equipos internos."],
  ["03", "liderazgo", "Coaching y Liderazgo", "Desarrollo basado en evidencia", "Junto a Leadership Consulting Chile desarrollamos liderazgo, efectividad de equipos, confianza, retroalimentación y coaching ejecutivo con metodologías basadas en datos."],
  ["04", "outplacement", "Outplacement", "Transiciones responsables hasta la recolocación", "En alianza con Lukkap acompañamos a profesionales y empresas con orientación personalizada, estrategia de búsqueda, marca profesional y preparación para el mercado actual."],
  ["05", "capacitaciones", "Capacitaciones", "Aprendizaje diseñado para cada organización", "Creamos programas e-learning, b-learning y presenciales. Somos OTEC reconocida por SENCE y certificada bajo la norma de calidad NCh 2728."],
];

export default function Servicios() {
  return <main className="corp-site corp-inner-site">
    <CorporateHeader />
    <section className="corp-page-hero corp-page-hero-split"><div className="corp-shell"><div><p className="corp-eyebrow">Servicios</p><h1>Soluciones a la medida de cada <span>organización.</span></h1><p>Integramos selección, desarrollo, transición y aprendizaje para responder a los desafíos reales del negocio.</p></div><img src="/hero-servicios-consultoria-talento.webp" alt="Consultora revisando un perfil profesional junto a dos personas" /></div></section>
    <section className="corp-service-detail corp-shell"><p className="corp-eyebrow">Lo que hacemos</p><div className="corp-service-list">{services.map(([number,slug,title,lead,text])=><article id={slug} key={number}><span>{number}</span><div><h2>{title}</h2><strong>{lead}</strong></div><p>{text}</p><a href="mailto:contacto@adconsulting.cl">Conversemos <CtaIcon /></a></article>)}</div></section>
    <section className="corp-coverage"><div className="corp-shell"><div><p className="corp-eyebrow">Cobertura nacional</p><h2>Estamos presentes en <span>todo Chile.</span></h2></div><p>Desarrollamos proyectos desde el norte hasta la Patagonia, con soluciones presenciales y remotas adaptadas al contexto de cada cliente.</p></div></section>
    <section className="corp-contact"><div className="corp-shell"><p className="corp-eyebrow">Hablemos</p><h2>Diseñemos la solución adecuada para <span>tu desafío.</span></h2><a className="corp-button" href="mailto:contacto@adconsulting.cl">Solicitar una conversación <CtaIcon /></a></div></section>
    <CorporateFooter />
  </main>;
}
