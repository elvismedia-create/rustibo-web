import LegalPolicy, { privacySections } from "@/components/LegalPolicy";
import { metadataFromSeo, pageSeo } from "@/data/seoData";

export const metadata = metadataFromSeo(pageSeo.privacidad);

export default function PrivacidadPage() {
  return <LegalPolicy title="Política de privacidad" sections={privacySections} />;
}
