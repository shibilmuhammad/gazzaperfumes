import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyGazza from "@/components/WhyGazza";
import ProductGrid from "@/components/ProductGrid";
import FragranceGuide from "@/components/FragranceGuide";
import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-onyx-950 text-ivory-100 selection:bg-garnet-900 selection:text-white">
      {/* Sticky Editorial Navigation */}
      <Navbar />

      {/* 1. Hero with visual value proposition row */}
      <Hero />

      {/* 2. Why Gazza (Simple 3 honest points) */}
      <div id="why">
        <WhyGazza />
      </div>

      {/* 3. The 7 Fragrance Collection ("FIND YOUR SCENT") */}
      <ProductGrid />

      {/* 4. Fragrance Guide ("WHICH ONE IS FOR YOU?" + "LOVE [ORIGINAL]? TRY GAZZA") */}
      <FragranceGuide />

      {/* 5. Short, authentic About Section ("MORE THAN A FRAGRANCE.") */}
      <AboutSection />

      {/* 6. Final WhatsApp Consultation CTA ("FIND YOUR FRAGRANCE.") */}
      <FinalCTA />

      {/* Minimal Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Quick-Action */}
      <FloatingWhatsApp />
    </main>
  );
}
