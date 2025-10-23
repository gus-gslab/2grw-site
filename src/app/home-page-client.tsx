"use client";

import { Navigation, Footer } from "@/components/sections/navigation";
import { HeroSectionModern } from "@/components/sections/hero-section-modern";
import { FeaturesSection } from "@/components/sections/features-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { AboutCreatorSection } from "@/components/sections/about-creator-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Preloader } from "@/components/ui/preloader";
import { usePreloader } from "@/hooks/use-preloader";
import { AnimatePresence } from "framer-motion";

export function HomePageClient() {
  const { showPreloader, handlePreloaderComplete } = usePreloader();

  return (
    <>
      <AnimatePresence>
        {showPreloader && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>
      
      <div className="min-h-screen bg-black">
        <Navigation />
        
        <main className="relative pt-16" style={{ zIndex: 10 }}>
          <section className="relative">
            <HeroSectionModern />
          </section>
          <section id="features" className="relative">
            <FeaturesSection />
          </section>
          <section id="how-it-works" className="relative">
            <HowItWorksSection />
          </section>
          <section id="about" className="relative">
            <AboutCreatorSection />
          </section>
          <section id="faq" className="relative">
            <FAQSection />
          </section>
          <section id="blog" className="relative">
            <CTASection />
          </section>
        </main>
        
        <Footer className="relative z-20" />
      </div>
    </>
  );
}
