"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Delay before hiding
          return 100;
        }
        return prev + Math.random() * 15; // Random increment for realistic feel
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      {/* Background with subtle aurora effect */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-blue-900/10 to-black/30">
        <div className="absolute inset-0 bg-linear-to-tr from-purple-500/10 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-purple-600/15 via-transparent to-blue-600/10"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo/Title */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-2">2GRW</h1>
          <p className="text-gray-300 text-sm">AI-Powered Investment Intelligence</p>
        </motion.div>

        {/* Animated logo/icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-white border-t-transparent rounded-full"
            />
          </div>
          
          {/* Orbiting particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: "0 0",
              }}
              animate={{
                rotate: [0, 360],
                x: [0, 30, 0],
                y: [0, 0, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 space-y-2">
          <div className="flex justify-between text-xs text-gray-400">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-linear-to-r from-purple-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            {progress < 30 && "Initializing AI models..."}
            {progress >= 30 && progress < 60 && "Loading market data..."}
            {progress >= 60 && progress < 90 && "Preparing dashboard..."}
            {progress >= 90 && "Almost ready..."}
          </p>
        </motion.div>
      </div>

    </motion.div>
  );
}
