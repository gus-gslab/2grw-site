import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateSEO } from "@/lib/seo";
import { Navigation, Footer } from "@/components/sections/navigation";
import { BlogPostSection } from "@/components/sections/blog-post-section";
import { DistributedBackground } from "@/components/ui/distributed-background";

// Mock blog posts data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    slug: "ai-powered-investment-strategies-2025",
    title: "AI-Powered Investment Strategies for 2025",
    description: "Discover how artificial intelligence is revolutionizing investment strategies and portfolio management in 2025.",
    content: "Artificial intelligence is transforming the investment landscape...",
    author: "Gustavo Girard",
    publishedAt: "2024-01-15",
    category: "AI & Technology",
    readTime: "8 min read",
    tags: ["AI", "Investment Strategies", "Portfolio Management"]
  },
  {
    slug: "dividend-investing-guide",
    title: "The Complete Guide to Dividend Investing",
    description: "Learn how to build a sustainable dividend portfolio that generates consistent income.",
    content: "Dividend investing is one of the most reliable ways to build wealth...",
    author: "Gustavo Girard",
    publishedAt: "2024-01-10",
    category: "Dividend Investing",
    readTime: "12 min read",
    tags: ["Dividends", "Income Investing", "Portfolio Strategy"]
  },
  {
    slug: "crypto-portfolio-diversification",
    title: "Crypto Portfolio Diversification Strategies",
    description: "How to properly diversify your cryptocurrency portfolio for maximum returns and minimum risk.",
    content: "Cryptocurrency investing requires careful diversification...",
    author: "Gustavo Girard",
    publishedAt: "2024-01-05",
    category: "Crypto",
    readTime: "10 min read",
    tags: ["Cryptocurrency", "Diversification", "Risk Management"]
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return generateSEO({
    title: post.title,
    description: post.description,
    keywords: post.tags,
    type: "article",
    publishedTime: post.publishedAt,
    author: post.author,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="relative pt-16" style={{ zIndex: 10 }}>
        <section className="relative">
          <DistributedBackground variant="blog" />
          <BlogPostSection post={post} />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
