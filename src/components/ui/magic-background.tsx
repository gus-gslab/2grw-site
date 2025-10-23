"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function MagicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora Borealis - Purple Wave */}
      <motion.div
        className="absolute w-[2000px] h-[800px]"
        style={{
          background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.6) 0%, rgba(168, 85, 247, 0.4) 25%, rgba(139, 92, 246, 0.3) 50%, rgba(168, 85, 247, 0.4) 75%, rgba(139, 92, 246, 0.6) 100%)',
          filter: 'blur(200px)',
          borderRadius: '50%'
        }}
        animate={{
          x: [0, '100vw', '-50vw', '150vw', 0],
          y: [0, '50vh', '80vh', '20vh', 0],
          scale: [1, 1.5, 0.8, 1.2, 1],
          rotate: [0, 180, 360, 180, 0],
          opacity: [0.2, 0.6, 0.3, 0.7, 0.2]
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Aurora Borealis - Green Wave */}
      <motion.div
        className="absolute w-[1800px] h-[600px]"
        style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.4) 0%, rgba(16, 185, 129, 0.3) 30%, rgba(34, 197, 94, 0.2) 60%, rgba(16, 185, 129, 0.35) 80%, rgba(34, 197, 94, 0.4) 100%)',
          filter: 'blur(180px)',
          borderRadius: '50%'
        }}
        animate={{
          x: ['100vw', 0, '80vw', '-30vw', '100vw'],
          y: ['20vh', '70vh', '30vh', '90vh', '20vh'],
          scale: [0.8, 1.3, 1, 1.4, 0.8],
          rotate: [0, -90, 180, -270, 0],
          opacity: [0.15, 0.5, 0.2, 0.6, 0.15]
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />

      {/* Aurora Borealis - Blue Wave */}
      <motion.div
        className="absolute w-[1600px] h-[700px]"
        style={{
          background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.25) 40%, rgba(59, 130, 246, 0.2) 70%, rgba(37, 99, 235, 0.3) 100%)',
          filter: 'blur(160px)',
          borderRadius: '50%'
        }}
        animate={{
          x: ['50vw', '120vw', '20vw', '100vw', '50vw'],
          y: ['40vh', '10vh', '60vh', '80vh', '40vh'],
          scale: [1.2, 0.6, 1.5, 0.9, 1.2],
          rotate: [0, 270, 90, 180, 0],
          opacity: [0.2, 0.4, 0.15, 0.5, 0.2]
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 20
        }}
      />

      {/* Aurora Borealis - Pink Wave */}
      <motion.div
        className="absolute w-[1400px] h-[500px]"
        style={{
          background: 'linear-gradient(225deg, rgba(236, 72, 153, 0.25) 0%, rgba(219, 39, 119, 0.2) 50%, rgba(236, 72, 153, 0.3) 100%)',
          filter: 'blur(140px)',
          borderRadius: '50%'
        }}
        animate={{
          x: ['80vw', '10vw', '90vw', '30vw', '80vw'],
          y: ['60vh', '20vh', '80vh', '40vh', '60vh'],
          scale: [0.9, 1.6, 0.7, 1.3, 0.9],
          rotate: [0, 45, 135, 225, 0],
          opacity: [0.15, 0.35, 0.2, 0.4, 0.15]
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 30
        }}
      />


    </div>
  );
}
