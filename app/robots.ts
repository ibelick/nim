import type { MetadataRoute } from 'next'
// import { WEBSITE_URL } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    // sitemap: `${WEBSITE_URL}/sitemap.xml`,
  }
}
