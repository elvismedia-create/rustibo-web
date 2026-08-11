import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import { metadataFromSeo, pageSeo } from "@/data/seoData";

export const metadata = metadataFromSeo(pageSeo.blog);

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-8">
        <p className="text-sm font-normal uppercase text-[var(--color-gray-sub)]">Guías para pedir mejor</p>
        <h1 className="text-6xl uppercase leading-none text-[var(--color-green-dark)] md:text-7xl">Blog Rustibo</h1>
        <p className="mt-3 max-w-2xl font-normal leading-relaxed text-[var(--color-gray-text)]">
          Ideas, consejos y recomendaciones para disfrutar comida para llevar en Alzira sin complicarte.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="surface-bordered group overflow-hidden rounded-2xl transition hover:brightness-95">
            <div className="relative h-52 overflow-hidden">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase text-[var(--color-green-medium)]">
                <span>{post.category}</span>
                <span className="inline-flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
              </div>
              <h2 className="text-3xl uppercase leading-none text-[var(--color-green-dark)]">{post.title}</h2>
              <p className="mt-3 text-sm font-normal leading-relaxed text-[var(--color-gray-text)]">{post.excerpt}</p>
              <span className="font-brand-menu mt-5 inline-flex items-center gap-2 text-xl uppercase text-[var(--color-green-dark)] group-hover:underline">
                Leer artículo <ArrowRight size={18} />
              </span>
            </div>
          </Link>
        ))}
      </section>

      <section className="section-gap-top">
        <div className="surface-bordered rounded-2xl p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-4xl uppercase leading-none text-[var(--color-green-dark)]">¿Ya sabes qué pedir?</h2>
              <p className="mt-2 font-normal text-[var(--color-gray-text)]">Consulta la carta completa y llama para preparar tu pedido.</p>
            </div>
            <Link href="/carta" className="order-button font-brand-menu inline-flex w-fit items-center gap-2 rounded-2xl px-7 py-4 text-xl uppercase">
              Ver carta <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
