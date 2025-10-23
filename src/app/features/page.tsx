import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { Navigation, Footer } from "@/components/sections/navigation";
import { FeaturesSection } from "@/components/sections/features-section";

export const metadata: Metadata = generateSEO({
  title: "Features - 2GRW AI Portfolio Tracker",
  description: "Discover powerful features for tracking and optimizing your investment portfolio with AI insights.",
  keywords: ["portfolio features", "AI insights", "dividend tracking", "crypto tracking"],
});

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main>
        <div className="py-24 bg-gradient-to-br from-gray-900 to-black">
          <div className="container-custom text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Powerful Features for Modern Investors
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to track, analyze, and optimize your investment portfolio 
              with cutting-edge AI technology.
            </p>
          </div>
        </div>
        
        <FeaturesSection />
      </main>
      
      <Footer />
    </div>
  );
}
