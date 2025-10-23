"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Brain, TrendingUp, BarChart3, Star } from "lucide-react";
import { composerReveal, composerStaggerContainer, composerStaggerItem, composerHover } from "@/lib/animations";
import { GradientButton } from "@/components/ui/gradient-button";

export function GetStartedSection() {
  const steps = [
    {
      step: 1,
      title: "Create Your Account",
      description: "Sign up with your email and create a secure password. No credit card required.",
      icon: Shield,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Connect Your Broker",
      description: "Securely link your investment accounts to automatically sync your portfolio data.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 3,
      title: "Get AI Insights",
      description: "Receive personalized investment recommendations and portfolio optimization suggestions.",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const features = [
    {
      title: "AI-Powered Analysis",
      description: "Get intelligent insights about your portfolio performance and optimization opportunities.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-Time Tracking",
      description: "Monitor your investments with live market data and instant updates.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Dividend Tracking",
      description: "Track all your dividend payments and income projections automatically.",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Mobile Access",
      description: "Access your portfolio anywhere with our responsive web app and mobile interface.",
      icon: TrendingUp,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Individual Investor",
      content: "2GRW has completely transformed how I manage my investments. The AI insights are incredibly accurate and have helped me optimize my portfolio significantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Financial Advisor",
      content: "I recommend 2GRW to all my clients. The platform makes complex portfolio management accessible and provides insights that were previously only available to institutional investors.",
      rating: 5
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
            <span className="text-white">Get Started</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-8">
            Start your{" "}
            <span className="bg-gradient-to-r from-purple-500 via-lime-400 to-white bg-clip-text text-transparent">
              investment journey
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join thousands of investors who are already using 2GRW to optimize their portfolios 
            and achieve their financial goals with AI-powered intelligence.
          </p>
        </motion.div>

        {/* Sign Up Form */}
        <motion.div
          {...composerReveal}
          className="backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/10 mb-20 max-w-2xl mx-auto"
          style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'}}
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Your Free Account</h2>
          <p className="text-gray-300 mb-8 text-center">
            No credit card required. Start tracking your investments in minutes.
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  placeholder="Your last name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                placeholder="Create a secure password"
              />
            </div>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="terms"
                className="w-4 h-4 text-purple-500 bg-white/10 border-white/20 rounded focus:ring-purple-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                I agree to the{" "}
                <a href="/terms" className="text-purple-400 hover:text-purple-300">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-purple-400 hover:text-purple-300">
                  Privacy Policy
                </a>
              </label>
            </div>
            
            <GradientButton type="submit" className="w-full px-8 py-4 text-lg">
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </GradientButton>
          </form>
        </motion.div>

        {/* How It Works */}
        <motion.div
          {...composerStaggerContainer}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-lg text-gray-300">
              Get started in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <motion.div
                  key={step.step}
                  {...composerStaggerItem}
                  className="text-center"
                >
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-r ${step.color}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="text-2xl font-bold text-white mb-4">Step {step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          {...composerStaggerContainer}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What You&apos;ll Get</h2>
            <p className="text-lg text-gray-300">
              Powerful features to optimize your investment strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <motion.div
                  key={feature.title}
                  {...composerStaggerItem}
                  {...composerHover}
                  className="group"
                >
                  <div className="backdrop-blur-sm bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 transition-all duration-500 text-center h-full"
                    style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
                  >
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-r ${feature.color}`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          {...composerStaggerContainer}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-300">
              Join thousands of satisfied investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...composerStaggerItem}
                className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10"
                style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          {...composerReveal}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to start building wealth?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Create your free account today and join thousands of investors who are already 
            optimizing their portfolios with AI-powered insights.
          </p>
          <GradientButton href="#signup" className="px-8 py-4 text-lg">
            Create Free Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
