import Link from "next/link";
import { ArrowRight, Home, PackageCheck, Phone } from "lucide-react";
import { categoriasData } from "@/data/menuData";
import { metadataFromSeo, pageSeo } from "@/data/seoData";

export const metadata = metadataFromSeo(pageSeo.carta);

export default function CartaPage() {
  const categorias = Object.entries(categoriasData).map(([key, data]) => ({
    slug: data.slug || data.id || key,
    ...data,
  }));

  return (
    <main className="carta-page mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="carta-page-header mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="carta-page-title text-6xl uppercase text-[var(--color-green-dark)] md:text-7xl">Carta Rustibo</h1>
          <p className="carta-page-intro mt-2 max-w-2xl font-normal text-[var(--color-gray-text)]">
            Elige tus platos y llámanos.
          </p>
        </div>
        <a href="tel:962413948" className="carta-phone-cta order-button font-brand-menu inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-xl uppercase">
          <Phone size={22} />
          Pedir por teléfono
        </a>
      </div>

      <div className="carta-page-services mb-8 grid gap-4 rounded-2xl border border-[var(--color-green-border)] bg-[var(--color-green-bg)] p-5 md:grid-cols-2">
        <div className="carta-service-option flex items-center gap-4">
          <span className="carta-service-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-lime)] text-[var(--color-green-dark)]">
            <Home size={25} strokeWidth={2.2} />
          </span>
          <div>
            <h2 className="carta-service-title text-3xl uppercase leading-none text-[var(--color-green-dark)]">Recoger en tienda</h2>
            <p className="carta-service-description mt-1 text-sm font-normal text-[var(--color-green-medium)]">Llama y recoge en tienda.</p>
          </div>
        </div>
        <div className="carta-service-option flex items-center gap-4">
          <span className="carta-service-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-lime)] text-[var(--color-green-dark)]">
            <PackageCheck size={25} strokeWidth={2.2} />
          </span>
          <div>
            <h2 className="carta-service-title text-3xl uppercase leading-none text-[var(--color-green-dark)]">Envío a domicilio</h2>
            <p className="carta-service-description mt-1 text-sm font-normal text-[var(--color-green-medium)]">Domicilio gratis desde 12€.</p>
          </div>
        </div>
      </div>

      <div className="carta-category-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map((cat) => (
          <Link key={cat.slug} href={`/categoria/${cat.slug}`} className="carta-category-card promo-card group overflow-hidden rounded-2xl bg-[var(--color-white)]">
            <div className="carta-category-image relative aspect-[16/9] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${cat.imagenPrincipal}')` }}
              />
              <h2 className="carta-category-title carta-category-title-overlay absolute bottom-4 left-4 uppercase leading-none text-[var(--color-white)]">
                {cat.titulo}
              </h2>
            </div>
            <div className="carta-category-body flex items-center justify-between gap-4 p-5">
              <div className="carta-category-copy">
                <h2 className="carta-category-body-title">{cat.titulo}</h2>
                <p className="line-clamp-2 text-sm font-normal text-[var(--color-gray-text)]">{cat.subtitulo}</p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-lime)] text-[var(--color-green-dark)]">
                <ArrowRight size={20} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
