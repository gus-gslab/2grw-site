import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { Navigation, Footer } from "@/components/sections/navigation";
import { PricingSection } from "@/components/sections/pricing-section";
import { DistributedBackground } from "@/components/ui/distributed-background";

export const metadata: Metadata = generateSEO({
  title: "Pricing - 2GRW AI Portfolio Tracker",
  description: "Choose the perfect plan for your investment tracking needs. Free forever plan available with premium features for serious investors.",
  keywords: ["pricing", "investment tracker pricing", "portfolio management cost", "AI investment tools"],
});

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="relative pt-16" style={{ zIndex: 10 }}>
        <section className="relative">
          <DistributedBackground variant="pricing" />
          <PricingSection />
        </section>
      </main>
      
      <Footer className="relative z-20" />
    </div>
  );
}
