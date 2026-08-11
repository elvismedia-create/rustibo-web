import LegalPolicy, { cookiesSections } from "@/components/LegalPolicy";
import { metadataFromSeo, pageSeo } from "@/data/seoData";

export const metadata = metadataFromSeo(pageSeo.cookies);

export default function CookiesPage() {
  return <LegalPolicy title="Política de cookies" sections={cookiesSections} />;
}
