import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

// Robots des moteurs de réponse et des IA génératives, autorisés explicitement
// pour que le site puisse être cité dans ChatGPT, Perplexity, Claude, Gemini, etc.
const aiCrawlers = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'PerplexityBot',
    'Perplexity-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'Google-Extended',
    'Applebot-Extended',
    'Bingbot',
    'DuckAssistBot',
    'MistralAI-User',
]

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: aiCrawlers,
                allow: '/',
                disallow: ['/api/'],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    }
}
