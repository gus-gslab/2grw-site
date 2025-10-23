import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { HomePageClient } from "./home-page-client";

export const metadata: Metadata = generateSEO({
  title: "2GRW - AI-Powered Investment Portfolio Tracker",
  description: "Track your investments with AI-powered insights. Monitor dividends, crypto, and stocks in one intelligent dashboard.",
  keywords: ["AI portfolio tracker", "dividend tracker", "investment dashboard", "portfolio management"],
});

export default function HomePage() {
  return <HomePageClient />;
}