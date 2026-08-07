import { categoriasData } from "@/data/menuData";
import { blogPosts } from "@/data/blogData";
import { legacyRoutes, SITE_URL } from "@/data/seoData";

export const dynamic = "force-static";

const now = new Date();

const page = (path, priority = 0.7, changeFrequency = "weekly") => ({
  url: new URL(path, SITE_URL).toString(),
  lastModified: now,
  changeFrequency,
  priority,
});

export default function sitemap() {
  const basePages = [
    page("/", 1, "daily"),
    page("/carta", 0.9, "daily"),
    page("/promociones", 0.85, "weekly"),
    page("/novedades", 0.75, "weekly"),
    page("/blog", 0.65, "weekly"),
    page("/aviso-legal", 0.25, "yearly"),
    page("/privacidad", 0.25, "yearly"),
  ];

  const categoryPages = Object.keys(categoriasData).map((slug) =>
    page(`/categoria/${slug}`, 0.9, "weekly"),
  );

  const blogPages = blogPosts.map((post) =>
    page(`/blog/${post.slug}`, 0.65, "monthly"),
  );

  const legacyPages = Object.values(legacyRoutes).map((route) =>
    page(route.canonical, route.type === "category" ? 0.9 : 0.7, "weekly"),
  );

  return [...basePages, ...categoryPages, ...legacyPages, ...blogPages];
}
