import LegalPolicy, { cookiesSections } from "@/components/LegalPolicy";

export const metadata = {
  title: "Política de cookies | Rustibo",
  description: "Política de cookies de Rustibo Alzira. Información sobre el uso de cookies, consentimiento y configuración del navegador.",
};

export default function CookiesPage() {
  return <LegalPolicy title="Política de cookies" sections={cookiesSections} />;
}
