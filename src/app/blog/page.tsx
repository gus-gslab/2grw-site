import { Metadata } from 'next';
import { BlogSection } from '@/components/sections/blog-section';

export const metadata: Metadata = {
  title: 'Blog - 2GRW Investment Insights',
  description: 'Latest insights on AI-powered investing, portfolio management, and market analysis.',
  keywords: 'investment blog, AI investing, portfolio management, market insights',
};

export default function BlogPage() {
  return <BlogSection />;
}






