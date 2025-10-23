"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { neonBackgroundPurple, neonBackgroundCyan, neonBackgroundGreen } from "@/lib/animations";

export function NeonBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Purple neon orb - Main */}
      <motion.div
        className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl backdrop-blur-sm"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)',
          border: '1px solid rgba(139, 92, 246, 0.1)',
          boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)'
        }}
        {...neonBackgroundPurple}
      />
      
      {/* Cyan neon orb - Secondary */}
      <motion.div
        className="absolute bottom-20 left-20 w-[350px] h-[350px] rounded-full opacity-15 blur-3xl backdrop-blur-sm"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, rgba(6, 182, 212, 0.1) 60%, transparent 100%)',
          border: '1px solid rgba(6, 182, 212, 0.1)',
          boxShadow: '0 8px 32px rgba(6, 182, 212, 0.15)'
        }}
        {...neonBackgroundCyan}
      />

      {/* Green neon orb - Accent */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[280px] h-[280px] rounded-full opacity-18 blur-2xl backdrop-blur-sm"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.1) 70%, transparent 100%)',
          border: '1px solid rgba(34, 197, 94, 0.08)',
          boxShadow: '0 6px 24px rgba(34, 197, 94, 0.12)'
        }}
        {...neonBackgroundGreen}
      />

      {/* Small accent orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[120px] h-[120px] rounded-full opacity-12 blur-xl backdrop-blur-sm"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0.05) 80%, transparent 100%)',
          border: '1px solid rgba(236, 72, 153, 0.05)',
          boxShadow: '0 4px 16px rgba(236, 72, 153, 0.08)'
        }}
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -15, 25, 0],
          scale: [1, 1.2, 0.8, 1],
          opacity: [0.12, 0.2, 0.08, 0.12]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
