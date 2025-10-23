export const SITE_CONFIG = {
  name: "2GRW",
  title: "2GRW - AI-Powered Investment Portfolio Tracker",
  description: "Track your investments with AI-powered insights. Monitor dividends, crypto, and stocks in one intelligent dashboard.",
  url: "https://2grw.com",
  ogImage: "/og-image.png",
  creator: "Gustavo Girard",
  keywords: [
    "AI portfolio tracker",
    "dividend tracker",
    "investment dashboard",
    "portfolio management",
    "dividend income tracker",
    "crypto portfolio tracker",
    "stock portfolio management",
    "AI investment insights",
    "best portfolio tracker 2025",
    "free dividend tracker"
  ],
  social: {
    twitter: "@2grw",
    github: "https://github.com/2grw",
    linkedin: "https://linkedin.com/company/2grw",
  },
  contact: {
    email: "hello@2grw.com",
    phone: "+55 11 99999-9999",
  },
} as const;

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
] as const;

export const FEATURES = [
  {
    id: "ai-portfolio-tracker",
    title: "AI Portfolio Tracker",
    description: "Intelligent portfolio analysis with AI-powered insights and recommendations.",
    icon: "Brain",
    href: "/features/ai-portfolio-tracker",
    color: "blue",
  },
  {
    id: "dividend-tracker",
    title: "Dividend Tracker",
    description: "Track dividend payments, yields, and income across all your investments.",
    icon: "TrendingUp",
    href: "/features/dividend-tracker",
    color: "green",
  },
  {
    id: "crypto-tracker",
    title: "Crypto Tracker",
    description: "Monitor cryptocurrency portfolios with real-time prices and performance.",
    icon: "Bitcoin",
    href: "/features/crypto-tracker",
    color: "orange",
  },
  {
    id: "investment-dashboard",
    title: "Investment Dashboard",
    description: "Comprehensive dashboard with all your investments in one place.",
    icon: "BarChart3",
    href: "/features/investment-dashboard",
    color: "purple",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Create Your Account",
    description: "Sign up for free and set up your personalized investment dashboard. Get started in minutes with our simple onboarding process.",
    icon: "Shield",
  },
  {
    step: 2,
    title: "Track Your Dividends",
    description: "See all dividend payments you'll receive monthly and annually. Monitor dividend yields, payment schedules, and income projections across your entire portfolio.",
    icon: "TrendingUp",
  },
  {
    step: 3,
    title: "Analyze Your Returns",
    description: "View your gains organized in 3 categories: non-dividend investments, dividend-paying investments, and crypto. Track performance and returns in real-time.",
    icon: "BarChart3",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How does the AI portfolio tracker work?",
    answer: "Our AI analyzes your portfolio data to provide personalized insights, risk assessments, and investment recommendations based on your financial goals and market conditions.",
  },
  {
    question: "Is my financial data secure?",
    answer: "Yes, we use bank-level encryption and never store your login credentials. All data is encrypted and stored securely following industry best practices.",
  },
  {
    question: "Can I track international investments?",
    answer: "Currently, our platform focuses on US market investments and cryptocurrency tracking. We're working on expanding to international markets in the future.",
  },
  {
    question: "Is there a mobile app?",
    answer: "You can save our platform as a web app to your home screen for easy access. We're also developing a dedicated native mobile app for an even better experience.",
  },
  {
    question: "How much does it cost?",
    answer: "2GRW is currently free to use! We're building premium features for the future, but you can track your investments and get AI insights at no cost right now.",
  },
  {
    question: "Can I track dividend payments?",
    answer: "Yes! 2GRW automatically tracks all your dividend payments, shows upcoming dividend dates, and calculates your dividend yield. You can see your monthly and annual dividend income projections.",
  },
] as const;

export const BLOG_CATEGORIES = [
  { name: "AI & Technology", slug: "ai-technology", color: "blue" },
  { name: "Dividend Investing", slug: "dividend-investing", color: "green" },
  { name: "Portfolio Management", slug: "portfolio-management", color: "purple" },
  { name: "Crypto", slug: "crypto", color: "orange" },
  { name: "Market Analysis", slug: "market-analysis", color: "red" },
  { name: "Personal Finance", slug: "personal-finance", color: "indigo" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Maria Silva",
    role: "Investment Advisor",
    company: "Finance Pro",
    content: "2GRW has revolutionized how I manage my clients' portfolios. The AI insights are incredibly accurate and have helped optimize returns significantly.",
    avatar: "/testimonials/maria-silva.jpg",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Individual Investor",
    company: "Self-employed",
    content: "Finally, a platform that makes portfolio tracking simple and intelligent. The dividend tracker alone has saved me hours of manual work.",
    avatar: "/testimonials/joao-santos.jpg",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Crypto Investor",
    company: "Tech Startup",
    content: "The crypto tracking features are outstanding. Real-time updates and AI-powered analysis help me make better investment decisions.",
    avatar: "/testimonials/ana-costa.jpg",
    rating: 5,
  },
] as const;

export const PRICING_PLANS = [
  {
    name: "Free",
    price: 0,
    period: "month",
    description: "Perfect for getting started",
    features: [
      "Up to 3 portfolios",
      "Basic AI insights",
      "Dividend tracking",
      "Mobile access",
      "Email support",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: 9.99,
    period: "month",
    description: "For serious investors",
    features: [
      "Unlimited portfolios",
      "Advanced AI insights",
      "Real-time alerts",
      "Tax optimization",
      "Priority support",
      "API access",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 29.99,
    period: "month",
    description: "For professionals",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "White-label options",
      "Dedicated support",
      "Advanced analytics",
      "Team collaboration",
    ],
    cta: "Contact Sales",
    popular: false,
  },
] as const;

export const SOCIAL_LINKS = [
  { name: "Twitter", href: "https://twitter.com/2grw", icon: "Twitter" },
  { name: "LinkedIn", href: "https://linkedin.com/company/2grw", icon: "Linkedin" },
  { name: "GitHub", href: "https://github.com/2grw", icon: "Github" },
  { name: "Discord", href: "https://discord.gg/2grw", icon: "MessageCircle" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "API", href: "/api" },
    { name: "Integrations", href: "/integrations" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "/status" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
} as const;

export const META_TAGS = {
  home: {
    title: "2GRW - AI-Powered Investment Portfolio Tracker",
    description: "Track your investments with AI-powered insights. Monitor dividends, crypto, and stocks in one intelligent dashboard.",
    keywords: "AI portfolio tracker, dividend tracker, investment dashboard, portfolio management",
  },
  features: {
    title: "Features - 2GRW AI Portfolio Tracker",
    description: "Discover powerful features for tracking and optimizing your investment portfolio with AI insights.",
    keywords: "portfolio features, AI insights, dividend tracking, crypto tracking",
  },
  blog: {
    title: "Blog - 2GRW Investment Insights",
    description: "Latest insights on AI-powered investing, portfolio management, and market analysis.",
    keywords: "investment blog, AI investing, portfolio management, market insights",
  },
  about: {
    title: "About 2GRW - AI-Powered Investment Platform",
    description: "Learn about 2GRW's mission to democratize intelligent investing through AI-powered portfolio management.",
    keywords: "about 2grw, AI investing platform, investment technology",
  },
} as const;
