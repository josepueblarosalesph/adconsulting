import type { Metadata } from "next";
import { Ad50Logo, CtaIcon } from "../../shared";
import { CorporateFooter, CorporateHeader } from "../corporate-shell";

export const metadata: Metadata = {
  title: "AD+50 | Plataforma de AD Consulting",
  description: "Una plataforma para activar el talento senior mediante empleabilidad, formación e integración intergeneracional.",
};

const actions = [
  ["01", "Empleabilidad y reinvención +50", "Procesos de empleabilidad, outplacement y mentoría especializada para profesionales mayores de 50 años."],
  ["02", "Actualización digital e inteligencia artificial", "Competencias digitales, IA y herramientas que hoy exige el mercado laboral."],
  ["03", "Integración intergeneracional", "Consultoría para transformar la cultura y gestionar la inclusión etaria en las organizaciones."],
  ["04", "Reclutamiento senior y jornadas flexibles", "Esquemas parciales, fraccionados o completos ajustados a las necesidades operacionales."],
  ["05", "SelloMayor", "Estrategias de adaptación organizacional ante los nuevos desafíos demográficos y laborales."],
];

export default function Ad50() {
  return <main className="corp-site corp-inner-site">
    <CorporateHeader />
    <section className="corp-ad50-hero"><div className="corp-shell"><div><p className="corp-eyebrow">Una plataforma de AD Consulting</p><Ad50Logo /><h1>El futuro del trabajo también se construye con <span>experiencia.</span></h1><p>El problema no es la edad: es cómo gestionamos el conocimiento, la continuidad y la convivencia entre generaciones.</p><a className="corp-button" href="https://ad50.adconsulting.cl/">Ir a la plataforma AD+50 <CtaIcon>↗</CtaIcon></a></div><img src="https://ad50.adconsulting.cl/images/ad50-quienes-somos-equipo.webp" alt="Equipo intergeneracional de AD+50" /></div></section>
    <section className="corp-ad50-problem corp-shell"><div><p className="corp-eyebrow">El desafío</p><h2>Un mismo fenómeno, <span>tres pérdidas simultáneas.</span></h2></div><div className="corp-ad50-problem-grid"><article><span>01</span><h3>La empresa</h3><p>Pierde productividad, conocimiento crítico y continuidad operacional.</p></article><article><span>02</span><h3>El profesional +50</h3><p>Pierde vigencia, ingresos y oportunidades para extender su trayectoria.</p></article><article><span>03</span><h3>La sociedad</h3><p>Pierde competitividad al subutilizar capital humano experimentado.</p></article></div></section>
    <section className="corp-ad50-actions"><div className="corp-shell"><p className="corp-eyebrow">Nuestra propuesta</p><h2>Un desafío. <span>Cinco líneas de acción.</span></h2><div className="corp-ad50-action-grid">{actions.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="corp-contact"><div className="corp-shell"><p className="corp-eyebrow">Activa la experiencia</p><h2>Conecta talento senior con desafíos <span>reales.</span></h2><a className="corp-button" href="https://ad50.adconsulting.cl/">Conocer AD+50 <CtaIcon>↗</CtaIcon></a></div></section>
    <CorporateFooter />
  </main>;
}
