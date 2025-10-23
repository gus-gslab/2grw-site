"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Zap, Brain, Target, BarChart3, Newspaper, Bell, Filter } from "lucide-react";
import { composerReveal, composerStaggerContainer, composerStaggerItem, composerHover, textReveal, fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { gradients, shadows } from "@/lib/visual-effects";
import { GradientButton } from "@/components/ui/gradient-button";

export function FeaturesSection() {
  const features = [
    {
      icon: TrendingUp,
      title: "Dividend Tracker",
      description: "Track all your dividend payments, yields, and income projections. Monitor monthly and annual dividend income across your entire portfolio with real-time updates.",
      color: "from-green-500 to-emerald-500",
      iconColor: "#10B981"
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      description: "Analyze your returns organized in 3 categories: non-dividend investments, dividend-paying investments, and crypto. Track performance and returns in real-time.",
      color: "from-blue-500 to-cyan-500",
      iconColor: "#3B82F6"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get intelligent investment recommendations powered by advanced machine learning that analyzes market patterns and your portfolio performance.",
      color: "from-purple-500 to-pink-500",
      iconColor: "#8B5CF6"
    },
    {
      icon: Shield,
      title: "Real-Time Monitoring",
      description: "Monitor your investments with real-time market data. Stay updated with live portfolio values, dividend payments, and market movements.",
      color: "from-indigo-500 to-blue-500",
      iconColor: "#6366F1"
    },
    {
      icon: Target,
      title: "Investment Categories",
      description: "Organize your investments into clear categories: stocks, crypto, and dividend-paying assets. Track each category's performance separately.",
      color: "from-orange-500 to-red-500",
      iconColor: "#F59E0B"
    },
    {
      icon: Zap,
      title: "Smart Dashboard",
      description: "Access a comprehensive dashboard with all your investment data in one place. View portfolio value, dividend income, and performance metrics.",
      color: "from-yellow-500 to-orange-500",
      iconColor: "#C1EF00"
    },
    {
      icon: Newspaper,
      title: "Real-Time Market News",
      description: "Stay updated with the latest financial news and market updates in real-time. Get breaking news, earnings reports, and market analysis that could impact your investments.",
      color: "from-cyan-500 to-blue-500",
      iconColor: "#06B6D4"
    },
    {
      icon: Bell,
      title: "Investment Alerts",
      description: "Set up custom alerts for specific stocks and price targets. Never miss investment opportunities with buy/sell alerts, dividend notifications, and portfolio change alerts. Configure push notifications to stay updated.",
      color: "from-pink-500 to-purple-500",
      iconColor: "#EC4899"
    },
    {
      icon: Filter,
      title: "Smart Filters & Sorting",
      description: "Sort your investments by performance, value, or name. Switch between grid and list views. Filter by daily returns with color-coded performance indicators (green for gains, red for losses).",
      color: "from-emerald-500 to-teal-500",
      iconColor: "#14B8A6"
    }
  ];

  return (
    <section className="py-48 relative overflow-hidden px-24">

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          {...composerReveal}
          className="text-center mb-20"
        >
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Zap className="w-5 h-5 mr-2 text-[#C1EF00]" />
                <span className="text-white">Premium Features</span>
              </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-8">
            Track your investments{" "}
            <span className="bg-gradient-to-r from-purple-500 via-lime-400 to-white bg-clip-text text-transparent">
              with AI-powered insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Monitor dividends, crypto, and stocks in one intelligent dashboard. Track your portfolio performance, 
            analyze returns, and get AI-powered insights to maximize your investment returns.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          {...composerStaggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                {...composerStaggerItem}
                {...composerHover}
                className="group"
              >
                <div className="glass-card p-8 rounded-2xl transition-all duration-500 h-full">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/10 backdrop-blur-xl border border-purple-500/50 shadow-lg shadow-purple-500/20"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: feature.iconColor }} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#814CF4] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          {...composerReveal}
          className="text-center"
        >
          <motion.div 
            className="glass-card rounded-3xl p-12"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to start building wealth with AI?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join over 50,000 investors who trust 2GRW to manage their portfolios, 
              reduce risk, and maximize returns with intelligent automation.
            </p>
            <GradientButton href="/get-started" className="px-8 py-4 text-lg">
              Get Started Today
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}