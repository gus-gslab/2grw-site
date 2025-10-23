import { generateSitemap } from "@/lib/seo";

export async function GET() {
  const sitemap = generateSitemap();
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
