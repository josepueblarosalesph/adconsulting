import type { Metadata } from "next";
import { Ad50Logo, CtaIcon } from "../../shared";
import { CorporateFooter, CorporateHeader } from "../corporate-shell";

export const metadata: Metadata = {
  title: "AD+50 | Plataforma de AD Consulting",
  description: "Una plataforma para activar el talento senior mediante empleabilidad, formación e integración intergeneracional.",
};

const actions = [
  ["01", "Empleabilidad y reinvención +50", "Plataforma que conecta personas y empresas, networking, outplacement y mentoría especializada para profesionales +50."],
  ["02", "Actualización y vigencia profesional", "Academia AD para fortalecer competencias digitales, inteligencia artificial y herramientas profesionales indispensables hoy."],
  ["03", "Integración intergeneracional", "Consultoría para transformar la cultura y gestionar la inclusión etaria en las organizaciones."],
  ["04", "Reclutamiento senior y jornadas flexibles", "Esquemas parciales, fraccionados o completos ajustados a las necesidades operacionales."],
  ["05", "SelloMayor", "Estrategias de adaptación organizacional ante los nuevos desafíos demográficos y laborales."],
];

const problems = [
  ["01", "La empresa", ["Rotación silenciosa y pérdidas operacionales.", "Vacantes que el mercado joven no cubre.", "Tensiones intergeneracionales sin gestión efectiva."]],
  ["02", "El profesional +50", ["Salida del mercado formal hacia la informalidad y el subempleo.", "Desactualización digital, nuevas habilidades y narrativa profesional vencida.", "Ausencia de redes, invisibilidad profesional y pérdida de confianza."]],
  ["03", "La sociedad", ["Pérdida de competitividad y sostenibilidad económica.", "Presión sobre pensiones y otras prestaciones sociales.", "Impacto sobre la salud mental y vulnerabilidad psicosocial."]],
];

export default function Ad50() {
  return <main className="corp-site corp-inner-site">
    <CorporateHeader />
    <section className="corp-ad50-hero"><div className="corp-shell"><div><p className="corp-eyebrow">Una unidad estratégica de AD Consulting</p><Ad50Logo /><h1>El futuro del trabajo se construye con <span>experiencia.</span></h1><p>Instalamos una mirada estratégica sobre el talento senior mediante reclutamiento, entrenamiento continuo, actualización de competencias y consultoría para una convivencia intergeneracional equilibrada.</p><a className="corp-button" href="https://ad50.adconsulting.cl/">Ir a la plataforma AD+50 <CtaIcon>↗</CtaIcon></a></div><img src="https://ad50.adconsulting.cl/images/ad50-quienes-somos-equipo.webp" alt="Equipo intergeneracional de AD+50" /></div></section>
    <section className="corp-ad50-problem corp-shell"><div><p className="corp-eyebrow">El problema que resolvemos</p><h2>No es bienestar. Son <span>tres pérdidas simultáneas.</span></h2><p className="corp-ad50-problem-lead">Es perder productividad, continuidad operacional y acceso al talento crítico.</p></div><div className="corp-ad50-problem-grid">{problems.map(([number,title,items])=><article key={number as string}><span>{number as string}</span><h3>{title as string}</h3><ul>{(items as string[]).map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
    <section className="corp-ad50-actions"><div className="corp-shell"><p className="corp-eyebrow">Nuestra propuesta</p><h2>Un desafío. <span>Cinco líneas de acción.</span></h2><div className="corp-ad50-action-grid">{actions.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p>{number === "01" && <a href="https://ad50.adconsulting.cl/">Ir a la plataforma <CtaIcon>↗</CtaIcon></a>}</article>)}</div></div></section>
    <section className="corp-ad50-about"><div className="corp-shell"><div><p className="corp-eyebrow">Qué hacemos</p><h2>Activamos experiencia para convertirla en <span>resultados.</span></h2><p>Conectamos profesionales senior con nuevas oportunidades y ayudamos a las organizaciones a evaluar cada trayectoria por su mérito, experiencia y capacidad de impacto.</p></div><img src="/equipo-ad-consulting.jpg" alt="Equipo senior de AD Consulting" /></div></section>
    <section className="corp-contact"><div className="corp-shell"><p className="corp-eyebrow">Activa la experiencia</p><h2>Conecta talento senior con desafíos <span>reales.</span></h2><a className="corp-button" href="https://ad50.adconsulting.cl/">Conocer AD+50 <CtaIcon>↗</CtaIcon></a></div></section>
    <CorporateFooter />
  </main>;
}
