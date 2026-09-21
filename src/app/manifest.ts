import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Ambroise Boutrin Portfolio',
        short_name: 'Ambroise B.',
        description: 'Studio de développement web et design à Orléans - Applications et Sites Performance',
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
