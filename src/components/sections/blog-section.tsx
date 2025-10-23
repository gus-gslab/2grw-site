"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Zap, TrendingUp, Brain, DollarSign } from "lucide-react";
import { composerReveal, composerStaggerContainer, composerStaggerItem, composerHover } from "@/lib/animations";
import { BLOG_CATEGORIES } from "@/lib/constants";

export function BlogSection() {
  const featuredPosts = [
    {
      title: "How AI is Revolutionizing Portfolio Management",
      excerpt: "Discover how artificial intelligence is transforming the way we manage investments and make financial decisions.",
      category: "AI & Technology",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/blog/ai-portfolio-management.jpg",
      slug: "ai-revolutionizing-portfolio-management"
    },
    {
      title: "The Complete Guide to Dividend Investing",
      excerpt: "Learn the fundamentals of dividend investing and how to build a sustainable income stream from your portfolio.",
      category: "Dividend Investing",
      date: "2024-01-12",
      readTime: "8 min read",
      image: "/blog/dividend-investing-guide.jpg",
      slug: "complete-guide-dividend-investing"
    },
    {
      title: "Crypto Portfolio Diversification Strategies",
      excerpt: "Explore effective strategies for diversifying your cryptocurrency investments and managing risk.",
      category: "Crypto",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "/blog/crypto-diversification.jpg",
      slug: "crypto-portfolio-diversification"
    }
  ];

  const recentPosts = [
    {
      title: "Market Analysis: Q1 2024 Outlook",
      excerpt: "Our AI-powered analysis of market trends and investment opportunities for the first quarter.",
      category: "Market Analysis",
      date: "2024-01-08",
      readTime: "4 min read",
      slug: "market-analysis-q1-2024"
    },
    {
      title: "Personal Finance: Building Emergency Funds",
      excerpt: "Essential strategies for building and maintaining emergency funds in today's economy.",
      category: "Personal Finance",
      date: "2024-01-05",
      readTime: "3 min read",
      slug: "building-emergency-funds"
    },
    {
      title: "Portfolio Rebalancing: When and How",
      excerpt: "Learn the optimal timing and methods for rebalancing your investment portfolio.",
      category: "Portfolio Management",
      date: "2024-01-03",
      readTime: "7 min read",
      slug: "portfolio-rebalancing-guide"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI & Technology": return Brain;
      case "Dividend Investing": return DollarSign;
      case "Crypto": return TrendingUp;
      case "Market Analysis": return TrendingUp;
      case "Personal Finance": return DollarSign;
      case "Portfolio Management": return TrendingUp;
      default: return TrendingUp;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI & Technology": return "from-blue-500 to-cyan-500";
      case "Dividend Investing": return "from-green-500 to-emerald-500";
      case "Crypto": return "from-orange-500 to-red-500";
      case "Market Analysis": return "from-red-500 to-pink-500";
      case "Personal Finance": return "from-indigo-500 to-blue-500";
      case "Portfolio Management": return "from-purple-500 to-pink-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

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
            <span className="text-white">Investment Blog</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-8">
            Expert{" "}
            <span className="bg-gradient-to-r from-purple-500 via-lime-400 to-white bg-clip-text text-transparent">
              investment insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with AI-powered market analysis, expert investment strategies, and practical 
            wealth-building tips from our team of financial professionals.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          {...composerReveal}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
          <motion.div
            {...composerStaggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {featuredPosts.map((post, index) => {
              const IconComponent = getCategoryIcon(post.category);
              const categoryColor = getCategoryColor(post.category);
              
              return (
                <motion.article
                  key={post.slug}
                  {...composerStaggerItem}
                  {...composerHover}
                  className="group"
                >
                  <div className="backdrop-blur-sm bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all duration-500 overflow-hidden h-full"
                    style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
                  >
                    <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-white/50" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColor} text-white`}>
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Recent Posts */}
        <motion.div
          {...composerReveal}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Recent Posts</h2>
          <motion.div
            {...composerStaggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {recentPosts.map((post, index) => {
              const IconComponent = getCategoryIcon(post.category);
              const categoryColor = getCategoryColor(post.category);
              
              return (
                <motion.article
                  key={post.slug}
                  {...composerStaggerItem}
                  {...composerHover}
                  className="group"
                >
                  <div className="backdrop-blur-sm bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all duration-500 p-6 h-full"
                    style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <motion.div 
                        className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-r ${categoryColor}`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <IconComponent className="w-4 h-4 text-white" />
                      </motion.div>
                      <span className={`px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${categoryColor} text-white`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Categories */}
        <motion.div
          {...composerReveal}
          className="backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/10"
          style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'}}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Explore Categories</h2>
            <p className="text-lg text-gray-300">
              Find articles tailored to your investment interests
            </p>
          </div>
          
          <motion.div
            {...composerStaggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {BLOG_CATEGORIES.map((category, index) => {
              const IconComponent = getCategoryIcon(category.name);
              const categoryColor = getCategoryColor(category.name);
              
              return (
                <motion.div
                  key={category.slug}
                  {...composerStaggerItem}
                  {...composerHover}
                  className="group"
                >
                  <div className="backdrop-blur-sm bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all duration-500 p-4 text-center cursor-pointer"
                    style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
                  >
                    <motion.div 
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 bg-gradient-to-r ${categoryColor}`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                      {category.name}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


