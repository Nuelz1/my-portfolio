/** @type {import('next-sitemap').IConfig} */
const nextConfig = {
  siteUrl: process.env.SITE_URL || 'https://devemmanuel.com',
  generateRobotsTxt: false, // We already created a custom robots.txt in Week 1
  generateIndexSitemap: false,
};

export default nextConfig;