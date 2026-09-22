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
  title: "Gazza Perfumes | Scents That Leave A Mark",
  description:
    "Discover Gazza Perfumes — seven inspired fragrances crafted for every mood.",
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
    title: "Gazza Perfumes | Scents That Leave A Mark",
    description:
      "Discover Gazza Perfumes — seven inspired fragrances crafted for every mood.",
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
        alt: "Gazza Perfumes | Scents That Leave A Mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gazza Perfumes | Scents That Leave A Mark",
    description:
      "Discover Gazza Perfumes — seven inspired fragrances crafted for every mood.",
    images: ["https://gazzaperfumes.com/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
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
