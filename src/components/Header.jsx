"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronLeft, ChevronRight, MapPin, Menu, Phone, Star, Store } from "lucide-react";
import { categoriasData } from "@/data/menuData";

export default function Header() {
  const [isCartaOpen, setIsCartaOpen] = useState(false);
  const megaMenuRef = useRef(null);
  const pathname = usePathname();

  const categorias = Object.entries(categoriasData).map(([key, data]) => ({
    slug: data.slug || data.id || key,
    ...data,
  }));

  const scrollMegaMenu = (direction) => {
    if (!megaMenuRef.current) return;
    megaMenuRef.current.scrollBy({
      left: direction * 320,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="site-header sticky top-0 z-50 border-b-2 border-[var(--color-green-border)] bg-[var(--color-white)] text-[var(--color-green-dark)]">
        <div>
          <div className="mobile-app-header mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
            <Link href="/" prefetch={false} className="mobile-wordmark-link flex shrink-0 items-center">
              <span className="mobile-wordmark hidden">RUSTIBO</span>
              <img
                src="/images/rustibo_logo.png"
                alt="Rustibo"
                className="desktop-logo h-14 w-auto object-contain md:h-16"
              />
            </Link>

            <nav className="desktop-main-nav font-brand-menu ml-auto hidden items-center gap-8 text-xl uppercase lg:flex">
              <div
                className="relative flex h-20 items-center"
                onMouseEnter={() => setIsCartaOpen(true)}
                onMouseLeave={() => setIsCartaOpen(false)}
              >
                <Link
                  href="/carta"
                  prefetch={false}
                  className="flex items-center gap-2 text-[var(--color-green-dark)] hover:text-[var(--color-green-nav)]"
                  aria-expanded={isCartaOpen}
                >
                  <Menu size={18} />
                  Carta
                  <ChevronDown size={15} className={`transition-transform ${isCartaOpen ? "rotate-180" : ""}`} />
                </Link>

                <div className={`fixed left-0 right-0 top-20 overflow-hidden border-b border-t border-[var(--color-green-border)] bg-[var(--color-white)] ${isCartaOpen ? "block" : "hidden"}`}>
                  <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
                    <button
                      type="button"
                      onClick={() => scrollMegaMenu(-1)}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-green-border)] text-[var(--color-green-dark)] hover:bg-[var(--color-green-bg)]"
                      aria-label="Ver categorías anteriores"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <div
                      ref={megaMenuRef}
                      className="flex flex-1 gap-3 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                    {categorias.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/categoria/${cat.slug}`}
                        prefetch={false}
                        className="group flex min-w-[190px] shrink-0 flex-col rounded-xl border border-[var(--color-green-border)] bg-[var(--color-white)] p-2 hover:bg-[var(--color-green-bg)]"
                      >
                        <span
                          className="h-24 w-full shrink-0 rounded-lg bg-cover bg-center"
                          style={{ backgroundImage: `url('${cat.imagenPrincipal}')` }}
                        />
                        <span className="mt-3">
                          <span className="font-brand-menu block text-2xl uppercase leading-tight text-[var(--color-green-dark)] group-hover:text-[var(--color-green-nav)]">
                            {cat.titulo}
                          </span>
                        </span>
                      </Link>
                    ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => scrollMegaMenu(1)}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-green-border)] text-[var(--color-green-dark)] hover:bg-[var(--color-green-bg)]"
                      aria-label="Ver más categorías"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <Link href="/promociones" prefetch={false} className="flex items-center gap-2 hover:text-[var(--color-green-nav)]">
                <Star size={18} />
                Promos
              </Link>
              <Link href="/novedades" prefetch={false} className="flex items-center gap-2 hover:text-[var(--color-green-nav)]">
                <Store size={18} />
                Novedades
              </Link>
              <a href="tel:962413948" className="flex items-center gap-2 hover:text-[var(--color-green-nav)]">
                <Phone size={18} />
                Pedir
              </a>
            </nav>

            <Link
              href="/carta"
              prefetch={false}
              className="desktop-address-link ml-auto hidden min-w-0 items-center gap-3 rounded-xl border border-[var(--color-green-border)] bg-[var(--color-green-bg)] px-4 py-2 text-left lg:flex lg:max-w-xs"
            >
              <MapPin size={22} className="shrink-0 text-[var(--color-green-dark)]" />
              <span className="min-w-0">
                <span className="font-brand-menu block text-base uppercase leading-none text-[var(--color-green-dark)]">Domicilio o recogida</span>
                <span className="block truncate text-sm text-[var(--color-green-medium)]">Carrer Pastora, 9, Alzira</span>
              </span>
            </Link>
          </div>
        </div>

        <div className="mobile-delivery-row flex items-center gap-3 border-b border-[var(--color-green-border)] bg-[var(--color-green-bg)] px-4 py-3 text-left lg:hidden">
          <Link href="/carta" prefetch={false} className="mobile-delivery-address flex min-w-0 flex-1 items-center gap-3">
            <MapPin size={22} className="shrink-0 text-[var(--color-green-dark)]" />
            <span className="min-w-0">
              <span className="font-brand-menu block text-base uppercase leading-none text-[var(--color-green-dark)]">Domicilio o recogida</span>
              <span className="block truncate text-sm text-[var(--color-green-medium)]">Carrer Pastora, 9, Alzira</span>
            </span>
          </Link>
          <a
            href="tel:962413948"
            className="mobile-delivery-phone flex shrink-0 items-center justify-center rounded-xl bg-[var(--color-lime)] text-[var(--color-green-dark)]"
            aria-label="Llamar a Rustibo"
          >
            <Phone size={24} strokeWidth={2.5} />
          </a>
        </div>

        <nav className="mobile-category-nav lg:hidden" aria-label="Categorías principales">
          <div className="mobile-category-scroll">
            {categorias.map((cat) => {
              const href = `/categoria/${cat.slug}`;
              const isActive = pathname === href || pathname === `${href}/`;

              return (
                <Link
                  key={cat.slug}
                  href={href}
                  prefetch={false}
                  className={`mobile-category-link ${isActive ? "is-active" : ""}`}
                >
                  {cat.titulo}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
}
