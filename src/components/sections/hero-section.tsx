"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { composerReveal, composerStaggerContainer, composerStaggerItem, composerHover, textReveal, dashboardReveal, chartReveal, fadeInUp } from "@/lib/animations";
import { GradientButton } from "@/components/ui/gradient-button";

export function HeroSection() {

  return (
    <section className="min-h-screen relative overflow-hidden bg-transparent px-24">

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

          {/* Right Content - Dashboard Preview */}
          <motion.div 
            {...composerReveal}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glass Effect Container */}
              <motion.div 
                {...composerHover}
                className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 shadow-2xl"
              >
                {/* Dashboard Mockup */}
                <div className="bg-gray-900/30 backdrop-blur-xl rounded-2xl p-4 space-y-4 border border-white/10">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <h3 className="text-white font-semibold text-lg">Portfolio Dashboard</h3>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-500/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                      <div className="text-purple-300 text-sm">Total Value</div>
                      <div className="text-white text-xl font-bold">$125,430</div>
                    </div>
                    <div className="bg-green-500/10 backdrop-blur-sm rounded-lg p-4 border border-green-500/20">
                      <div className="text-green-300 text-sm">Today&apos;s Gain</div>
                      <div className="text-white text-xl font-bold">+$2,340</div>
                    </div>
                  </div>
                  
                  {/* Performance Chart */}
                  <motion.div 
                    {...chartReveal}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white text-sm font-medium">Performance</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400 text-sm font-medium">+12.5%</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="h-24 relative">
                      <svg className="w-full h-full" viewBox="0 0 540 80" preserveAspectRatio="none">
                        {/* Grid lines */}
                        <defs>
                          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        
                        {/* 12 Vertical Bars - Different Heights */}
                        <motion.rect
                          x="10" y="25" width="35" height="55"
                          fill="#10b981"
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: 55, y: 25 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        />
                        <motion.rect
                          x="55" y="15" width="35" height="65"
                          fill="#10b981"
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: 65, y: 15 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        />
                        <motion.rect
                          x="100" y="20" width="35" height="60"
                          fill="#10b981"
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: 60, y: 20 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        />
                        <motion.rect
                          x="145" y="30" width="35" height="50"
                          fill="#10b981"
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: 50, y: 30 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        />
                        <motion.rect
                          x="190" y="10" width="35" height="70"
                          fill="#10b981"
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: 70, y: 10 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                        />
                        <motion.rect
                          x="235" y="25" width="35" height="55"
                          fill="#10b981"
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: 55, y: 25 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        />
                        <motion.rect
                          x="280" y="20" width="35" height="60"
                          fill="#10b981"
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: 60, y: 20 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                        />
                        <motion.rect
                          x="325" y="15" width="35" height="65"
                          fill="#10b981"
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: 65, y: 15 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                        />
                        <motion.rect
                          x="370" y="30" width="35" height="50"
                          fill="#10b981"
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: 50, y: 30 }}
                          transition={{ duration: 0.6, delay: 0.9 }}
                        />
                        <motion.rect
                          x="415" y="25" width="35" height="55"
                          fill="#10b981"
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: 55, y: 25 }}
                          transition={{ duration: 0.6, delay: 1.0 }}
                        />
                        <motion.rect
                          x="460" y="20" width="35" height="60"
                          fill="#10b981"
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: 60, y: 20 }}
                          transition={{ duration: 0.6, delay: 1.1 }}
                        />
                        <motion.rect
                          x="505" y="15" width="35" height="65"
                          fill="#10b981"
                          initial={{ height: 0, y: 80 }}
                          animate={{ height: 65, y: 15 }}
                          transition={{ duration: 0.6, delay: 1.2 }}
                        />
                      </svg>
                    </div>
                    
                    {/* Performance metrics */}
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-gray-400 text-xs">24h</div>
                        <div className="text-green-400 text-sm font-semibold">+2.1%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400 text-xs">7d</div>
                        <div className="text-green-400 text-sm font-semibold">+5.8%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400 text-xs">30d</div>
                        <div className="text-red-400 text-sm font-semibold">-2.1%</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Most Active Stocks */}
                  <motion.div 
                    {...composerStaggerContainer}
                    className="space-y-3"
                  >
                    <div className="text-gray-400 text-sm">Most Active</div>
                    <motion.div 
                      {...composerStaggerContainer}
                      className="grid grid-cols-2 gap-3"
                    >
                      {/* META */}
                      <motion.div 
                        {...composerStaggerItem}
                        {...composerHover}
                        className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-3 border border-white/10"
                      >
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">∞</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm font-medium">META</div>
                          <div className="text-green-400 text-xs">+1.40%</div>
                        </div>
                      </motion.div>

                      {/* TSLA */}
                      <motion.div 
                        {...composerStaggerItem}
                        {...composerHover}
                        className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-3 border border-white/10"
                      >
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">T</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm font-medium">TSLA</div>
                          <div className="text-green-400 text-xs">+2.23%</div>
                        </div>
                      </motion.div>

                      {/* BTC */}
                      <motion.div 
                        {...composerStaggerItem}
                        {...composerHover}
                        className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-3 border border-white/10"
                      >
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">₿</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm font-medium">BTC</div>
                          <div className="text-red-400 text-xs">-3.13%</div>
                        </div>
                      </motion.div>

                      {/* SPY */}
                      <motion.div 
                        {...composerStaggerItem}
                        {...composerHover}
                        className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-3 border border-white/10"
                      >
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">S</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm font-medium">SPY</div>
                          <div className="text-green-400 text-xs">+0.77%</div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}