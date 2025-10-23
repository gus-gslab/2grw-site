"use client";

import { useTheme } from "@/hooks/use-theme";
import { Button } from "./button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-[#C1EF00] transition-colors duration-300 group">
        <Sun className="h-5 w-5 group-hover:text-[#C1EF00]" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-[#C1EF00] transition-colors duration-300 ml-4 group"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 group-hover:text-[#C1EF00]" />
      ) : (
        <Sun className="h-5 w-5 group-hover:text-[#C1EF00]" />
      )}
      <span className="sr-only">
        {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      </span>
    </button>
  );
}
