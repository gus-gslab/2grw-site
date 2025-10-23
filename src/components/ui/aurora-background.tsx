"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface AuroraBackgroundProps {
  variant?: 'full' | 'hero' | 'section' | 'footer';
  intensity?: 'low' | 'medium' | 'high';
}

export function AuroraBackground({ variant = 'full', intensity = 'medium' }: AuroraBackgroundProps) {
  const getIntensityValues = () => {
    switch (intensity) {
      case 'low':
        return {
          opacity: [0.05, 0.15, 0.08, 0.12, 0.05],
          blur: 'blur(150px)',
          duration: 120
        };
      case 'medium':
        return {
          opacity: [0.1, 0.3, 0.15, 0.25, 0.1],
          blur: 'blur(200px)',
          duration: 100
        };
      case 'high':
        return {
          opacity: [0.15, 0.4, 0.2, 0.35, 0.15],
          blur: 'blur(250px)',
          duration: 80
        };
    }
  };

  const intensityValues = getIntensityValues();

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return {
          container: "absolute inset-0 overflow-hidden pointer-events-none",
          waves: [
            { width: '2000px', height: '800px', delay: 0 },
            { width: '1800px', height: '600px', delay: 10 },
            { width: '1600px', height: '700px', delay: 20 },
            { width: '1400px', height: '500px', delay: 30 }
          ]
        };
      case 'section':
        return {
          container: "absolute inset-0 overflow-hidden pointer-events-none",
          waves: [
            { width: '1200px', height: '400px', delay: 0 },
            { width: '1000px', height: '300px', delay: 15 },
            { width: '800px', height: '350px', delay: 25 }
          ]
        };
      case 'footer':
        return {
          container: "absolute inset-0 overflow-hidden pointer-events-none",
          waves: [
            { width: '800px', height: '200px', delay: 0 },
            { width: '600px', height: '150px', delay: 20 }
          ]
        };
      case 'full':
      default:
        return {
          container: "absolute inset-0 overflow-hidden pointer-events-none",
          waves: [
            { width: '2000px', height: '800px', delay: 0 },
            { width: '1800px', height: '600px', delay: 10 },
            { width: '1600px', height: '700px', delay: 20 },
            { width: '1400px', height: '500px', delay: 30 }
          ]
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none" 
      style={{ zIndex: 1 }}
    >
      {/* Purple Aurora Wave */}
      <motion.div
        className="absolute"
        style={{
          width: variantStyles.waves[0].width,
          height: variantStyles.waves[0].height,
          background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.6) 0%, rgba(168, 85, 247, 0.4) 25%, rgba(139, 92, 246, 0.3) 50%, rgba(168, 85, 247, 0.4) 75%, rgba(139, 92, 246, 0.6) 100%)',
          filter: intensityValues.blur,
          borderRadius: '50%'
        }}
        animate={{
          x: [0, '20vw', '-10vw', '30vw', 0],
          y: [0, '10vh', '15vh', '5vh', 0],
          scale: [1, 1.05, 0.95, 1.02, 1],
          opacity: intensityValues.opacity
        }}
        transition={{
          duration: intensityValues.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: variantStyles.waves[0].delay
        }}
      />

      {/* Green Aurora Wave */}
      <motion.div
        className="absolute"
        style={{
          width: variantStyles.waves[1].width,
          height: variantStyles.waves[1].height,
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.4) 0%, rgba(16, 185, 129, 0.3) 30%, rgba(34, 197, 94, 0.2) 60%, rgba(16, 185, 129, 0.35) 80%, rgba(34, 197, 94, 0.4) 100%)',
          filter: intensityValues.blur,
          borderRadius: '50%'
        }}
        animate={{
          x: ['20vw', 0, '15vw', '-5vw', '20vw'],
          y: ['5vh', '15vh', '8vh', '20vh', '5vh'],
          scale: [0.95, 1.05, 1, 1.02, 0.95],
          opacity: intensityValues.opacity
        }}
        transition={{
          duration: intensityValues.duration - 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: variantStyles.waves[1].delay
        }}
      />

      {/* Blue Aurora Wave */}
      {variantStyles.waves[2] && (
        <motion.div
          className="absolute"
          style={{
            width: variantStyles.waves[2].width,
            height: variantStyles.waves[2].height,
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.25) 40%, rgba(59, 130, 246, 0.2) 70%, rgba(37, 99, 235, 0.3) 100%)',
            filter: intensityValues.blur,
            borderRadius: '50%'
          }}
          animate={{
            x: ['10vw', '25vw', '5vw', '20vw', '10vw'],
            y: ['8vh', '3vh', '12vh', '15vh', '8vh'],
            scale: [1.02, 0.95, 1.05, 0.98, 1.02],
            opacity: intensityValues.opacity
          }}
          transition={{
            duration: intensityValues.duration + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: variantStyles.waves[2].delay
          }}
        />
      )}

      {/* Pink Aurora Wave */}
      {variantStyles.waves[3] && (
        <motion.div
          className="absolute"
          style={{
            width: variantStyles.waves[3].width,
            height: variantStyles.waves[3].height,
            background: 'linear-gradient(225deg, rgba(236, 72, 153, 0.25) 0%, rgba(219, 39, 119, 0.2) 50%, rgba(236, 72, 153, 0.3) 100%)',
            filter: intensityValues.blur,
            borderRadius: '50%'
          }}
          animate={{
            x: ['15vw', '3vw', '18vw', '8vw', '15vw'],
            y: ['12vh', '5vh', '15vh', '8vh', '12vh'],
            scale: [0.95, 1.05, 0.9, 1.02, 0.95],
            opacity: intensityValues.opacity
          }}
          transition={{
            duration: intensityValues.duration - 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: variantStyles.waves[3].delay
          }}
        />
      )}
    </div>
  );
}
