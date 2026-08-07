import CartaPage from "@/app/carta/page";
import CategoryPage from "@/app/categoria/[slug]/page";
import PrivacidadPage from "@/app/privacidad/page";
import { legacyRoutes, metadataFromSeo } from "@/data/seoData";
import { Phone } from "lucide-react";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(legacyRoutes).map((legacySlug) => ({ legacySlug }));
}

export async function generateMetadata({ params }) {
  const { legacySlug } = await params;
  const route = legacyRoutes[legacySlug];

  if (!route) {
    return {};
  }

  return metadataFromSeo(route);
}

function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-normal uppercase text-[var(--color-gray-sub)]">Rustibo Alzira</p>
      <h1 className="mt-2 text-6xl uppercase text-[var(--color-green-dark)] md:text-7xl">Contacto</h1>
      <div className="surface-bordered mt-7 rounded-2xl p-7 font-normal text-[var(--color-gray-text)]">
        <p className="text-xl">Haz tu pedido por teléfono o ven a recogerlo en tienda.</p>
        <p className="mt-3">Carrer Pastora, 9, 46600 Alzira, Valencia.</p>
        <a href="tel:962413948" className="phone-cta-button order-button font-brand-menu mt-7 inline-flex items-center justify-center gap-4 rounded-3xl uppercase">
          <Phone className="phone-cta-icon" size={34} />
          962 41 39 48
        </a>
      </div>
    </main>
  );
}

function CookiesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-6xl uppercase text-[var(--color-green-dark)]">Política de cookies</h1>
      <div className="mt-6 rounded-2xl border border-[var(--color-green-border)] bg-[var(--color-white)] p-6 font-normal leading-relaxed text-[var(--color-gray-text)]">
        <p>
          Esta página informa sobre el uso de cookies en la web de Rustibo. Las cookies pueden utilizarse para el
          funcionamiento técnico de la página, medición de visitas o mejora de la experiencia de navegación.
        </p>
        <p className="mt-4">
          Para cualquier consulta sobre privacidad o cookies, contacta con Rustibo en el 962 41 39 48.
        </p>
      </div>
    </main>
  );
}

export default async function LegacyPage({ params }) {
  const { legacySlug } = await params;
  const route = legacyRoutes[legacySlug];

  if (!route) {
    notFound();
  }

  if (route.type === "category") {
    return <CategoryPage params={{ slug: route.categorySlug }} />;
  }

  if (route.type === "carta") {
    return <CartaPage />;
  }

  if (route.type === "contact") {
    return <ContactPage />;
  }

  if (route.type === "privacy") {
    return <PrivacidadPage />;
  }

  if (route.type === "cookies") {
    return <CookiesPage />;
  }

  notFound();
}
