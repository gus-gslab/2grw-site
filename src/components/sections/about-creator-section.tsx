"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail, Instagram, Users, Code, Zap, Target, Star, Globe } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, hoverLift, cardHover, parallax, composerReveal, composerStaggerContainer, composerStaggerItem, composerHover } from "@/lib/animations";
import { gradients, shadows } from "@/lib/visual-effects";
import { GradientButton } from "@/components/ui/gradient-button";

export function AboutCreatorSection() {

  const skills = [
    { name: "Product Design", level: 95 },
    { name: "User Experience", level: 90 },
    { name: "Investment Analysis", level: 88 },
    { name: "Product Strategy", level: 85 }
  ];

  return (
    <section className="py-48 relative overflow-hidden px-24">
      {/* Background Blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-20 w-[500px] h-[300px] rounded-[55%] opacity-6 blur-3xl"
          style={{background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)'}}
          animate={{ 
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-[400px] h-[250px] rounded-[65%] opacity-5 blur-3xl"
          style={{background: 'linear-gradient(135deg, #84CC16, #65A30D)'}}
          animate={{ 
            x: [0, -30, 0],
            y: [0, 35, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-[350px] h-[200px] rounded-[75%] opacity-3 blur-3xl"
          style={{background: 'linear-gradient(135deg, #FFFFFF, #F3F4F6)'}}
          animate={{ 
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          {...composerStaggerContainer}
          className="text-center mb-20"
        >
          <motion.div 
            {...composerStaggerItem}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm"
          >
            <Code className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-white">Meet the Creator</span>
          </motion.div>
          
          <motion.h2 
            {...composerStaggerItem}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-8"
          >
            Built by a{" "}
            <span className="bg-gradient-to-r from-purple-500 via-lime-400 to-white bg-clip-text text-transparent">
              passionate product designer
            </span>
          </motion.h2>
          
          <motion.p 
            {...composerStaggerItem}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Gustavo Girard is the founder of 2GRW, a SaaS product that democratizes 
            intelligent investing for everyone through AI-powered portfolio management.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Creator Profile */}
          <motion.div
            {...composerReveal}
            className="space-y-8"
          >
            {/* Profile Card */}
            <motion.div 
              {...composerHover}
              className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
              style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'}}
            >
              {/* Photo Header */}
              <div className="w-full h-[300px] bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <img 
                  src="/assets/profile-gus.jpg" 
                  alt="Gustavo Girard" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="px-8 pt-8 pb-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">Gustavo Girard</h3>
                  <p className="text-gray-400 mb-6 text-lg">Founder & Product Designer</p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    With over 12 years of experience in design and a strong background in fintech and investment technology, 
                    Gustavo specializes in creating intuitive, data-driven products that simplify and enhance the investing experience. 
                    As a Product Designer, he combines deep UX expertise with a strategic mindset to build intelligent tools 
                    that empower users and drive business growth.
                    <br /><br />
                    <a href="https://gustavogirard.com" target="_blank" rel="noopener noreferrer" className="text-[#C1EF00] hover:text-white transition-colors flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      gustavogirard.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="px-8 pb-8 space-y-6">
                <h4 className="text-xl font-bold text-white">Core Expertise</h4>
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-300">{skill.name}</span>
                      <span className="text-lg text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3">
                      <motion.div 
                        className="h-3 rounded-full"
                        style={{background: 'linear-gradient(45deg, #3B82F6, #6366F1)'}}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8 px-8 pb-8">
                {[
                  { icon: Linkedin, href: "https://linkedin.com/in/gustavogirard", color: "#0077B5" },
                  { icon: Github, href: "https://github.com/gustavogirard", color: "#FFFFFF" },
                  { icon: Twitter, href: "https://twitter.com/gustavogirard", color: "#1DA1F2" },
                  { icon: Instagram, href: "https://instagram.com/gustavogirard", color: "#E4405F" },
                  { icon: Mail, href: "mailto:gustavo@2grw.com", color: "#EA4335" }
                ].map((social, index) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    className="w-14 h-14 bg-black border border-white/20 rounded-2xl flex items-center justify-center transition-all duration-300 hover:border-white/40"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon 
                      className="w-6 h-6" 
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Story & Vision */}
          <motion.div
            {...composerStaggerContainer}
            className="space-y-8"
          >
            {/* Mission Statement */}
            <motion.div 
              {...composerStaggerItem}
              {...composerHover}
              className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10"
              style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-6 h-6 text-purple-400" />
                <h4 className="text-2xl font-bold text-white">The Mission</h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                &ldquo;We believe that every investor deserves access to professional-grade tools and insights. 
                Our mission is to break down the barriers between complex financial data and everyday investors, 
                making AI-powered portfolio management, dividend tracking, and market intelligence accessible to everyone.&rdquo;
              </p>
            </motion.div>
            {/* The Story */}
            <motion.div 
              {...composerStaggerItem}
              {...composerHover}
              className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10"
              style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="w-6 h-6 text-purple-400" />
                <h4 className="text-2xl font-bold text-white">The Story</h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                &ldquo;After 12 years designing fintech products, I realized that most investment tools 
                were either too complex for beginners or too basic for serious investors. I created 2GRW 
                to bridge this gap, combining my design expertise with real-world investing experience to 
                build a platform that&apos;s both powerful and intuitive.
                <br /><br />
                The idea was to bring simplicity and organize information architecture in a simple and intuitive way. 
                Having the main information clearly and in your first view.&rdquo;
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                  <img 
                    src="/assets/profile-gus.jpg" 
                    alt="Gustavo Girard" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Gustavo Girard</p>
                  <p className="text-gray-400">Founder & Product Designer</p>
                </div>
              </div>
            </motion.div>

            {/* Community CTA */}
            <motion.div 
              {...composerStaggerItem}
              {...composerHover}
              className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10"
              style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-purple-400" />
                <h4 className="text-2xl font-bold text-white">Follow Us</h4>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                Stay connected with 2GRW and get the latest updates on investment insights, 
                platform features, and market analysis. Follow us on social media!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton href="https://twitter.com/2grw" className="px-6 py-3">
                  <Twitter className="mr-2 h-5 w-5" />
                  Follow on Twitter
                </GradientButton>
                <GradientButton href="https://instagram.com/2grw" className="px-6 py-3">
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow on Instagram
                </GradientButton>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}