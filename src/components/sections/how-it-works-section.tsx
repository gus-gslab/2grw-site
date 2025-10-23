"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Brain, TrendingUp, BarChart3, Target, Users, CheckCircle, UserPlus, DollarSign, ChartLine, User, CreditCard, BarChart, FileText, Newspaper, BookOpen } from "lucide-react";
import { composerReveal, composerStaggerContainer, composerStaggerItem, composerHover } from "@/lib/animations";
import { GradientButton } from "@/components/ui/gradient-button";

export function HowItWorksSection() {
  const mainSteps = [
    {
      step: 1,
      title: "Create Your Account",
      description: "Sign up for free and set up your personalized investment dashboard. Get started in minutes with our simple onboarding process.",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Track Your Dividends",
      description: "See all dividend payments you'll receive monthly and annually. Monitor dividend yields, payment schedules, and income projections across your entire portfolio.",
      icon: Newspaper,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 3,
      title: "Analyze Your Returns",
      description: "View your gains organized in 3 categories: non-dividend investments, dividend-paying investments, and crypto. Track performance and returns in real-time.",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const features = [
    {
      title: "Portfolio Tracking",
      description: "Monitor all your investments in one unified dashboard with real-time updates and performance metrics.",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Insights",
      description: "Get intelligent recommendations based on your risk tolerance, financial goals, and market conditions.",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Dividend Tracking",
      description: "Track all your dividend payments, yields, and income projections across your entire portfolio.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Risk Management",
      description: "Advanced risk analysis helps you understand your portfolio's exposure and optimize for better returns.",
      icon: Target,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Automate portfolio tracking and analysis that would take hours to do manually.",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Make Better Decisions",
      description: "Data-driven insights help you make informed investment decisions based on facts, not emotions.",
      icon: CheckCircle,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Optimize Returns",
      description: "AI-powered optimization helps you maximize returns while managing risk effectively.",
      icon: CheckCircle,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Stay Informed",
      description: "Real-time alerts and updates keep you informed about market changes and opportunities.",
      icon: CheckCircle,
      color: "from-yellow-500 to-orange-500"
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
            <span className="text-white">How It Works</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-8">
            Simple,{" "}
            <span className="bg-gradient-to-r from-purple-500 via-lime-400 to-white bg-clip-text text-transparent">
              intelligent investing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our AI-powered platform makes sophisticated portfolio management accessible to every investor. 
            Here&apos;s how we help you build wealth intelligently.
          </p>
        </motion.div>

               {/* Main Process Steps */}
               <motion.div
                 {...composerStaggerContainer}
                 className="mb-20"
               >
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {mainSteps.map((step, index) => {
                     const IconComponent = step.icon;

                     return (
                       <motion.div
                         key={step.step}
                         {...composerStaggerItem}
                         className="group"
                       >
                         <motion.div
                           className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 h-full"
                           style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'}}
                           whileHover={{ scale: 1.02 }}
                           transition={{ duration: 0.3 }}
                         >
                           <div className="text-left">
                             <motion.div
                               className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                               whileHover={{ scale: 1.05 }}
                               transition={{ duration: 0.3 }}
                               style={{
                                 backgroundColor: '#282828',
                                 border: '1px solid rgba(138, 43, 226, 0.3)',
                                 boxShadow: '0 0 8px rgba(138, 43, 226, 0.2)'
                               }}
                             >
                               <IconComponent 
                                 className="w-8 h-8" 
                                 style={{
                                   color: step.color.includes('blue') ? '#00d4ff' : step.color.includes('green') ? '#00C853' : '#ff6b9d',
                                   strokeWidth: 2
                                 }}
                               />
                             </motion.div>
                             <h2 className="text-2xl font-bold text-white mb-4">{step.title}</h2>
                             <p className="text-lg text-gray-300 leading-relaxed">
                               {step.description}
                             </p>
                           </div>
                         </motion.div>
                       </motion.div>
                     );
                   })}
                 </div>
               </motion.div>


      </div>
    </section>
  );
}