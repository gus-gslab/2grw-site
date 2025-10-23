"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, DollarSign, BarChart3, Target, Activity } from "lucide-react";
import { composerReveal, composerStaggerContainer, composerStaggerItem, composerHover } from "@/lib/animations";
import { GradientButton } from "@/components/ui/gradient-button";


export function HeroSectionModern() {

  return (
        <section className="min-h-screen relative overflow-hidden bg-transparent px-24">
          {/* Minimalist Line Graph Background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
                  <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
                  <stop offset="100%" stopColor="rgba(34, 197, 94, 0.3)" />
                </linearGradient>
              </defs>
              
              {/* Main Line Graph */}
              <path
                d="M 0,400 Q 200,350 400,380 T 800,320 T 1200,300"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
              />
              
              {/* Secondary Line */}
              <path
                d="M 0,450 Q 300,400 600,420 T 1200,380"
                stroke="rgba(147, 51, 234, 0.2)"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
              
              {/* Data Points */}
              <circle cx="200" cy="350" r="4" fill="rgba(147, 51, 234, 0.6)" />
              <circle cx="400" cy="380" r="4" fill="rgba(59, 130, 246, 0.6)" />
              <circle cx="600" cy="360" r="4" fill="rgba(34, 197, 94, 0.6)" />
              <circle cx="800" cy="320" r="4" fill="rgba(34, 197, 94, 0.6)" />
              <circle cx="1000" cy="310" r="4" fill="rgba(34, 197, 94, 0.6)" />
              
              {/* Subtle Grid Lines */}
              <line x1="0" y1="200" x2="1200" y2="200" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
              <line x1="0" y1="300" x2="1200" y2="300" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
              <line x1="0" y1="400" x2="1200" y2="400" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
              <line x1="0" y1="500" x2="1200" y2="500" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
            </svg>
          </div>

      <div className="container-custom relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div 
            {...composerStaggerContainer}
            className="text-left"
          >
          <div className="space-y-12">

            {/* Badge */}
            <motion.div 
              {...composerStaggerItem}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-white">AI-Powered Investment Intelligence</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div 
              {...composerStaggerItem}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white tracking-tight" style={{ lineHeight: '4.5rem' }}>
                Maximize Your Returns
                <br />
                with{" "}
                <span className="bg-gradient-to-r from-purple-500 via-lime-400 to-white bg-clip-text text-transparent">
                  Smart Analytics
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Advanced portfolio tracking, real-time market analysis, and AI-driven investment recommendations. 
                Transform your wealth building with data-driven insights.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div {...composerStaggerItem}>
              <GradientButton href="/get-started">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </GradientButton>
            </motion.div>

          </div>
          </motion.div>

          {/* Right Content - Modern Dashboard with Orbital Elements */}
          <motion.div 
            {...composerReveal}
            className="hidden lg:block"
          >
            <div className="relative w-full h-[600px]">

              {/* Orbital Cards */}
                     {/* Card 1 - Top Right - Performance */}
                     <motion.div
                       className="absolute top-4 right-16 w-36 bg-gradient-to-br from-green-500/15 to-emerald-500/25 backdrop-blur-xl rounded-2xl border border-green-500/40 shadow-2xl"
                       style={{ padding: '12px', height: 'auto' }}
                       animate={{
                         x: [0, 15, 0],
                         y: [0, -8, 0],
                         rotate: [0, 3, 0]
                       }}
                       transition={{
                         duration: 5,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                       whileHover={{ scale: 1.05 }}
                     >
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <div className="text-green-300 text-xs font-medium">Performance</div>
                </div>
                <div className="text-white text-xl font-bold mb-2">+8.2%</div>
                <div className="w-full h-2 bg-green-500/20 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                    animate={{ width: ["0%", "82%"] }}
                    transition={{ duration: 3, delay: 1, ease: "easeOut" }}
                  />
                </div>
                <div className="text-green-300 text-xs mt-1">vs last month</div>
              </motion.div>

                     {/* Card 2 - Top Left - AI Score */}
                     <motion.div
                       className="absolute top-8 left-16 w-32 bg-gradient-to-br from-purple-500/15 to-pink-500/25 backdrop-blur-xl rounded-2xl border border-purple-500/40 shadow-2xl"
                       style={{ padding: '12px', height: 'auto' }}
                       animate={{
                         x: [0, -12, 0],
                         y: [0, 10, 0],
                         rotate: [0, -2, 0]
                       }}
                       transition={{
                         duration: 6,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                       whileHover={{ scale: 1.05 }}
                     >
                <div className="flex items-center justify-between mb-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  <div className="text-purple-300 text-xs font-medium">AI Score</div>
                </div>
                <div className="text-white text-xl font-bold mb-2">94</div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: i * 0.3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>

                     {/* Card 3 - Bottom Right - Risk Level */}
                     <motion.div
                       className="absolute bottom-12 right-16 w-40 bg-gradient-to-br from-blue-500/15 to-cyan-500/25 backdrop-blur-xl rounded-2xl border border-blue-500/40 shadow-2xl"
                       style={{ padding: '12px', height: 'auto' }}
                       animate={{
                         x: [0, 15, 0],
                         y: [0, -10, 0],
                         rotate: [0, 2, 0]
                       }}
                       transition={{
                         duration: 7,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                       whileHover={{ scale: 1.05 }}
                     >
                <div className="flex items-center justify-between mb-2">
                  <Activity className="w-4 h-4 text-blue-400" />
                  <div className="text-blue-300 text-xs font-medium">Risk Level</div>
                </div>
                <div className="text-white text-lg font-bold mb-1">Moderate</div>
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-3 h-3 bg-yellow-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="text-yellow-300 text-xs">Balanced Portfolio</span>
                </div>
              </motion.div>

                     {/* Card 4 - Bottom Left - Active Trades */}
                     <motion.div
                       className="absolute bottom-12 left-16 w-36 bg-gradient-to-br from-orange-500/15 to-red-500/25 backdrop-blur-xl rounded-2xl border border-orange-500/40 shadow-2xl"
                       style={{ padding: '12px', height: 'auto' }}
                       animate={{
                         x: [0, -15, 0],
                         y: [0, 8, 0],
                         rotate: [0, -2, 0]
                       }}
                       transition={{
                         duration: 8,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                       whileHover={{ scale: 1.05 }}
                     >
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="w-4 h-4 text-orange-400" />
                  <div className="text-orange-300 text-xs font-medium">Active Trades</div>
                </div>
                <motion.div 
                  className="text-white text-xl font-bold mb-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  12
                </motion.div>
                <div className="text-orange-300 text-xs">+3 this week</div>
              </motion.div>

              {/* Card 5 - Top Center - Market Status */}
              <motion.div
                className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 bg-gradient-to-br from-indigo-500/15 to-purple-500/25 backdrop-blur-xl rounded-2xl border border-indigo-500/40 shadow-2xl"
                style={{ padding: '12px', height: 'auto' }}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <BarChart3 className="w-4 h-4 text-indigo-400" />
                  <div className="text-indigo-300 text-xs font-medium">Market</div>
                </div>
                <div className="text-white text-lg font-bold mb-1">Bull</div>
                <div className="flex items-center space-x-1">
                  <motion.div 
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="text-green-300 text-xs">+2.1%</span>
                </div>
              </motion.div>

                     {/* Card 6 - Total Portfolio - Top Right */}
                     <motion.div
                       className="absolute top-1/4 right-16 w-40 bg-gradient-to-br from-purple-500/15 to-blue-500/25 backdrop-blur-xl rounded-2xl border border-purple-500/40 shadow-2xl"
                       style={{ padding: '12px', height: 'auto' }}
                       animate={{
                         y: [0, -8, 0],
                         rotate: [0, 2, 0]
                       }}
                       transition={{
                         duration: 5,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                       whileHover={{ scale: 1.05 }}
                     >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-purple-300 text-xs font-medium">Total Portfolio</div>
                  <div className="text-green-400 text-xs">+12.5%</div>
                </div>
                <motion.div 
                  className="text-white text-xl font-bold mb-1"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  $125,430
                </motion.div>
                <div className="text-green-400 text-xs">this month</div>
              </motion.div>

                     {/* Card 7 - Dividends Monthly - Top Left */}
                     <motion.div
                       className="absolute top-1/4 left-16 w-36 bg-gradient-to-br from-blue-500/15 to-cyan-500/25 backdrop-blur-xl rounded-2xl border border-blue-500/40 shadow-2xl"
                       style={{ padding: '12px', height: 'auto' }}
                       animate={{
                         x: [0, 10, 0],
                         y: [0, -6, 0],
                         rotate: [0, -1, 0]
                       }}
                       transition={{
                         duration: 6,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                       whileHover={{ scale: 1.05 }}
                     >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-blue-300 text-xs font-medium">Dividends Monthly</div>
                  <div className="text-blue-400 text-xs">+8.2%</div>
                </div>
                <motion.div 
                  className="text-white text-xl font-bold mb-1"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  $1,250
                </motion.div>
                <div className="text-blue-400 text-xs">this month</div>
              </motion.div>

                     {/* Card 8 - Today - Bottom Center */}
                     <motion.div
                       className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-32 bg-gradient-to-br from-green-500/15 to-emerald-500/25 backdrop-blur-xl rounded-2xl border border-green-500/40 shadow-2xl"
                       style={{ padding: '12px', height: 'auto' }}
                       animate={{
                         x: [0, -8, 0],
                         y: [0, 5, 0],
                         rotate: [0, 1, 0]
                       }}
                       transition={{
                         duration: 4.5,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                       whileHover={{ scale: 1.05 }}
                     >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-green-300 text-xs font-medium">Today</div>
                  <div className="text-green-400 text-xs">+2.4%</div>
                </div>
                <motion.div 
                  className="text-white text-xl font-bold mb-1"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  +$2,340
                </motion.div>
                <div className="text-green-400 text-xs">gain</div>
              </motion.div>

              {/* Floating Mini Charts */}
                     {/* Chart 1 - AAPL - Middle Center */}
                     <motion.div
                       className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-28 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl"
                       style={{ padding: '12px', height: 'auto' }}
                       animate={{
                         x: [0, 8, 0],
                         y: [0, -5, 0],
                         rotate: [0, 1, 0]
                       }}
                       transition={{
                         duration: 4,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                       whileHover={{ scale: 1.1, rotate: 0 }}
                     >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white text-xs font-medium">AAPL</div>
                  <div className="text-green-400 text-xs">+2.4%</div>
                </div>
                <div className="flex items-end space-x-1 h-10">
                  {[2, 4, 3, 5, 4, 6, 5, 7].map((height, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-green-500 to-green-400 rounded-full"
                      style={{ height: `${height * 2.5}px` }}
                      animate={{ 
                        height: [`${height * 2.5}px`, `${(height + 1) * 2.5}px`, `${height * 2.5}px`],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2.5, 
                        delay: i * 0.2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>

                     {/* Chart 2 - TSLA - Middle Left */}
                     <motion.div
                       className="absolute top-1/2 left-16 w-28 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl"
                       style={{ padding: '12px', height: 'auto' }}
                       animate={{
                         x: [0, -8, 0],
                         y: [0, 5, 0],
                         rotate: [0, -1, 0]
                       }}
                       transition={{
                         duration: 5,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                       whileHover={{ scale: 1.1, rotate: 0 }}
                     >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white text-xs font-medium">TSLA</div>
                  <div className="text-blue-400 text-xs">+1.8%</div>
                </div>
                <div className="flex items-end space-x-1 h-10">
                  {[3, 2, 4, 3, 5, 4, 3, 6].map((height, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-blue-500 to-blue-400 rounded-full"
                      style={{ height: `${height * 2.5}px` }}
                      animate={{ 
                        height: [`${height * 2.5}px`, `${(height + 1) * 2.5}px`, `${height * 2.5}px`],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 3, 
                        delay: i * 0.25, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>

                     {/* Chart 3 - BTC - Middle Right */}
                     <motion.div
                       className="absolute top-1/2 right-16 w-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/30 backdrop-blur-xl rounded-lg border border-yellow-500/30 shadow-xl"
                       style={{ padding: '12px', height: 'auto' }}
                       animate={{
                         x: [0, 6, 0],
                         y: [0, -4, 0],
                         rotate: [0, 2, 0]
                       }}
                       transition={{
                         duration: 6,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                       whileHover={{ scale: 1.1, rotate: 0 }}
                     >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-yellow-300 text-xs font-medium">BTC</div>
                  <div className="text-yellow-400 text-xs">+3.2%</div>
                </div>
                <div className="flex items-end space-x-0.5 h-8">
                  {[4, 3, 5, 4, 6, 5, 4].map((height, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-yellow-500 to-orange-400 rounded-full"
                      style={{ height: `${height * 2}px` }}
                      animate={{ 
                        height: [`${height * 2}px`, `${(height + 1) * 2}px`, `${height * 2}px`],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2, 
                        delay: i * 0.3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
