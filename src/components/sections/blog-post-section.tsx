"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, User, Tag } from "lucide-react";
import { composerReveal, composerStaggerContainer, composerStaggerItem, composerHover } from "@/lib/animations";
import { GradientButton } from "@/components/ui/gradient-button";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: string;
  tags: string[];
}

interface BlogPostSectionProps {
  post: BlogPost;
}

export function BlogPostSection({ post }: BlogPostSectionProps) {
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
        {/* Back Button */}
        <motion.div
          {...composerReveal}
          className="mb-8"
        >
          <Link href="/blog">
            <motion.div
              {...composerHover}
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </motion.div>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          {...composerReveal}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(post.category)} text-white`}>
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl">
            {post.description}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300 border border-white/20"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <GradientButton className="px-6 py-2">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </GradientButton>
            <button className="flex items-center gap-2 px-6 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
              <Bookmark className="w-4 h-4" />
              Save
            </button>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.article
          {...composerReveal}
          className="prose prose-lg prose-invert max-w-none"
        >
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/10"
            style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'}}
          >
            <div className="text-gray-300 leading-relaxed space-y-6">
              <p>
                {post.content}
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Takeaways</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>AI-powered portfolio management can significantly improve investment returns</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Automated rebalancing helps maintain optimal asset allocation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Real-time market analysis provides better investment timing</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
              <p>
                The future of investing is here, and it&apos;s powered by artificial intelligence. 
                By leveraging AI-driven insights and automated portfolio management, investors 
                can achieve better returns while reducing risk and saving time.
              </p>
            </div>
          </div>
        </motion.article>

        {/* Author Bio */}
        <motion.div
          {...composerReveal}
          className="mt-16"
        >
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10"
            style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'}}
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{post.author}</h3>
                <p className="text-gray-300 mb-4">
                  Founder and CEO of 2GRW, with over 10 years of experience in financial technology 
                  and AI-powered investment strategies. Passionate about democratizing sophisticated 
                  investment tools for everyday investors.
                </p>
                <div className="flex items-center gap-4">
                  <GradientButton href="/about" className="px-4 py-2 text-sm">
                    Learn More
                  </GradientButton>
                  <GradientButton href="/contact" className="px-4 py-2 text-sm">
                    Contact
                  </GradientButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          {...composerReveal}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Portfolio Optimization Strategies",
                excerpt: "Learn advanced techniques for optimizing your investment portfolio.",
                category: "Portfolio Management",
                readTime: "6 min read"
              },
              {
                title: "Market Trends Analysis 2024",
                excerpt: "Our AI analysis of emerging market trends and opportunities.",
                category: "Market Analysis",
                readTime: "5 min read"
              },
              {
                title: "Risk Management Best Practices",
                excerpt: "Essential strategies for managing investment risk effectively.",
                category: "Personal Finance",
                readTime: "7 min read"
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                {...composerHover}
                className="group"
              >
                <div className="backdrop-blur-sm bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all duration-500 p-6 h-full"
                  style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${getCategoryColor(article.category)} text-white`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{article.readTime}</span>
                    <ArrowLeft className="w-3 h-3 group-hover:translate-x-1 transition-transform rotate-180" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
