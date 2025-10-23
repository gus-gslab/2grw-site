"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, Clock, ExternalLink, BookOpen } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, hoverLift, composerHover, composerStaggerContainer, composerStaggerItem } from "@/lib/animations";
import { gradients, shadows } from "@/lib/visual-effects";
import { NeonBackground } from "@/components/ui/neon-background";
import { GradientButton } from "@/components/ui/gradient-button";

export function CTASection() {
  const blogPosts = [
    {
      title: "The Future of AI in Investment Management",
      excerpt: "Discover how artificial intelligence is revolutionizing portfolio management and what it means for individual investors.",
      author: "Gustavo Girard",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "AI & Technology",
      tagColor: "border-purple-500/30 bg-purple-500/10 text-purple-400",
      href: "/blog/ai-investment-management"
    },
    {
      title: "Dividend Investing: Building Passive Income Streams",
      excerpt: "Learn the fundamentals of dividend investing and how to build a portfolio that generates consistent income.",
      author: "Investment Team",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Investment Strategy",
      tagColor: "border-green-500/30 bg-green-500/10 text-green-400",
      href: "/blog/dividend-investing-guide"
    },
    {
      title: "Crypto Portfolio Diversification Strategies",
      excerpt: "Explore effective strategies for diversifying your cryptocurrency holdings and managing risk in volatile markets.",
      author: "Crypto Team",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Cryptocurrency",
      tagColor: "border-blue-500/30 bg-blue-500/10 text-blue-400",
      href: "/blog/crypto-diversification"
    }
  ];


  return (
    <section className="py-48 relative overflow-hidden px-24">
      {/* Neon Background */}
      <NeonBackground />

      <div className="container-custom relative z-10">
        {/* Main CTA */}
        <motion.div
          {...composerStaggerContainer}
          className="text-center text-white mb-20"
        >
          <motion.div 
            {...composerStaggerItem}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm"
          >
            <Crown className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-white">Our Blog</span>
          </motion.div>
          
          <motion.h2 
            {...composerStaggerItem}
            className="text-6xl sm:text-7xl lg:text-8xl font-semibold mb-8"
          >
            Expert{" "}
            <span className="bg-gradient-to-r from-purple-500 via-lime-400 to-white bg-clip-text text-transparent">
              Investment Insights
            </span>
            <br />
            & Market Analysis
          </motion.h2>
          
          <motion.p 
            {...composerStaggerItem}
            className="text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            Discover proven strategies, AI-powered market analysis, and expert guidance 
            to maximize your investment returns. Stay ahead with insights from our team 
            of financial professionals and AI specialists.
          </motion.p>

        </motion.div>

        {/* Blog Posts */}
        <motion.div
          {...composerStaggerContainer}
          className="mb-20"
        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                {...composerStaggerItem}
                {...composerHover}
                className="group"
              >
                <motion.div 
                  className="glass-card p-8 rounded-2xl transition-all duration-500 h-full"
                  whileHover={{ 
                    y: -12,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(193, 239, 0, 0.2)"
                  }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${post.tagColor}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">{post.author}</div>
                        <div className="text-gray-400 text-xs">{post.date}</div>
                      </div>
                    </div>
                    
                    <Link 
                      href={post.href}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span className="text-sm font-medium mr-1">Read More</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

      <motion.div
        {...composerStaggerItem}
        className="text-center mt-12"
      >
        <GradientButton href="/blog" className="text-lg px-8 py-4">
          View All Posts
          <ArrowRight className="ml-2 h-5 w-5" />
        </GradientButton>
      </motion.div>
        </motion.div>


      </div>
    </section>
  );
}