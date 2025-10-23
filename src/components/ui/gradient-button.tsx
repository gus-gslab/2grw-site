"use client";

import { useRouter } from "next/navigation";

interface GradientButtonProps {
  href: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function GradientButton({ 
  href, 
  children, 
  size = 'md',
  className = ''
}: GradientButtonProps) {
  const router = useRouter();

  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-10 py-4 text-base',
    lg: 'px-14 py-5 text-lg',
    xl: 'px-18 py-6 text-xl'
  };

  return (
    <button 
      onClick={() => router.push(href)}
      className={`
        bg-black border border-[#C1EF00] text-white
        rounded-full font-bold cursor-pointer
        inline-flex items-center justify-center
        hover:border-[#814CF4] hover:shadow-md hover:shadow-[#814CF4]/30
        hover:shadow-[0_0_15px_rgba(129,76,244,0.4)]
        transition-all duration-500 ease-in-out
        relative overflow-hidden
        group whitespace-nowrap
        ${sizeClasses[size]} ${className}
      `}
      style={{
        background: 'linear-gradient(45deg, #000000, #1a1a1a)'
      }}
    >
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{
             background: 'linear-gradient(45deg, #814CF4, #A855F7, #814CF4)',
             backgroundSize: '200% 200%',
             animation: 'gradientShift 2s ease-in-out infinite',
             mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             maskComposite: 'xor',
             WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             WebkitMaskComposite: 'xor',
             padding: '1px'
           }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </button>
  );
}
