import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL("https://www.rustibo.net"),
  title: "Rustibo | Comida para llevar en Alzira",
  description: "Tu opción para cenar en Alzira. Pizzas, hamburguesas, pollo frito y más.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.rustibo.net/#website",
        "url": "https://www.rustibo.net/",
        "name": "Rustibo",
        "inLanguage": "es-ES"
      },
      {
        "@type": ["FoodEstablishment", "LocalBusiness"],
        "@id": "https://www.rustibo.net/#localbusiness",
        "name": "Rustibo",
        "url": "https://www.rustibo.net/",
        "image": "https://www.rustibo.net/images/rustibo.jpg",
        "logo": "https://www.rustibo.net/images/rustibo_logo.png",
        "telephone": "+34962413948",
        "priceRange": "€€",
        "servesCuisine": [
          "Comida para llevar",
          "Pizzas",
          "Tex Mex",
          "Arroces",
          "Bocadillos",
          "Pollo frito",
          "Postres"
        ],
        "sameAs": [
          "https://www.instagram.com/rustibo/",
          "https://www.facebook.com/rustibomenjarperemportarsl"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Carrer Pastora, 9",
          "addressLocality": "Alzira",
          "addressRegion": "Valencia",
          "postalCode": "46600",
          "addressCountry": "ES"
        },
        "areaServed": {
          "@type": "City",
          "name": "Alzira"
        },
        "hasMenu": "https://www.rustibo.net/carta/",
        "acceptsReservations": false,
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "20:00",
            "closes": "23:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday"],
            "opens": "12:00",
            "closes": "15:00"
          }
        ]
      }
    ]
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${bebas.variable} antialiased bg-[var(--color-white)] text-[var(--color-black)] min-h-screen`}>
        <Header />
        <main className="w-full">
          {children}
          <Footer /> 
        </main>
        <CookieConsent />
      </body>
    </html>
  );
}
