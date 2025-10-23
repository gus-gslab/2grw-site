import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { Navigation, Footer } from "@/components/sections/navigation";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { DistributedBackground } from "@/components/ui/distributed-background";

export const metadata: Metadata = generateSEO({
  title: "How It Works - 2GRW AI Portfolio Tracker",
  description: "Learn how 2GRW's AI-powered platform helps you track investments, analyze performance, and optimize your portfolio with intelligent insights.",
  keywords: ["how it works", "portfolio tracker guide", "AI investment platform", "investment tracking process"],
});

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="relative pt-16" style={{ zIndex: 10 }}>
        <section className="relative">
          <DistributedBackground variant="how-it-works" />
          <HowItWorksSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
