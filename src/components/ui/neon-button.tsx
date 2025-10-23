"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NeonButton({ href, children, className }: NeonButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 focus:outline-none relative overflow-hidden",
        className
      )}
      style={{
        background: 'rgba(0, 0, 0, 0.95)',
        border: '2px solid transparent',
        position: 'relative',
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(163, 230, 53, 0.2), 0 0 60px rgba(255, 255, 255, 0.1)'
      }}
    >
      <div
        className="absolute -inset-0.5 rounded-full"
        style={{
          background: 'linear-gradient(90deg, rgba(139, 92, 246, 1) 0%, rgba(163, 230, 53, 1) 50%, rgba(255, 255, 255, 1) 100%)',
          zIndex: -1
        }}
      />
      {children}
    </Link>
  );
}
