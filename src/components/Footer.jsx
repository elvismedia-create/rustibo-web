import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import CookiePreferencesLink from "./CookiePreferencesLink";

const footerColumns = [
  {
    title: "RUSTIBO",
    links: [
      { label: "Acerca de nosotros", href: "/#sobre-rustibo" },
      { label: "Novedades", href: "/novedades" },
      { label: "Llamar a Rustibo", href: "tel:962413948" },
      { label: "Promociones", href: "/promociones" },
    ],
  },
  {
    title: "CARTA",
    links: [
      { label: "Promociones", href: "/promociones" },
      { label: "Pizzas", href: "/categoria/pizzas" },
      { label: "Entrantes", href: "/categoria/entrantes" },
      { label: "Tex Mex", href: "/categoria/tex-mex" },
    ],
  },
  {
    title: "BLOG",
    links: [
      { label: "Pizza viral dulce-picante", href: "/blog/pizza-viral-dulce-picante-alzira" },
      { label: "Pollo crujiente viral", href: "/blog/pollo-crujiente-sandwiches-virales-alzira" },
      { label: "Cena viral para compartir", href: "/blog/cena-viral-para-compartir-pizzas-nachos-pollo" },
      { label: "Ver todos los artículos", href: "/blog" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Aviso legal", href: "/aviso-legal" },
      { label: "Política de privacidad", href: "/privacidad" },
      { label: "Política de cookies", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-green-bg)]">
      <div className="footer-grid mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-10 pt-[60px] sm:px-6 min-[481px]:grid-cols-2 md:grid-cols-[1.25fr_repeat(4,1fr)] lg:px-8">
        <div className="footer-brand">
          <img src="/images/rustibo_logo.png" alt="Rustibo" className="footer-logo h-12 w-auto object-contain" />
          <div className="footer-social mt-7 flex items-center gap-4">
            <span className="text-[14px] font-normal text-[var(--color-green-medium)]">Síguenos en:</span>
            <a href="https://www.instagram.com/rustibo/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-[var(--color-green-dark)] hover:text-[var(--color-green-medium)]">
              <Instagram size={22} strokeWidth={2.4} />
            </a>
            <a href="https://www.facebook.com/rustibomenjarperemportarsl" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-[var(--color-green-dark)] hover:text-[var(--color-green-medium)]">
              <Facebook size={21} strokeWidth={2.4} />
            </a>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="footer-column">
            <h3 className="footer-title mb-4 uppercase text-[var(--color-green-dark)]">{column.title}</h3>
            <div>
              {column.links.map((link) => (
                <Link key={`${column.title}-${link.label}`} href={link.href} className="footer-link block text-[var(--color-green-medium)] hover:text-[var(--color-green-dark)] hover:underline">
                  {link.label}
                </Link>
              ))}
              {column.title === "LEGAL" ? (
                <CookiePreferencesLink className="footer-link block text-left text-[var(--color-green-medium)] hover:text-[var(--color-green-dark)] hover:underline" />
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--color-green-border)] bg-[var(--color-green-bg-dark)] p-5 text-center text-[14px] font-normal text-[var(--color-green-medium)]">
        © 2026 Rustibo. Todos los derechos reservados
      </div>
    </footer>
  );
}
