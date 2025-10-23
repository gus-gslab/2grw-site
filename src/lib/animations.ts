// Advanced animation configurations inspired by Framer
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeInOut" }
};

export const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeInOut" }
};

// Hover animations
export const hoverScale = {
  transition: { duration: 0.3, ease: "easeInOut" }
};

export const hoverLift = {
  whileHover: { y: -8 },
  transition: { duration: 0.3, ease: "easeInOut" }
};

// Button animations
export const buttonHover = {
  whileHover: { 
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
  },
  transition: { duration: 0.2, ease: "easeInOut" }
};

// Neon effects
export const neonGlow = {
  whileHover: {
    boxShadow: "0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)"
  },
  transition: { duration: 0.3, ease: "easeInOut" }
};

export const neonGlowPurple = {
  whileHover: {
    boxShadow: "0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.4)"
  },
  transition: { duration: 0.3, ease: "easeInOut" }
};

export const neonGlowCyan = {
  whileHover: {
    boxShadow: "0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.4)"
  },
  transition: { duration: 0.3, ease: "easeInOut" }
};

export const neonGlowGreen = {
  whileHover: {
    boxShadow: "0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.4)"
  },
  transition: { duration: 0.3, ease: "easeInOut" }
};

// Neon background effects inspired by Solana
export const neonBackgroundPurple = {
  animate: {
    x: [0, 50, -30, 0],
    y: [0, -40, 30, 0],
    scale: [1, 1.2, 0.8, 1],
    opacity: [0.3, 0.6, 0.4, 0.3]
  },
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const neonBackgroundCyan = {
  animate: {
    x: [0, -40, 60, 0],
    y: [0, 50, -20, 0],
    scale: [1, 0.9, 1.3, 1],
    opacity: [0.2, 0.5, 0.3, 0.2]
  },
  transition: {
    duration: 25,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const neonBackgroundGreen = {
  animate: {
    x: [0, 30, -50, 0],
    y: [0, -30, 40, 0],
    scale: [1, 1.1, 0.9, 1],
    opacity: [0.4, 0.7, 0.5, 0.4]
  },
  transition: {
    duration: 30,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const neonBackgroundPink = {
  animate: {
    x: [0, -60, 40, 0],
    y: [0, 20, -50, 0],
    scale: [1, 0.8, 1.4, 1],
    opacity: [0.3, 0.6, 0.4, 0.3]
  },
  transition: {
    duration: 35,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Card animations
export const cardHover = {
  whileHover: { 
    y: -12,
    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
  },
  transition: { duration: 0.4, ease: "easeInOut" }
};

// Parallax effect
export const parallax = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeInOut" }
};

// Advanced scroll animations
export const scrollReveal = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

export const scrollRevealLeft = {
  initial: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

export const scrollRevealRight = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

export const scrollRevealScale = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

export const scrollRevealStagger = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.6, 
    ease: "easeInOut"
  }
};

export const scrollRevealStaggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scrollRevealRotate = {
  initial: { opacity: 0, rotate: -10, scale: 0.9 },
  whileInView: { opacity: 1, rotate: 0, scale: 1 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

export const scrollRevealSlide = {
  initial: { opacity: 0, y: 100, rotateX: 15 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  transition: { duration: 1, ease: "easeInOut" }
};

// Composer-inspired advanced scroll animations
export const composerReveal = {
  initial: { opacity: 0, y: 100, scale: 0.95 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      staggerChildren: 0.1
    }
  },
  viewport: { once: true, margin: "-100px" }
};

export const composerRevealLeft = {
  initial: { opacity: 0, x: -100, rotateY: -15 },
  whileInView: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  },
  viewport: { once: true, margin: "-100px" }
};

export const composerRevealRight = {
  initial: { opacity: 0, x: 100, rotateY: 15 },
  whileInView: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  },
  viewport: { once: true, margin: "-100px" }
};

export const composerRevealScale = {
  initial: { opacity: 0, scale: 0.8, rotateZ: -5 },
  whileInView: { 
    opacity: 1, 
    scale: 1, 
    rotateZ: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  },
  viewport: { once: true, margin: "-100px" }
};

export const composerStaggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  },
  viewport: { once: true, margin: "-50px" }
};

export const composerStaggerItem = {
  initial: { opacity: 0, y: 60, scale: 0.9 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

// Advanced hover effects inspired by Composer
export const composerHover = {
  whileHover: { 
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)"
  },
  transition: { 
    duration: 0.3, 
    ease: "easeInOut" 
  }
};

export const composerHoverGlow = {
  whileHover: { 
    y: -12,
    scale: 1.05,
    boxShadow: "0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(193, 239, 0, 0.2)"
  },
  transition: { 
    duration: 0.4, 
    ease: "easeInOut" 
  }
};

// Chart animations
export const chartReveal = {
  initial: { opacity: 0, scale: 0.8, y: 40 },
  whileInView: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      delay: 0.2
    }
  },
  viewport: { once: true, margin: "-100px" }
};

export const chartStagger = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.1
    }
  }
};

// Dashboard animations
export const dashboardReveal = {
  initial: { opacity: 0, y: 80, scale: 0.95 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 1.4,
      ease: "easeInOut"
    }
  },
  viewport: { once: true, margin: "-150px" }
};

// Text animations
export const textReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  },
  viewport: { once: true, margin: "-50px" }
};

export const textStagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.1
    }
  }
};
