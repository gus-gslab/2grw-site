"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Star, ArrowRight, Crown, Shield, Rocket } from "lucide-react";
import { composerReveal, composerStaggerContainer, composerStaggerItem, composerHover } from "@/lib/animations";
import { GradientButton } from "@/components/ui/gradient-button";
import { PRICING_PLANS } from "@/lib/constants";

export function PricingSection() {
  const features = [
    "AI-powered portfolio analysis",
    "Real-time market data",
    "Dividend tracking",
    "Crypto portfolio support",
    "Mobile app access",
    "Email support"
  ];

  const proFeatures = [
    "Everything in Free",
    "Unlimited portfolios",
    "Advanced AI insights",
    "Real-time alerts",
    "Tax optimization",
    "Priority support",
    "API access",
    "Custom integrations"
  ];

  const enterpriseFeatures = [
    "Everything in Pro",
    "White-label options",
    "Dedicated support",
    "Advanced analytics",
    "Team collaboration",
    "Custom reporting",
    "SLA guarantee",
    "On-premise deployment"
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
            <span className="text-white">Simple Pricing</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-8">
            Choose your{" "}
            <span className="bg-gradient-to-r from-purple-500 via-lime-400 to-white bg-clip-text text-transparent">
              investment plan
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Start free and upgrade as you grow. No hidden fees, no long-term contracts. 
            Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          {...composerStaggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {/* Free Plan */}
          <motion.div
            {...composerStaggerItem}
            className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 relative"
            style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'}}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <div className="text-4xl font-bold text-white mb-2">$0</div>
              <div className="text-gray-400">per month</div>
              <p className="text-gray-300 text-sm mt-4">Perfect for getting started</p>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <GradientButton href="/get-started" className="w-full">
              Get Started Free
            </GradientButton>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            {...composerStaggerItem}
            className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-purple-500/50 relative"
            style={{boxShadow: '0 25px 50px rgba(139, 92, 246, 0.3)'}}
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                <Star className="w-4 h-4 mr-1" />
                Most Popular
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-white mb-2">$9.99</div>
              <div className="text-gray-400">per month</div>
              <p className="text-gray-300 text-sm mt-4">For serious investors</p>
            </div>

            <ul className="space-y-4 mb-8">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <GradientButton href="/get-started?plan=pro" className="w-full">
              Start Pro Trial
            </GradientButton>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            {...composerStaggerItem}
            className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 relative"
            style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'}}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-2">$29.99</div>
              <div className="text-gray-400">per month</div>
              <p className="text-gray-300 text-sm mt-4">For professionals</p>
            </div>

            <ul className="space-y-4 mb-8">
              {enterpriseFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <GradientButton href="/contact" className="w-full">
              Contact Sales
            </GradientButton>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          {...composerReveal}
          className="backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/10 mb-20"
          style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'}}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-300">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Can I change plans anytime?</h3>
              <p className="text-gray-300">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we&apos;ll prorate any billing differences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Is there a free trial?</h3>
              <p className="text-gray-300">
                Our Free plan is available forever with no time limits. For Pro and Enterprise plans, 
                we offer a 14-day free trial with full access to all features.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">What payment methods do you accept?</h3>
              <p className="text-gray-300">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise customers. 
                All payments are processed securely through Stripe.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Do you offer refunds?</h3>
              <p className="text-gray-300">
                Yes! We offer a 30-day money-back guarantee for all paid plans. If you&apos;re not satisfied, 
                we&apos;ll refund your payment in full.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          {...composerReveal}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to optimize your portfolio?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of investors who are already using 2GRW to make smarter investment decisions 
            and build wealth with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton href="/get-started" className="px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </GradientButton>
            <GradientButton href="/contact" className="px-8 py-4 text-lg">
              Contact Sales
            </GradientButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
