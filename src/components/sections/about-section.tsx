"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Brain, Target, Users, Award, Zap, TrendingUp } from "lucide-react";
import { composerReveal, composerStaggerContainer, composerStaggerItem, composerHover } from "@/lib/animations";
import { GradientButton } from "@/components/ui/gradient-button";

export function AboutSection() {
  const values = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "We believe artificial intelligence can democratize sophisticated investment strategies, making them accessible to everyone.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "User-Centric Design",
      description: "Every feature is designed with our users in mind, ensuring simplicity without sacrificing power.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "We're building a community of intelligent investors who share knowledge and grow together.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to delivering the highest quality tools and insights to help you succeed.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Investors", icon: Users },
    { value: "$2.5B+", label: "Assets Under Management", icon: TrendingUp },
    { value: "94%", label: "AI Prediction Accuracy", icon: Brain },
    { value: "4.9★", label: "Customer Satisfaction", icon: Award }
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
            <span className="text-white">About 2GRW</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-8">
            Revolutionizing{" "}
            <span className="bg-gradient-to-r from-purple-500 via-lime-400 to-white bg-clip-text text-transparent">
              wealth building
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We&apos;re democratizing sophisticated investment strategies, making institutional-grade 
            portfolio management accessible to every investor through AI-powered intelligence.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          {...composerReveal}
          className="backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/10 mb-20"
          style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'}}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                At 2GRW, we&apos;re transforming how people build wealth by making institutional-grade 
                investment strategies accessible to everyone. Our AI-powered platform analyzes market 
                data, manages risk, and optimizes portfolios automatically.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe that sophisticated portfolio management shouldn&apos;t be limited to Wall Street. 
                Every investor deserves access to the same tools and insights that help the wealthy grow their wealth.
              </p>
            </div>
            <div className="relative">
              <motion.div
                className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Brain className="w-32 h-32 text-white/50" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          {...composerStaggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            
            return (
              <motion.div
                key={value.title}
                {...composerStaggerItem}
                {...composerHover}
                className="group"
              >
                <div className="backdrop-blur-sm bg-white/5 hover:bg-white/10 p-8 rounded-2xl border border-white/10 transition-all duration-500 text-center h-full"
                  style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
                >
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-r ${value.color}`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          {...composerReveal}
          className="backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/10 mb-20"
          style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'}}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-lg text-gray-300">
              Trusted by thousands of investors worldwide
            </p>
          </div>
          
          <motion.div
            {...composerStaggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              
              return (
                <motion.div
                  key={stat.label}
                  {...composerStaggerItem}
                  className="text-center"
                >
                  <motion.div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-white/10 backdrop-blur-xl border border-purple-500/50"
                    whileHover={{ scale: 1.1 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...composerReveal}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to start building wealth with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of investors who are already using 2GRW to optimize their portfolios 
            and achieve their financial goals with intelligent automation.
          </p>
          <GradientButton href="/get-started" className="px-8 py-4 text-lg">
            Get Started Free
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}


