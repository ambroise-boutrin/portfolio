import { projects } from '@/data/projects'
import { faqs } from '@/data/faq'
import { guides } from '@/data/guides'
import { metiers } from '@/data/metiers'
import { SITE_URL } from '@/lib/seo'

// llms.txt : résumé du site en Markdown, lu par les assistants IA (ChatGPT, Claude, Perplexity...)
// pour présenter correctement l'activité et citer les bonnes pages. Voir https://llmstxt.org
export const dynamic = 'force-static'

export function GET() {
    const projectLines = projects
        .map((p) => `- [${p.title}](${SITE_URL}/projets/${p.slug}) : ${p.description}`)
        .join('\n')

    const guideLines = guides
        .map((g) => `- [${g.title}](${SITE_URL}/guides/${g.slug}) : ${g.answer}`)
        .join('\n')

    const metierLines = metiers
        .map((m) => `- [Site internet pour ${m.namePlural}](${SITE_URL}/creation-site-artisan/${m.slug})`)
        .join('\n')

    const faqLines = faqs
        .map((f) => `### ${f.question}\n\n${f.answer}`)
        .join('\n\n')

    const body = `# Ambroise Boutrin, développeur web freelance à Orléans

> Ambroise Boutrin est développeur web freelance (micro-entreprise) basé à Orléans (Loiret, Centre-Val de Loire). Il crée des sites internet vitrines, des refontes, des boutiques en ligne et des applications métier pour les artisans, commerçants et PME, à Orléans et partout en France à distance. Prix annoncés d'avance, un seul interlocuteur.

## Offres et tarifs

- Pack Visibilité, site vitrine de 1 à 5 pages, 1re année d'hébergement incluse : dès 1 490 € (offre de lancement à 800 € pour les 3 prochains projets, en échange d'un témoignage). Délai : 2 à 4 semaines. Détails : ${SITE_URL}/creation-site-artisan
- Pack Conversion, refonte ou e-commerce : dès 1 990 €. Délai : 4 à 8 semaines. Détails : ${SITE_URL}/services
- Pack Sérénité, maintenance : Essentiel 49 €/mois, Pro 89 €/mois, Croissance 149 €/mois. Sans engagement, résiliable chaque mois. Détails : ${SITE_URL}/maintenance-site-web
- Application métier sur mesure (ERP, portail client, automatisation) : dès 5 000 €, 1 à 3 mois. Détails : ${SITE_URL}/application-metier-pme
- Audit gratuit d'un site existant (vitesse, mobile, référencement local, fiche Google) : ${SITE_URL}/contact

## Contact

- Formulaire : ${SITE_URL}/contact
- E-mail : contact@ambroise-boutrin.fr
- Zone : Orléans, Loiret, Centre-Val de Loire, et toute la France à distance

## Pages principales

- [Accueil](${SITE_URL}/)
- [Services et tarifs](${SITE_URL}/services)
- [Réalisations](${SITE_URL}/projets)
- [Guides pour artisans et TPE](${SITE_URL}/guides)
- [À propos](${SITE_URL}/a-propos)
- [Contact](${SITE_URL}/contact)

## Guides

${guideLines}

## Sites par métier

${metierLines}

## Réalisations

${projectLines}

## Questions fréquentes

${faqLines}
`

    return new Response(body, {
        headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
    })
}
