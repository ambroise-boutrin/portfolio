import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_URL

    // Date du déploiement : le sitemap est régénéré à chaque mise en ligne
    const lastMod = new Date()

    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/projets/${project.slug}`,
        lastModified: lastMod,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/projets`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/creation-site-artisan`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/application-metier-pme`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/maintenance-site-web`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/a-propos`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/competences`,
            lastModified: lastMod,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/certifications`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: lastMod,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/veille`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        ...projectUrls,
    ]
}
