import { Metadata } from 'next';
import { AboutSection } from '@/components/sections/about-section';

export const metadata: Metadata = {
  title: 'About 2GRW - AI-Powered Investment Platform',
  description: 'Learn about 2GRW\'s mission to democratize intelligent investing through AI-powered portfolio management.',
  keywords: 'about 2grw, AI investing platform, investment technology',
};

export default function AboutPage() {
  return <AboutSection />;
}






