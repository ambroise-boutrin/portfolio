import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { guides } from '@/data/guides'
import { metiers } from '@/data/metiers'
import { SITE_URL } from '@/lib/seo'

// Date de dernière modification réelle de chaque page (format AAAA-MM-JJ).
// Mettre à jour la date quand le contenu de la page change.
// Les guides utilisent leur propre champ updatedAt (src/data/guides.ts).
const LAST_MODIFIED = {
    home: '2026-10-15',
    projets: '2026-10-15',
    projects: '2026-10-15',
    services: '2026-10-15',
    creationSiteArtisan: '2026-10-15',
    applicationMetier: '2026-10-15',
    maintenance: '2026-10-15',
    aPropos: '2026-10-13',
    contact: '2026-10-15',
    guides: '2026-10-13',
    metiers: '2026-10-13',
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_URL

    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/projets/${project.slug}`,
        lastModified: LAST_MODIFIED.projects,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: LAST_MODIFIED.home,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/projets`,
            lastModified: LAST_MODIFIED.projets,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: LAST_MODIFIED.services,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/creation-site-artisan`,
            lastModified: LAST_MODIFIED.creationSiteArtisan,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/application-metier-pme`,
            lastModified: LAST_MODIFIED.applicationMetier,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/maintenance-site-web`,
            lastModified: LAST_MODIFIED.maintenance,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/a-propos`,
            lastModified: LAST_MODIFIED.aPropos,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: LAST_MODIFIED.contact,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/guides`,
            lastModified: LAST_MODIFIED.guides,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        ...guides.map((guide) => ({
            url: `${baseUrl}/guides/${guide.slug}`,
            lastModified: guide.updatedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
        ...metiers.map((metier) => ({
            url: `${baseUrl}/creation-site-artisan/${metier.slug}`,
            lastModified: LAST_MODIFIED.metiers,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
        ...projectUrls,
    ]
}
