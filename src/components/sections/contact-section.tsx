"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle, Zap, Send } from "lucide-react";
import { composerReveal, composerStaggerContainer, composerStaggerItem, composerHover } from "@/lib/animations";
import { GradientButton } from "@/components/ui/gradient-button";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@2grw.com",
      description: "Send us an email anytime",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+55 11 99999-9999",
      description: "Mon-Fri 9am-6pm EST",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "São Paulo, Brazil",
      description: "Remote-first company",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      description: "We respond quickly",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const supportTopics = [
    {
      title: "Investment Guidance",
      description: "Get personalized advice on portfolio optimization and investment strategies",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Account & Billing",
      description: "Resolve account issues, subscription questions, and billing inquiries",
      icon: Mail,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Platform Features",
      description: "Learn about AI insights, portfolio tracking, and advanced analytics",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
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
            <span className="text-white">Contact Us</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-8">
            Ready to start{" "}
            <span className="bg-gradient-to-r from-purple-500 via-lime-400 to-white bg-clip-text text-transparent">
              building wealth?
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get personalized investment advice, technical support, or learn how 2GRW can help 
            you optimize your portfolio and achieve your financial goals.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          {...composerStaggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            
            return (
              <motion.div
                key={info.title}
                {...composerStaggerItem}
                {...composerHover}
                className="group"
              >
                <div className="backdrop-blur-sm bg-white/5 hover:bg-white/10 p-8 rounded-2xl border border-white/10 transition-all duration-500 text-center h-full"
                  style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
                >
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-r ${info.color}`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-lg font-semibold text-white mb-2">{info.value}</p>
                  <p className="text-gray-300 text-sm">{info.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form and Support Topics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            {...composerReveal}
            className="backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/10"
            style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'}}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
            <p className="text-gray-300 mb-8">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
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
                <label className="block text-sm font-medium text-white mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  placeholder="Tell us how we can help..."
                />
              </div>
              
              <GradientButton type="submit" className="w-full px-8 py-4 text-lg">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </GradientButton>
            </form>
          </motion.div>

          {/* Support Topics */}
          <motion.div
            {...composerReveal}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">How can we help you invest?</h2>
              <p className="text-gray-300 mb-8">
                Get expert guidance on portfolio management, AI insights, and wealth building strategies.
              </p>
            </div>
            
            <motion.div
              {...composerStaggerContainer}
              className="space-y-6"
            >
              {supportTopics.map((topic, index) => {
                const IconComponent = topic.icon;
                
                return (
                  <motion.div
                    key={topic.title}
                    {...composerStaggerItem}
                    {...composerHover}
                    className="group"
                  >
                    <div className="backdrop-blur-sm bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 transition-all duration-500 cursor-pointer"
                      style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${topic.color} flex-shrink-0`}
                          whileHover={{ scale: 1.1 }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {topic.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {topic.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Link */}
        <motion.div
          {...composerReveal}
          className="text-center"
        >
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/10"
            style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'}}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Check out our FAQ section for answers to common questions, or browse our help center for detailed guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton href="/faq" className="px-8 py-4 text-lg">
                View FAQ
              </GradientButton>
              <GradientButton href="/help" className="px-8 py-4 text-lg">
                Help Center
              </GradientButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


