import { SITE_URL } from '@/lib/site';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/.next', '/node_modules'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}