"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface DistributedBackgroundProps {
  variant?: 'hero' | 'features' | 'how-it-works' | 'about' | 'faq' | 'blog' | 'contact';
}

export function DistributedBackground({ variant = 'hero' }: DistributedBackgroundProps) {
  const getElementsForVariant = () => {
    switch (variant) {
      case 'hero':
        return (
          <>
            {/* No blur elements for hero - only aurora borealis from MagicBackground */}
          </>
        );
      
      case 'features':
        return (
          <>
            {/* Cyan orb - center */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full opacity-22 blur-[55px]"
              style={{background: 'linear-gradient(135deg, #06B6D4, #0891B2)'}}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.22, 0.4, 0.22],
                x: [0, 30, 0],
                y: [0, -25, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Pink orb - top left */}
            <motion.div 
              className="absolute top-10 left-10 w-36 h-36 rounded-full opacity-18 blur-[45px]"
              style={{background: 'linear-gradient(135deg, #EC4899, #BE185D)'}}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.18, 0.35, 0.18],
                x: [0, 20, 0],
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            {/* Green connecting orb - bottom right */}
            <motion.div 
              className="absolute bottom-10 right-10 w-32 h-32 rounded-full opacity-15 blur-[40px]"
              style={{background: 'linear-gradient(135deg, #C1EF00, #A3E635)'}}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.15, 0.3, 0.15],
                x: [0, -20, 0],
                y: [0, 20, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </>
        );
      
      case 'how-it-works':
        return (
          <>
            {/* Blue orb - right side */}
            <motion.div 
              className="absolute top-1/3 right-10 w-40 h-40 rounded-full opacity-20 blur-[50px]"
              style={{background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)'}}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, -25, 0],
                y: [0, 20, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Purple accent - bottom right */}
            <motion.div 
              className="absolute bottom-10 right-1/4 w-32 h-32 rounded-full opacity-18 blur-[40px]"
              style={{background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)'}}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.18, 0.35, 0.18],
                x: [0, 15, 0],
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            {/* Cyan connecting orb - left side */}
            <motion.div 
              className="absolute top-1/2 left-10 w-28 h-28 rounded-full opacity-16 blur-[35px]"
              style={{background: 'linear-gradient(135deg, #06B6D4, #0891B2)'}}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.16, 0.3, 0.16],
                x: [0, 20, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </>
        );
      
      case 'about':
        return (
          <>
            {/* Green orb - left side */}
            <motion.div 
              className="absolute top-1/4 left-10 w-44 h-44 rounded-full opacity-22 blur-[55px]"
              style={{background: 'linear-gradient(135deg, #C1EF00, #A3E635)'}}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.22, 0.4, 0.22],
                x: [0, 25, 0],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Cyan accent - right side */}
            <motion.div 
              className="absolute bottom-1/4 right-20 w-36 h-36 rounded-full opacity-18 blur-[45px]"
              style={{background: 'linear-gradient(135deg, #06B6D4, #0891B2)'}}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.18, 0.35, 0.18],
                x: [0, -20, 0],
                y: [0, 15, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
            {/* Purple connecting orb - center */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-16 blur-[40px]"
              style={{background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)'}}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.16, 0.3, 0.16],
                x: [0, 15, 0],
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5
              }}
            />
          </>
        );
      
      case 'faq':
        return (
          <>
            {/* Pink orb - center left */}
            <motion.div 
              className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full opacity-20 blur-[50px]"
              style={{background: 'linear-gradient(135deg, #EC4899, #BE185D)'}}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, 25, 0],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Blue accent - top right */}
            <motion.div 
              className="absolute top-20 right-1/3 w-32 h-32 rounded-full opacity-16 blur-[40px]"
              style={{background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)'}}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.16, 0.3, 0.16],
                x: [0, -15, 0],
                y: [0, 10, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
              }}
            />
            {/* Green connecting orb - bottom center */}
            <motion.div 
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full opacity-14 blur-[35px]"
              style={{background: 'linear-gradient(135deg, #C1EF00, #A3E635)'}}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.14, 0.28, 0.14],
                x: [0, 20, 0],
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8
              }}
            />
          </>
        );
      
      case 'blog':
        return (
          <>
            {/* Purple orb - top left */}
            <motion.div 
              className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-25 blur-[60px]"
              style={{background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)'}}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.25, 0.5, 0.25],
                x: [0, 35, 0],
                y: [0, -25, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Green orb - top right */}
            <motion.div 
              className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-30 blur-[50px]"
              style={{background: 'linear-gradient(135deg, #C1EF00, #A3E635)'}}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, -30, 0],
                y: [0, 30, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            {/* Blue orb - bottom center */}
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-36 h-36 rounded-full opacity-25 blur-[45px]"
              style={{background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)'}}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.25, 0.5, 0.25],
                x: [0, 25, 0],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            {/* Pink accent - center */}
            <motion.div 
              className="absolute top-1/2 left-1/4 w-28 h-28 rounded-full opacity-20 blur-[40px]"
              style={{background: 'linear-gradient(135deg, #EC4899, #BE185D)'}}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, 20, 0],
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            {/* Cyan accent - right side */}
            <motion.div 
              className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full opacity-18 blur-[35px]"
              style={{background: 'linear-gradient(135deg, #06B6D4, #0891B2)'}}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.18, 0.35, 0.18],
                x: [0, -25, 0],
                y: [0, 20, 0]
              }}
              transition={{ 
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </>
        );
      
      case 'contact':
        return (
          <>
            {/* Purple orb - center */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full opacity-22 blur-[55px]"
              style={{background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)'}}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.22, 0.45, 0.22],
                x: [0, 30, 0],
                y: [0, -25, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Green accent - bottom left */}
            <motion.div 
              className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-18 blur-[45px]"
              style={{background: 'linear-gradient(135deg, #C1EF00, #A3E635)'}}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.18, 0.35, 0.18],
                x: [0, 20, 0],
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2
              }}
            />
            {/* Cyan connecting orb - top right */}
            <motion.div 
              className="absolute top-20 right-20 w-28 h-28 rounded-full opacity-16 blur-[40px]"
              style={{background: 'linear-gradient(135deg, #06B6D4, #0891B2)'}}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.16, 0.3, 0.16],
                x: [0, -20, 0],
                y: [0, 15, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5
              }}
            />
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {getElementsForVariant()}
    </div>
  );
}
