import type { Metadata } from "next";
import { CtaIcon } from "../../shared";
import { CorporateFooter, CorporateHeader } from "../corporate-shell";

export const metadata: Metadata = {
  title: "Nosotros | AD Consulting",
  description: "Conoce al equipo de AD Consulting y nuestra forma de potenciar el talento de las organizaciones.",
};

const team = [
  ["Ariela Dymensztain", "Directora", "https://www.adconsulting.cl/_next/static/media/ari2.dc4e23d9.webp"],
  ["Stephany Vásquez", "Directora Académica OTEC", "https://www.adconsulting.cl/_next/static/media/stephy.1a2ea2c4.webp"],
  ["Jocelyn Bon", "Jefa de Selección", "https://www.adconsulting.cl/_next/static/media/joce.35f232bb.webp"],
  ["Daniela Rojas", "Consultora Senior Bilingüe", "https://www.adconsulting.cl/_next/static/media/DanielaRojas.897af41c.webp"],
  ["Evelyn Jofré", "Consultora Senior", "https://www.adconsulting.cl/_next/static/media/EvelynJofre.80cab259.webp"],
  ["Danilo Vásquez", "Consultor Senior", "https://www.adconsulting.cl/_next/static/media/DaniloEspinoza.49228317.webp"],
  ["Eugenia Gutierrez", "Ejecutiva Comercial", "https://www.adconsulting.cl/_next/static/media/EugeniaGutierrez.223e15c4.webp"],
  ["Elena Soto", "Consultora Senior", "https://www.adconsulting.cl/_next/static/media/elena.3683b720.webp"],
  ["Rocio Castillo", "Consultora Senior y Community Manager", "https://www.adconsulting.cl/_next/static/media/rocio.bda34a16.webp"],
  ["Darío Cerro", "Encargado de Finanzas", "https://www.adconsulting.cl/_next/static/media/dario.f8426d73.webp"],
  ["Gian Piero Lavezzo", "Socio Gerente", "https://www.adconsulting.cl/_next/static/media/PieroLavezo.69e0e775.webp"],
];

export default function Nosotros() {
  return <main className="corp-site corp-inner-site">
    <CorporateHeader />
    <section className="corp-page-hero corp-about-hero"><div className="corp-shell"><p className="corp-eyebrow">Quiénes somos</p><h1>Más de 25 años liderando personas, <span>no solo asesorándolas.</span></h1><p>La diferencia de AD está en su origen: nuestros socios lideraron áreas de Recursos Humanos y desarrollo de personas dentro de empresas de distintos sectores.</p></div></section>
    <section className="corp-story corp-shell"><div><p className="corp-eyebrow">Nuestra experiencia</p><h2>Entendemos tu desafío porque <span>lo vivimos.</span></h2></div><div><p>No partimos desde la teoría. Conocemos las decisiones, tensiones y oportunidades que enfrentan quienes lideran personas dentro de una organización.</p><p>Hoy combinamos esa experiencia con actualización constante, criterio profesional y cercanía para atraer, desarrollar e integrar el talento que cada empresa necesita.</p></div></section>
    <section className="corp-team-section"><div className="corp-shell"><p className="corp-eyebrow">Nuestro equipo</p><h2>Especialistas comprometidos con <span>tu desafío.</span></h2><div className="corp-people-grid">{team.map(([name,role,image])=><article key={name}><img src={image} alt={`Retrato de ${name}`} /><div><h3>{name}</h3><p>{role}</p></div></article>)}</div></div></section>
    <section className="corp-contact"><div className="corp-shell"><p className="corp-eyebrow">Conversemos</p><h2>Conoce al equipo que puede acompañar a <span>tu organización.</span></h2><a className="corp-button" href="mailto:contacto@adconsulting.cl">Contáctanos <CtaIcon /></a></div></section>
    <CorporateFooter />
  </main>;
}
