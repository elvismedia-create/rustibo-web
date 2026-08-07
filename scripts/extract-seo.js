#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const SITE = "https://www.rustibo.net";

const urls = [
  "/",
  "/comida-para-llevar-en-alzira-productos/",
  "/tex-mex-para-llevar-alzira/",
  "/arroces-para-llevar-alzira/",
  "/bocadillos-para-llevar-en-alzira/",
  "/carnes-asadas-para-llevar-alzira/",
  "/entrantes-para-llevar-alzira/",
  "/ensaladas-para-llevar-alzira/",
  "/hamburguesas-para-llevar-alzira/",
  "/kebabs-para-llevar-alzira/",
  "/pasta-para-llevar-alzira/",
  "/pizzas-para-llevar-alzira/",
  "/rustibizzas-para-llevar-alzira/",
  "/pollo-frito-para-llevar-alzira/",
  "/sandwiches-para-llevar-alzira/",
  "/menu_infantil/",
  "/novedades/",
  "/promociones/",
  "/contact/",
  "/politica_de_privacidad/",
  "/politica_de_cookies/",
];

const decodeEntities = (value = "") =>
  value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([a-f0-9]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const normalize = (value = "") =>
  decodeEntities(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const firstMatch = (html, regex) => {
  const match = html.match(regex);
  return match ? normalize(match[1]) : "";
};

const allMatches = (html, regex) =>
  [...html.matchAll(regex)]
    .map((match) => normalize(match[1]))
    .filter(Boolean);

const metaByName = (html, name) =>
  firstMatch(
    html,
    new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i"),
  ) ||
  firstMatch(
    html,
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${name}["'][^>]*>`, "i"),
  );

const metaByProperty = (html, property) =>
  firstMatch(
    html,
    new RegExp(`<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i"),
  ) ||
  firstMatch(
    html,
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+property=["']${property}["'][^>]*>`, "i"),
  );

const canonical = (html) =>
  firstMatch(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["'][^>]*>/i) ||
  firstMatch(html, /<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["'][^>]*>/i);

const visibleText = (html) => {
  const main =
    firstMatch(html, /<main[^>]*>([\s\S]*?)<\/main>/i) ||
    firstMatch(html, /<body[^>]*>([\s\S]*?)<\/body>/i);

  return normalize(
    main
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript[\s\S]*?<\/noscript>/gi, " "),
  ).slice(0, 3000);
};

const parseSchema = (html) => {
  const scripts = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];

  return scripts.map((script) => {
    const raw = decodeEntities(script[1].trim());
    try {
      const json = JSON.parse(raw);
      const graph = Array.isArray(json?.["@graph"]) ? json["@graph"] : [json];
      const types = graph
        .map((item) => item?.["@type"])
        .flat()
        .filter(Boolean);

      return {
        types: [...new Set(types)],
        json,
      };
    } catch (error) {
      return {
        error: error.message,
        raw: raw.slice(0, 1000),
      };
    }
  });
};

const extract = async (url) => {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Rustibo SEO extractor/1.0",
      accept: "text/html",
    },
    redirect: "follow",
  });
  const html = await response.text();

  return {
    url,
    finalUrl: response.url,
    status: response.status,
    title: firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    description: metaByName(html, "description"),
    robots: metaByName(html, "robots"),
    canonical: canonical(html),
    og: {
      title: metaByProperty(html, "og:title"),
      description: metaByProperty(html, "og:description"),
      image: metaByProperty(html, "og:image"),
      url: metaByProperty(html, "og:url"),
      type: metaByProperty(html, "og:type"),
    },
    twitter: {
      title: metaByName(html, "twitter:title"),
      description: metaByName(html, "twitter:description"),
      image: metaByName(html, "twitter:image"),
    },
    headings: {
      h1: allMatches(html, /<h1[^>]*>([\s\S]*?)<\/h1>/gi),
      h2: allMatches(html, /<h2[^>]*>([\s\S]*?)<\/h2>/gi),
    },
    schema: parseSchema(html),
    visibleText: visibleText(html),
  };
};

const toMarkdown = (pages) => {
  const lines = [
    "# SEO actual extraído de Rustibo",
    "",
    `Fecha de extracción: ${new Date().toISOString()}`,
    `Dominio: ${SITE}`,
    "",
  ];

  for (const page of pages) {
    lines.push(`## ${page.url}`);
    lines.push("");
    lines.push(`- Estado: ${page.status}`);
    lines.push(`- URL final: ${page.finalUrl}`);
    lines.push(`- Title: ${page.title || "(sin title)"}`);
    lines.push(`- Description: ${page.description || "(sin description)"}`);
    lines.push(`- Canonical: ${page.canonical || "(sin canonical)"}`);
    lines.push(`- Robots: ${page.robots || "(sin robots)"}`);
    lines.push(`- OG title: ${page.og.title || "(sin og:title)"}`);
    lines.push(`- OG description: ${page.og.description || "(sin og:description)"}`);
    lines.push(`- OG image: ${page.og.image || "(sin og:image)"}`);
    lines.push(`- H1: ${page.headings.h1.length ? page.headings.h1.join(" | ") : "(sin H1)"}`);
    lines.push(`- H2: ${page.headings.h2.length ? page.headings.h2.join(" | ") : "(sin H2)"}`);
    lines.push(`- Schema types: ${page.schema.flatMap((item) => item.types || []).join(", ") || "(sin schema parseable)"}`);
    lines.push("");
    lines.push("Texto visible inicial:");
    lines.push("");
    lines.push("```text");
    lines.push(page.visibleText || "(sin texto visible)");
    lines.push("```");
    lines.push("");
  }

  return `${lines.join("\n")}\n`;
};

const main = async () => {
  const outDir = path.join(process.cwd(), "docs");
  fs.mkdirSync(outDir, { recursive: true });

  const pages = [];

  for (const pathname of urls) {
    const url = pathname.startsWith("http") ? pathname : `${SITE}${pathname}`;
    process.stdout.write(`Extrayendo ${url} ... `);
    try {
      const page = await extract(url);
      pages.push(page);
      process.stdout.write(`${page.status}\n`);
    } catch (error) {
      pages.push({ url, status: "ERROR", error: error.message });
      process.stdout.write(`ERROR ${error.message}\n`);
    }
  }

  const jsonPath = path.join(outDir, "seo-current-pages.json");
  const mdPath = path.join(outDir, "seo-current-pages.md");

  fs.writeFileSync(jsonPath, `${JSON.stringify(pages, null, 2)}\n`);
  fs.writeFileSync(mdPath, toMarkdown(pages));

  console.log(`\nGuardado: ${jsonPath}`);
  console.log(`Guardado: ${mdPath}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
