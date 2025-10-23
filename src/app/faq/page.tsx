import { Metadata } from 'next';
import { FAQSection } from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'FAQ - 2GRW Investment Platform',
  description: 'Get answers to frequently asked questions about 2GRW\'s AI-powered investment platform.',
  keywords: 'FAQ, help, support, investment platform',
};

export default function FAQPage() {
  return <FAQSection />;
}
