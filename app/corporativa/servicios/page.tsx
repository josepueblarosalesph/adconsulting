import type { Metadata } from "next";
import { CtaIcon } from "../../shared";
import { CorporateFooter, CorporateHeader } from "../corporate-shell";

export const metadata: Metadata = {
  title: "Servicios | AD Consulting",
  description: "Head Hunting, selección, liderazgo, outplacement y capacitación para organizaciones en todo Chile.",
};

const services = [
  ["01", "atraccion", "Atracción de talento", "Contrataciones con menor riesgo y mayor permanencia", "Integramos Head Hunting, reclutamiento y selección, evaluación por competencias y evaluación de potencial para identificar a las personas adecuadas para cada desafío."],
  ["02", "desarrollo", "Desarrollo de personas", "Mejor desempeño y liderazgos más sólidos", "Diseñamos capacitación OTEC presencial y e-learning, coaching ejecutivo y de equipos, formación de líderes a la medida y academias corporativas."],
  ["03", "carrera", "Gestión de carrera", "Movilidades responsables y marca empleadora protegida", "Acompañamos procesos de outplacement, mentoring y transición de carrera para facilitar la recolocación, la reinvención y la movilidad interna."],
  ["04", "transformacion", "Transformación organizacional", "Organizaciones más alineadas, ágiles y preparadas", "Facilitamos gestión del cambio, equipos de alto desempeño y estrategias de cultura, liderazgo, diversidad, equidad e inclusión con impacto medible."],
];

export default function Servicios() {
  return <main className="corp-site corp-inner-site">
    <CorporateHeader />
    <section className="corp-page-hero corp-page-hero-split"><div className="corp-shell"><div><p className="corp-eyebrow">Servicios</p><h1>Soluciones para todo el ciclo del <span>talento.</span></h1><p>Escuchamos, diseñamos, implementamos y acompañamos soluciones a la medida de los desafíos reales del negocio.</p></div><img src="/hero-servicios-consultoria-talento.webp" alt="Consultora revisando un perfil profesional junto a dos personas" /></div></section>
    <section className="corp-service-detail corp-shell"><p className="corp-eyebrow">Lo que hacemos</p><div className="corp-service-list">{services.map(([number,slug,title,lead,text])=><article id={slug} key={number}><span>{number}</span><div><h2>{title}</h2><strong>{lead}</strong></div><p>{text}</p><a href="mailto:contacto@adconsulting.cl">Conversemos <CtaIcon /></a></article>)}</div></section>
    <section className="corp-coverage"><div className="corp-shell"><div><p className="corp-eyebrow">Cobertura nacional</p><h2>Estamos presentes en <span>todo Chile.</span></h2></div><p>Desarrollamos proyectos desde el norte hasta la Patagonia, con soluciones presenciales y remotas adaptadas al contexto de cada cliente.</p></div></section>
    <section className="corp-contact"><div className="corp-shell"><p className="corp-eyebrow">Hablemos</p><h2>Diseñemos la solución adecuada para <span>tu desafío.</span></h2><a className="corp-button" href="mailto:contacto@adconsulting.cl">Solicitar una conversación <CtaIcon /></a></div></section>
    <CorporateFooter />
  </main>;
}
