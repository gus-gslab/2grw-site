import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateSEO } from "@/lib/seo";
import { AuroraBackground } from "@/components/ui/aurora-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = generateSEO();

// Componente para suprimir erros de hidratação causados por extensões
function HydrationSuppressor() {
  if (typeof window !== 'undefined') {
    // Suprimir erros de hidratação específicos de extensões
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' && 
        args[0].includes('hydrated but some attributes') &&
        args[0].includes('data-new-gr-c-s-check-loaded')
      ) {
        return; // Suprimir este erro específico
      }
      originalError.apply(console, args);
    };
  }
  return null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <AuroraBackground variant="full" intensity="high" />
        </div>
        <HydrationSuppressor />
        {children}
      </body>
    </html>
  );
}