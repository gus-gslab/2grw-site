import { generateRobotsTxt } from "@/lib/seo";

export async function GET() {
  const robots = generateRobotsTxt();
  
  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
