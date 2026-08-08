import LegalPolicy, { privacySections } from "@/components/LegalPolicy";

export const metadata = {
  title: "Política de privacidad | Rustibo",
  description: "Política de privacidad de Rustibo Alzira. Información sobre datos personales, pedidos, contacto y derechos del usuario.",
};

export default function PrivacidadPage() {
  return <LegalPolicy title="Política de privacidad" sections={privacySections} />;
}
