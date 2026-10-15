import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Ambroise Boutrin Portfolio',
        short_name: 'Ambroise B.',
        description: 'Ambroise Boutrin, développeur web freelance à Orléans',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/apple-icon',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
