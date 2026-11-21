import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import OrderNote from "@/components/OrderNote";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: 'swap',
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.rustibo.net"),
  title: "Rustibo | Comida para llevar en Alzira",
  description: "Tu opción para cenar en Alzira. Pizzas, hamburguesas, pollo frito y más.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
      }
    ]
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className={`${bebas.variable} ${manrope.variable} antialiased bg-[var(--color-white)] text-[var(--color-black)] min-h-screen`}>
        <Header />
        <main className="w-full">
          {children}
          <Footer /> 
        </main>
        <CookieConsent />
        <OrderNote />
      </body>
    </html>
  );
}
