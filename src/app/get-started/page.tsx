import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { Navigation, Footer } from "@/components/sections/navigation";
import { GetStartedSection } from "@/components/sections/get-started-section";
import { DistributedBackground } from "@/components/ui/distributed-background";

export const metadata: Metadata = generateSEO({
  title: "Get Started - 2GRW AI Portfolio Tracker",
  description: "Start your investment journey with 2GRW. Create your free account and begin tracking your portfolio with AI-powered insights.",
  keywords: ["get started", "sign up", "free account", "portfolio tracker signup", "investment dashboard"],
});

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="relative pt-16" style={{ zIndex: 10 }}>
        <section className="relative">
          <DistributedBackground variant="hero" />
          <GetStartedSection />
        </section>
      </main>
      
      <Footer className="relative z-20" />
    </div>
  );
}
