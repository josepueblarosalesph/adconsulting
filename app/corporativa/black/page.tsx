import type { Metadata } from "next";
import { CtaIcon } from "../../shared";
import { CorporateFooter, CorporateHeader } from "../corporate-shell";

export const metadata: Metadata = {
  title: "AD Black | AD Consulting",
  description: "Una experiencia premium de asesoría estratégica, beneficios y soluciones exclusivas para líderes y sus equipos.",
};

const benefits = [
  ["01", "Asesoría prioritaria", "Acceso prioritario a asesoría estratégica con expertos de amplia y reconocida trayectoria en la industria."],
  ["02", "Soluciones a medida", "Privilegios exclusivos concebidos para anticipar —y superar— tus expectativas."],
  ["03", "Bono de bienvenida", "Bono de Bienvenida AD Black de M$ 2.000.000, reflejo de la confianza que depositas en nosotros y de tu visión de futuro."],
  ["04", "Documentos estratégicos", "Acceso a contenidos elaborados por nuestro equipo para fortalecer y potenciar a tus colaboradores."],
  ["05", "Programa de puntos", "Cada servicio contratado convierte tu inversión en nuevas oportunidades para tu organización."],
];

export default function AdBlack() {
  return (
    <main className="corp-site black-site">
      <CorporateHeader />

      <section className="black-hero">
        <div className="corp-shell black-hero-grid">
          <div className="black-hero-copy">
            <p className="black-eyebrow">Círculo AD Black</p>
            <h1>La excelencia como una forma de <span>ver el mundo.</span></h1>
            <p>Celebramos tu visión y tu liderazgo invitándote a integrar un espacio reservado para quienes desafían lo posible y elevan el estándar cada día.</p>
            <a className="black-button" href="mailto:contacto@adconsulting.cl?subject=Quiero%20conocer%20AD%20Black">Conocer AD Black <CtaIcon /></a>
          </div>
          <div className="black-card-stage">
            <span className="black-orbit black-orbit-one" aria-hidden="true" />
            <span className="black-orbit black-orbit-two" aria-hidden="true" />
            <img src="/ad-black-card.webp" alt="Tarjeta de membresía AD Black" />
            <p><strong>Una experiencia exclusiva</strong><br />Diseñada para ti y tu equipo.</p>
          </div>
        </div>
      </section>

      <section className="black-intro">
        <div className="corp-shell black-intro-grid">
          <p className="black-eyebrow">Tu membresía</p>
          <div>
            <h2>Mucho más que una tarjeta: la llave a un universo de <span>privilegios.</span></h2>
            <p>Diseñamos esta propuesta premium pensando en líderes como tú y tu equipo: visionarios que inspiran nuevos caminos, amplían su impacto, consolidan su legado y exigen lo mejor.</p>
          </div>
        </div>
      </section>

      <section className="black-benefits">
        <div className="corp-shell">
          <div className="black-section-heading">
            <p className="black-eyebrow">Beneficios AD Black</p>
            <h2>Una relación que reconoce y potencia <span>tu visión.</span></h2>
          </div>
          <div className="black-benefit-layout">
            <div className="black-benefit-list">
              {benefits.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
            <div className="black-benefit-photos">
              <img src="/ad-black-executives-1.webp" alt="Ejecutivos colaborando en una sesión estratégica" />
              <img src="/ad-black-executives-2.webp" alt="Equipo ejecutivo en una reunión de trabajo" />
            </div>
          </div>
        </div>
      </section>

      <section className="black-statement">
        <div className="corp-shell">
          <p className="black-eyebrow">AD Consulting</p>
          <h2>Redefinimos la experiencia de <span>impactar juntos.</span></h2>
          <img src="/ad-consulting-logo-light.png" alt="AD Consulting" />
          <a className="black-button black-button-light" href="mailto:contacto@adconsulting.cl?subject=Quiero%20conocer%20AD%20Black">Conversemos <CtaIcon /></a>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
