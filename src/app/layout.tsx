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
  title: "Gazza Perfumes | Premium Fragrances",
  description:
    "Discover 7 premium fragrances. Find your favourite and order on WhatsApp.",
  keywords: [
    "Gazza Perfumes",
    "luxury perfumes",
    "inspired fragrances",
    "eau de parfum",
    "LY 19",
    "Amber Kiss",
    "Hot Crush",
    "Khalifa",
    "Hind Rajab",
    "Party Mood",
    "Midnight",
  ],
  authors: [{ name: "Gazza Perfumes" }],
  openGraph: {
    title: "Gazza Perfumes | Premium Fragrances",
    description:
      "Discover 7 premium fragrances. Find your favourite and order on WhatsApp.",
    url: "https://gazzaperfumes.com",
    siteName: "Gazza Perfumes",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://gazzaperfumes.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Gazza Perfumes | Premium Fragrances",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gazza Perfumes | Premium Fragrances",
    description:
      "Discover 7 premium fragrances. Find your favourite and order on WhatsApp.",
    images: ["https://gazzaperfumes.com/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png?v=2", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
