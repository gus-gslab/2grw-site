"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { composerReveal, composerStaggerContainer, composerStaggerItem, composerHover, textReveal } from "@/lib/animations";
import { gradients, shadows } from "@/lib/visual-effects";
import { NeonBackground } from "@/components/ui/neon-background";

export function FAQSection() {
  const [openItems, setOpenItems] = React.useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };


  return (
    <section className="py-48 relative overflow-hidden px-24">
      {/* Neon Background */}
      <NeonBackground />

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
            <HelpCircle className="w-5 h-5 mr-2 text-[#C1EF00]" />
            <span className="text-white">Frequently Asked Questions</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-8">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-purple-500 via-lime-400 to-white bg-clip-text text-transparent">
              know about investing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get answers to the most common questions about AI-powered investing, 
            portfolio management, and how 2GRW can help you build wealth intelligently.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          {...composerStaggerContainer}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="space-y-6">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                {...composerStaggerItem}
                {...composerHover}
                className="group"
              >
                <div className="glass-card rounded-2xl transition-all duration-500 overflow-hidden">
                  <motion.button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-bold text-white pr-4 group-hover:text-blue-400 transition-colors">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div 
                          className="px-8 pb-6"
                          initial={{ y: -20 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="border-t border-white/10 pt-6">
                            <p className="text-gray-300 leading-relaxed text-lg">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}