import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gazzaperfumes.com"),
  title: "GAZZA PERFUMES | Fragrance of Heaven",
  description:
    "Discover Gazza’s exclusive collection of inspired luxury fragrances. Seven artisanal scent profiles crafted for individuality, confidence, and sovereign presence. Direct order & consultation on WhatsApp.",
  keywords: [
    "Gazza Perfumes",
    "luxury perfumes",
    "inspired fragrances",
    "extrait de parfum",
    "LY 19",
    "Amber Kiss",
    "Hot Crush",
    "Khalifa",
    "perfume boutique",
  ],
  authors: [{ name: "Gazza Perfumes" }],
  openGraph: {
    title: "GAZZA PERFUMES | Scents That Leave A Mark",
    description:
      "Seven fragrances. Seven moods. Discover Gazza’s inspired collection crafted for presence and individuality.",
    url: "https://gazzaperfumes.com",
    siteName: "Gazza Perfumes",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/products/ly-19.png",
        width: 1200,
        height: 1200,
        alt: "Gazza Perfumes Signature Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GAZZA PERFUMES | Scents That Leave A Mark",
    description:
      "Seven fragrances. Seven moods. Discover Gazza’s inspired collection crafted for presence and individuality.",
    images: ["/images/products/ly-19.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth bg-onyx-950 text-ivory-100 antialiased selection:bg-garnet-900 selection:text-ivory-50`}
    >
      <body className="bg-onyx-950 min-h-screen font-sans text-ivory-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
