import Link from "next/link";
import { BrandLogo, CtaIcon } from "../shared";

export function CorporateHeader() {
  return (
    <header className="corp-header corp-shell">
      <Link href="/corporativa" aria-label="Ir al inicio de AD Consulting"><BrandLogo /></Link>
      <nav aria-label="Navegación corporativa">
        <Link href="/corporativa">Inicio</Link>
        <Link href="/corporativa/nosotros">Nosotros</Link>
        <Link href="/corporativa/servicios">Servicios</Link>
        <Link href="/corporativa/black">AD Black</Link>
        <Link href="/corporativa/ad50">AD+50</Link>
        <Link href="/corporativa#actualidad">Actualidad</Link>
      </nav>
      <a className="corp-button corp-small" href="mailto:contacto@adconsulting.cl">Hablemos <CtaIcon /></a>
      <details className="corp-mobile-menu">
        <summary aria-label="Abrir menú de navegación"><span className="mobile-menu-icon" aria-hidden="true"><i /><i /><i /></span><span className="mobile-menu-label">Menú</span></summary>
        <div>
          <Link href="/corporativa">Inicio</Link>
          <Link href="/corporativa/nosotros">Nosotros</Link>
          <Link href="/corporativa/servicios">Servicios</Link>
          <Link href="/corporativa/black">AD Black</Link>
          <Link href="/corporativa/ad50">AD+50</Link>
          <Link href="/corporativa#actualidad">Actualidad</Link>
          <a href="https://aulavirtual.adcapacitaciones.cl/">Aula Virtual</a>
          <a href="https://adconsulting.trabajando.cl/">Ofertas de Trabajo</a>
          <a href="mailto:contacto@adconsulting.cl">Contáctanos</a>
        </div>
      </details>
    </header>
  );
}

export function CorporateFooter() {
  return (
    <footer className="corp-footer">
      <div className="corp-shell corp-footer-main">
        <div className="corp-footer-brand">
          <BrandLogo tone="light" />
          <p>Seleccionamos y potenciamos el talento de las organizaciones en todo Chile.</p>
          <a href="mailto:contacto@adconsulting.cl">contacto@adconsulting.cl</a>
        </div>
        <div className="corp-footer-column">
          <strong>Empresa</strong>
          <Link href="/corporativa">Inicio</Link>
          <Link href="/corporativa/nosotros">Nosotros</Link>
          <Link href="/corporativa/black">AD Black</Link>
          <Link href="/corporativa/ad50">AD+50</Link>
          <Link href="/corporativa#actualidad">Actualidad</Link>
        </div>
        <div className="corp-footer-column">
          <strong>Servicios</strong>
          <Link href="/corporativa/servicios#atraccion">Atracción de talento</Link>
          <Link href="/corporativa/servicios#desarrollo">Desarrollo de personas</Link>
          <Link href="/corporativa/servicios#carrera">Gestión de carrera</Link>
          <Link href="/corporativa/servicios#transformacion">Transformación organizacional</Link>
        </div>
        <div className="corp-footer-column">
          <strong>Recursos</strong>
          <a href="https://aulavirtual.adcapacitaciones.cl/">Aula Virtual</a>
          <a href="https://adconsulting.trabajando.cl/">Ofertas de Trabajo</a>
          <a href="https://cl.linkedin.com/company/ad-consulting-chile">LinkedIn</a>
          <a href="mailto:contacto@adconsulting.cl">Contacto</a>
        </div>
        <div className="corp-footer-bottom">
          <p>© 2026 AD Consulting · Chile</p>
          <Link href="/">Ver propuestas visuales</Link>
        </div>
      </div>
    </footer>
  );
}
