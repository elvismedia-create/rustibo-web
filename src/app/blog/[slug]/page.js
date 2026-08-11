import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Phone } from "lucide-react";
import { blogPosts, getBlogPost } from "@/data/blogData";
import { SITE_URL } from "@/data/seoData";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado | Rustibo",
    };
  }

  return {
    title: `${post.title} | Blog Rustibo`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: new URL(`/blog/${post.slug}/`, SITE_URL).toString(),
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": new URL(`/blog/${post.slug}/#article`, SITE_URL).toString(),
    mainEntityOfPage: new URL(`/blog/${post.slug}/`, SITE_URL).toString(),
    headline: post.title,
    description: post.excerpt,
    image: new URL(post.image, SITE_URL).toString(),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Rustibo",
    },
    publisher: {
      "@type": "Organization",
      name: "Rustibo",
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/blog" className="font-brand-menu mb-6 inline-flex items-center gap-2 text-xl uppercase text-[var(--color-green-dark)] hover:text-[var(--color-green-nav)]">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm font-semibold uppercase text-[var(--color-green-medium)]">
          <span>{post.category}</span>
          <span className="inline-flex items-center gap-1"><CalendarDays size={15} />{post.date}</span>
          <span className="inline-flex items-center gap-1"><Clock size={15} />{post.readTime}</span>
        </div>

        <h1 className="text-6xl uppercase leading-none text-[var(--color-green-dark)] md:text-7xl">{post.title}</h1>
        <p className="mt-4 text-lg font-normal leading-relaxed text-[var(--color-gray-text)]">{post.excerpt}</p>

        <div className="media-bordered mt-8 overflow-hidden rounded-2xl">
          <img src={post.image} alt={post.title} className="h-full max-h-[440px] w-full object-cover" />
        </div>

        <div className="mt-8 grid gap-8">
          {post.content.map((section) => (
            <section key={section.heading}>
              <h2 className="text-4xl uppercase leading-none text-[var(--color-green-dark)]">{section.heading}</h2>
              <p className="mt-3 text-base font-normal leading-8 text-[var(--color-gray-text)]">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="surface-bordered mt-10 rounded-2xl p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-4xl uppercase leading-none text-[var(--color-green-dark)]">Pide Rustibo en Alzira</h2>
              <p className="mt-2 font-normal text-[var(--color-gray-text)]">Recogida en tienda, domicilio gratis desde 12€ y pago con tarjeta a domicilio.</p>
            </div>
            <a href="tel:962413948" className="order-button font-brand-menu inline-flex w-fit items-center gap-2 rounded-2xl px-7 py-4 text-xl uppercase">
              Llamar ahora <Phone size={20} />
            </a>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="section-heading-tight">
            <div className="section-heading-row">
              <h2 className="section-title-compact">Más artículos</h2>
              <Link href="/blog" className="section-view-all">VER BLOG</Link>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {relatedPosts.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="surface-bordered group flex overflow-hidden rounded-2xl transition hover:brightness-95">
                <img src={item.image} alt={item.title} className="hidden w-44 object-cover transition-transform duration-500 group-hover:scale-105 sm:block" />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase text-[var(--color-green-medium)]">{item.category}</p>
                  <h3 className="mt-2 text-3xl uppercase leading-none text-[var(--color-green-dark)]">{item.title}</h3>
                  <span className="font-brand-menu mt-4 inline-flex items-center gap-2 text-xl uppercase text-[var(--color-green-dark)] group-hover:underline">
                    Leer <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
