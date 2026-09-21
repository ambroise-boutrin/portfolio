export interface Competence {
    bloc: string;
    items: string[];
}

export interface StackDetail {
    name: string;
    reason: string;
}

export interface DeploymentDoc {
    step: string;
    content: string;
}

export interface CaseStudy {
    problem: { title: string; items: string[] };
    solution: { title: string; items: string[] };
    result: { title: string; items: string[] };
}

export interface Project {
    id: string;
    title: string;
    slug: string;
    category: string;
    role: string;
    description: string;
    tech: string[];
    mainTech: string;
    color: string;
    textColor: string;
    github: string | null;
    demo: string | null;
    logo: string | null;
    invertLogo: boolean;
    image: string;
    video?: string;
    imageAlt: string;
    images: string[];
    longDescription: string;
    competences: Competence[];
    caseStudy?: CaseStudy;
    problem?: string;
    stackDetails: StackDetail[];
    deploymentDocs?: DeploymentDoc[];
}

export const projects: Project[] = [
    {
        id: "13",
        title: "ENE Micro-Station",
        slug: "ene-microstation",
        category: "Site Vitrine Client",
        role: "Développeur Fullstack",
        description: "Site vitrine professionnel pour ENE SAS, spécialiste de l'assainissement non collectif depuis 2006. Micro-stations Tricel Novo, filtres compacts, pompes de relevage.",
        tech: ["Next.js", "TailwindCSS", "TypeScript", "Vercel"],
        mainTech: "Next.js / Tailwind",
        color: "bg-[#2d6a4f]",
        textColor: "text-white",
        github: "https://github.com/ambroise-boutrin/enemicrostation",
        demo: "https://enemicrostation.vercel.app",
        logo: null,
        invertLogo: false,
        image: "/images/shots/site-web-assainissement-orleans.webp",
        imageAlt: "Page d'accueil du site ENE Micro-Station, spécialiste assainissement",
        images: [],
        longDescription: "Refonte complète de la présence en ligne pour ENE SAS, un acteur historique de l'assainissement non collectif cherchant à digitaliser son acquisition client. Ce projet s'articule autour d'une approche performance et SEO pour transformer un simple site vitrine en une véritable machine de génération de leads locaux.",
        competences: [],
        caseStudy: {
            problem: {
                title: "Problème initial de l'artisan",
                items: [
                    "Manque de visibilité locale dans les moteurs de recherche",
                    "Site web vieillissant ne reflétant pas l'expertise de l'entreprise",
                    "Frein à l'acquisition de nouveaux clients qualifiés"
                ]
            },
            solution: {
                title: "Solution technique apportée",
                items: [
                    "Conception d'un site vitrine sur-mesure ultra-rapide (Next.js)",
                    "Intégration d'un SEO local avancé avec données structurées",
                    "Interface mobile-first facilitant la prise de contact"
                ]
            },
            result: {
                title: "Résultat concret",
                items: [
                    "Visibilité en ligne considérablement accrue",
                    "Augmentation des contacts qualifiés générés via le site",
                    "Le site fait office de commercial digital disponible 24/7"
                ]
            }
        },
        problem: "Manque de visibilité locale et site web vieillissant qui ne reflétait pas l'expertise de l'entreprise, freinant l'acquisition de nouveaux clients.",
        stackDetails: [
            { name: "Next.js", reason: "Performance, SEO et rendu hybride pour une visibilité locale optimale" },
            { name: "Tailwind CSS", reason: "Design professionnel et responsive rapide à implémenter" },
            { name: "Schema.org", reason: "Données structurées pour le référencement local (LocalBusiness)" }
        ]
    },
    {

        id: "11",
        title: "Serveur Minecraft",
        slug: "serveur-minecraft",
        category: "Backend et Gaming",
        role: "Développeur Backend",
        description: "Configuration et développement d'un serveur Minecraft avec gestion des plugins, des joueurs et de l'infrastructure backend en JavaScript.",
        tech: ["JavaScript", "Node.js", "JSON", "Linux"],
        mainTech: "Node.js / JavaScript",
        color: "bg-[#3b8526]",
        textColor: "text-white",
        github: "https://github.com/ambroise-boutrin/serverminecraft",
        demo: null,
        logo: null,
        invertLogo: false,
        image: "/images/serveur-minecraft-sur-mesure.webp",
        imageAlt: "Configuration du serveur Minecraft",
        images: [],
        longDescription: "Mise en place et développement d'un serveur Minecraft personnalisé. Le projet couvre la configuration du serveur, la gestion des plugins et des permissions joueurs, ainsi que l'automatisation de certaines tâches d'administration via des scripts JavaScript/Node.js.",
        competences: [],
        caseStudy: {
            problem: {
                title: "Défi d'infrastructure",
                items: [
                    "Besoin d'un serveur Minecraft hautement personnalisé",
                    "Nécessité d'intégrer des plugins spécifiques complexes",
                    "Gestion manuelle et chronophage de l'infrastructure"
                ]
            },
            solution: {
                title: "Automatisation et Backend",
                items: [
                    "Développement de scripts d'automatisation en Node.js",
                    "Configuration sur-mesure de l'environnement Linux",
                    "Création de plugins personnalisés en JavaScript"
                ]
            },
            result: {
                title: "Stabilité et Performance",
                items: [
                    "Serveur stable accueillant de nombreux joueurs sans latence",
                    "Réduction drastique du temps d'administration",
                    "Gestion fine et automatisée des permissions"
                ]
            }
        },
        problem: "Besoin d'un serveur Minecraft personnalisé avec des plugins spécifiques et une gestion automatisée de l'infrastructure.",
        stackDetails: [
            { name: "Node.js", reason: "Scripts d'automatisation et gestion du serveur" },
            { name: "JavaScript", reason: "Logique de configuration et plugins personnalisés" }
        ]
    },
    {
        id: "10",
        title: "Complément Outlook",
        slug: "complement-outlook",
        category: "Productivité et Add-ins",
        role: "Développeur Fullstack",
        description: "Développement d'un complément Outlook sur mesure pour automatiser et enrichir la gestion des emails directement depuis le client de messagerie.",
        tech: ["Office.js", "React", "Node.js", "Microsoft Graph API"],
        mainTech: "Office.js / React",
        color: "bg-[#0078d4]",
        textColor: "text-white",
        github: null,
        demo: null,
        logo: null,
        invertLogo: false,
        image: "/images/complement-outlook-entreprise.webp",
        video: "/videos/presentation-complement-outlook.mp4",
        imageAlt: "Interface du Complément Outlook",
        images: ["/images/complement-outlook-entreprise.webp"],
        longDescription: "Conception et développement d'un add-in pour Microsoft Outlook afin d'intégrer des fonctionnalités métiers directement dans l'interface de messagerie de l'utilisateur. Le complément permet d'extraire des informations des emails et de les synchroniser avec un système d'information interne.",
        competences: [],
        caseStudy: {
            problem: {
                title: "Perte de productivité",
                items: [
                    "Saisie manuelle chronophage des données des emails",
                    "Risque d'erreurs lors du copier-coller vers le SI",
                    "Allers-retours constants entre Outlook et les outils internes"
                ]
            },
            solution: {
                title: "Add-in sur-mesure",
                items: [
                    "Développement d'un complément Outlook avec React et Office.js",
                    "Intégration transparente via Microsoft Graph API",
                    "Extraction et synchronisation automatisées des données"
                ]
            },
            result: {
                title: "Gain de temps massif",
                items: [
                    "Suppression totale de la double saisie",
                    "Processus métiers accélérés et fiabilisés",
                    "Adoption immédiate par les collaborateurs"
                ]
            }
        },
        problem: "Les collaborateurs perdaient beaucoup de temps à copier-coller manuellement les informations des emails vers d'autres outils internes.",
        stackDetails: [
            { name: "Office.js", reason: "API officielle pour interagir avec les clients Office" },
            { name: "React", reason: "Création d'une interface utilisateur dynamique et réactive" },
            { name: "Microsoft Graph API", reason: "Accès sécurisé aux données de l'écosystème Microsoft 365" }
        ]
    },
    {
        id: "09",
        title: "Hound Search",
        slug: "hound-search",
        category: "Outil Interne et DevOps",
        role: "DevOps / Déploiement",
        description: "Déploiement et configuration d'un moteur de recherche de code ultra-rapide basé sur des expressions régulières pour l'exploration de dépôts volumineux.",
        tech: ["Docker", "Linux", "Git", "JSON"],
        mainTech: "Docker / Linux",
        color: "bg-[#2b2b2b]",
        textColor: "text-white",
        github: "https://github.com/hound-search/hound",
        demo: null,
        logo: null,
        invertLogo: false,
        image: "/images/moteur-recherche-python-hound.gif",
        imageAlt: "Interface de Hound Search",
        images: ["/images/moteur-recherche-python-hound.gif"],
        longDescription: "Mise en place de Hound Search, un outil open-source développé par Etsy, permettant de faire des recherches ultra-rapides sur d'énormes bases de code en utilisant des expressions régulières. Ce projet illustre mes compétences en déploiement de services internes, configuration via Docker, et gestion de l'intégration avec de multiples dépôts Git.",
        competences: [],
        caseStudy: {
            problem: {
                title: "Recherche de code inefficace",
                items: [
                    "Perte de temps pour retrouver des extraits de code",
                    "Multiplication des dépôts Git complexes à explorer",
                    "Absence d'un outil centralisé pour les développeurs"
                ]
            },
            solution: {
                title: "Déploiement de Hound",
                items: [
                    "Mise en place du moteur Hound Search ultra-rapide",
                    "Conteneurisation via Docker pour une maintenance aisée",
                    "Configuration JSON pour l'indexation de tous les dépôts"
                ]
            },
            result: {
                title: "Vélocité accrue",
                items: [
                    "Recherche instantanée par expressions régulières",
                    "Gain de productivité majeur pour toute l'équipe technique",
                    "Outil interne fiable et adopté par tous"
                ]
            }
        },
        problem: "Les développeurs perdaient un temps précieux à chercher des bouts de code spécifiques à travers des dizaines de dépôts différents.",
        stackDetails: [
            { name: "Docker", reason: "Conteneurisation pour un déploiement reproductible et isolé" },
            { name: "JSON", reason: "Format de configuration natif et flexible pour définir les dépôts" }
        ],
        deploymentDocs: [
            {
                step: "1. Prérequis et Préparation",
                content: "Assurez-vous d'avoir un serveur Linux (Ubuntu/Debian) avec Docker et Docker Compose installés.\n\n```bash\nsudo apt update\nsudo apt install docker.io docker-compose\n```"
            },
            {
                step: "2. Fichier de Configuration (config.json)",
                content: "Créez un fichier `config.json` pour déclarer les dépôts Git que Hound devra indexer. Voici un exemple basique :\n\n```json\n{\n  \"max-concurrent-indexers\": 2,\n  \"dbpath\": \"data\",\n  \"repos\": {\n    \"Portfolio\": {\n      \"url\": \"https://github.com/ambroise-boutrin/portfolio.git\"\n    }\n  }\n}\n```"
            },
            {
                step: "3. Fichier Docker Compose",
                content: "Créez un fichier `docker-compose.yml` pour définir et lancer le service Hound facilement.\n\n```yaml\nversion: '3'\nservices:\n  hound:\n    image: etsylabs/hound\n    ports:\n      - \"6080:6080\"\n    volumes:\n      - ./data:/data\n      - ./config.json:/config.json\n```"
            },
            {
                step: "4. Lancement et Utilisation",
                content: "Démarrez le conteneur en arrière-plan en utilisant Docker Compose.\n\n```bash\ndocker-compose up -d\n```\n\nUne fois le conteneur lancé, Hound va cloner les dépôts et construire son index. Vous pouvez accéder à l'interface web via `http://votre-ip:6080`."
            }
        ]

    },
    {
        id: "05",
        title: "Stocko - ERP Web",
        slug: "stocko-erp",
        category: "Outil Professionnel Web",
        role: "Développeur Fullstack",
        description: "Solution ERP complète pour la gestion d'entreprise. Développement fullstack avec interface moderne et backend robuste.",
        tech: ["React", "Vite", "Node.js", "Express"],
        mainTech: "React / Node.js",
        color: "bg-[#0f172a]",
        textColor: "text-white",
        github: null,
        demo: "https://erp-eight-navy.vercel.app/",
        logo: "/images/GSB.png",
        invertLogo: false,
        image: "/images/logiciel-erp-pme-stocko.png",
        imageAlt: "Dashboard de l'application Stocko ERP Web",
        images: [
            "/images/gallery/erp/accueil-dashboard-erp.png",
            "/images/gallery/erp/gestion-catalogue-erp.png",
            "/images/gallery/erp/dashboard-ventes-erp.png",
            "/images/gallery/erp/historique-commandes-erp.png",
            "/images/gallery/erp/gestion-utilisateurs-erp.png"
        ],
        longDescription: "Développement de Stocko, une application ERP fullstack sur-mesure pour centraliser la gestion des processus métiers : stocks, ventes, achats, fournisseurs et utilisateurs. L'architecture sépare clairement le frontend (React/Vite) du backend (Node.js/Express).",
        competences: [],
        caseStudy: {
            problem: {
                title: "Outils de gestion obsolètes",
                items: [
                    "Données fragmentées sur plusieurs logiciels vieillissants",
                    "Manque de réactivité et d'accessibilité à distance",
                    "Processus de suivi des stocks et ventes complexes"
                ]
            },
            solution: {
                title: "ERP Fullstack Moderne",
                items: [
                    "Développement d'une SPA réactive avec React et Vite",
                    "Création d'une API backend robuste sous Node.js/Express",
                    "Centralisation des modules (stocks, achats, ventes)"
                ]
            },
            result: {
                title: "Gestion unifiée",
                items: [
                    "Interface centralisée rapide et intuitive",
                    "Données mises à jour et accessibles en temps réel",
                    "Optimisation globale des processus métiers"
                ]
            }
        },
        problem: "Besoin d'un outil de gestion interne moderne, rapide et accessible depuis n'importe quel navigateur web.",
        stackDetails: [
            { name: "React et Vite", reason: "Interface utilisateur dynamique et build ultra-fast" },
            { name: "Node.js et Express", reason: "API robuste et traitement asynchrone des données" }
        ]

    },
    {
        id: "04",
        title: "OffTime | Creative Studio",
        slug: "offtime-studio",
        category: "Cinematic et Digital Art",
        role: "Creative Studio",
        description: "Experience. In Motion. THE ART OF THE CUT. THE SOUL OF THE FRAME. Une exploration des textures temporelles traduite dans une expérience web immersive.",
        tech: ["Next.js", "Three.js", "TailwindCSS", "GSAP"],
        mainTech: "Next.js / GSAP",
        color: "bg-[#050505]",
        textColor: "text-white",
        github: null,
        demo: "https://awwwards-lyart.vercel.app/",
        logo: null,
        invertLogo: false,
        image: "/images/site-web-agence-creative-offtime.webp",
        imageAlt: "Aperçu de la page d'accueil de OffTime Studio",
        images: [
            "/images/site-web-agence-creative-offtime.webp"
        ],
        longDescription: "Chez OffTime, nous ne nous contentons pas de capturer la lumière. Nous manipulons la perception du temps. À travers un montage méticuleux, une typographie cinétique et un design numérique fluide, nous transformons des secondes en moments profonds. Studio avant-gardiste opérant globalement, notre travail se situe à l'intersection du cinéma et de l'art interactif.",
        competences: [],
        caseStudy: {
            problem: {
                title: "Défi esthétique et technique",
                items: [
                    "Besoin de traduire l'art cinématographique sur le web",
                    "Nécessité d'animations complexes haute-fidélité",
                    "Risque de compromettre les performances avec la 3D"
                ]
            },
            solution: {
                title: "Immersion et Performance",
                items: [
                    "Utilisation de Three.js pour le rendu 3D créatif",
                    "Intégration d'animations GSAP fluides et millimétrées",
                    "Architecture Next.js pour garantir la vitesse de chargement"
                ]
            },
            result: {
                title: "Expérience primée",
                items: [
                    "Vitrine digitale digne des standards Awwwards",
                    "Navigation immersive sans temps de latence",
                    "Identité visuelle avant-gardiste respectée à 100%"
                ]
            }
        },
        problem: "Concevoir une expérience numérique qui traduit l'esthétique cinématographique et la vision avant-gardiste du studio sans compromettre les performances.",
        stackDetails: [
            { name: "Next.js", reason: "Performance, rendu hybride, architecture moderne" },
            { name: "Three.js", reason: "Rendu 3D et expériences visuelles complexes" },
            { name: "GSAP", reason: "Animations fluides haute-fidélité et scroll interactif" },
            { name: "Tailwind CSS", reason: "Stylisation agile et système de design sur-mesure" }
        ]

    },
    {
        id: "01",
        title: "E-Commerce de Vins Premium",
        slug: "garanches-ecommerce",
        category: "Web Fullstack",
        role: "Développeur Fullstack",
        description: "Plateforme de vente de vins avec gestion de panier, paiement sécurisé et back-office administrateur. Design premium et performance optimisée.",
        tech: ["Next.js", "Stripe", "TailwindCSS", "Prisma"],
        mainTech: "Next.js / Stripe",
        color: "bg-[#111]",
        textColor: "text-white",
        github: "https://github.com/ambroise-boutrin", // Placeholder if private
        demo: "https://garanches.vercel.app/",
        logo: "/images/garanches.webp",
        invertLogo: true,
        image: "/images/site-e-commerce-vetements-garanches.webp",
        imageAlt: "Page d'accueil du site e-commerce de vins Garances, design sombre et élégant",
        images: [
            "/images/gallery/garanches/page-boutique-vetements.webp",
            "/images/gallery/garanches/page-domaine-vin.webp",
            "/images/gallery/garanches/page-engagements-marque.webp",
            "/images/gallery/garanches/page-contact-e-commerce.webp",
            "/images/gallery/garanches/footer-site-e-commerce.webp"
        ], // For detail gallery
        longDescription: "Développement d'une plateforme e-commerce complète pour une cave à vin. Le défi principal était de créer une expérience utilisateur fluide et haut de gamme tout en assurant une gestion robuste des stocks et des paiements via Stripe.",
        competences: [],
        caseStudy: {
            problem: {
                title: "Expérience d'achat standardisée",
                items: [
                    "Besoins spécifiques que les plateformes comme Shopify peinent à satisfaire visuellement",
                    "Nécessité de véhiculer une image haut de gamme",
                    "Gestion complexe du catalogue et des paiements"
                ]
            },
            solution: {
                title: "E-Commerce Sur-Mesure",
                items: [
                    "Conception d'une boutique Next.js ultra-rapide",
                    "Design premium sombre et élégant avec Tailwind CSS",
                    "Intégration d'un paiement transparent et sécurisé via Stripe"
                ]
            },
            result: {
                title: "Ventes et Image de marque",
                items: [
                    "Expérience d'achat fluide et immersive pour les clients",
                    "Hausse perçue de la valeur des produits",
                    "Système robuste gérant les stocks et transactions"
                ]
            }
        },
        problem: "Le client avait besoin d'une solution sur mesure pour vendre ses vins exclusifs, avec une identité visuelle forte que les solutions clés en main (Shopify) ne permettaient pas d'atteindre facilement.",
        stackDetails: [
            { name: "Next.js", reason: "Pour le rendu hybride et le SEO" },
            { name: "Stripe", reason: "Paiements sécurisés et gestion des factures" },
            { name: "Tailwind", reason: "Design rapide et responsive" },
            { name: "Prisma", reason: "Remplacement de Supabase pour l'ORM" }
        ]

    },
    {
        id: "06",
        title: "NOMAD - House Music",
        slug: "nomad-collective",
        category: "Web et Art Expérience",
        role: "Développeur Lead et Design",
        description: "Collectif House Music et Évènementiel. Une exploration des textures sonores traduite dans une expérience web immersive et performante.",
        tech: ["Next.js", "Framer Motion", "TailwindCSS", "Lenis"],
        mainTech: "Next.js / Framer Motion",
        color: "bg-[#050505]",
        textColor: "text-white",
        github: "https://github.com/ambroise-boutrin/nomad",
        demo: "https://nomad-beige-phi.vercel.app/",
        logo: "/images/nomadelogo.webp",
        invertLogo: true,
        image: "/images/plateforme-web-freelance-nomad.webp",
        imageAlt: "Interface immersive du site NOMAD, ambiance sombre et artistique",
        images: [
            "/images/gallery/nomad/accueil-plateforme-freelance.webp",
            "/images/gallery/nomad/page-vision-plateforme.webp",
            "/images/gallery/nomad/page-a-propos-plateforme.webp",
            "/images/gallery/nomad/galerie-profils-freelance.webp"
        ],
        longDescription: "Plus qu'une série de morceaux, NOMAD est une exploration des textures sonores. Nous sculptons chaque set pour transformer le dancefloor en une expérience immersive, loin des standards classiques. Le site web reflète cette philosophie avec des animations fluides, un grain de texture cinématographique et une navigation haute performance.",
        competences: [],
        caseStudy: {
            problem: {
                title: "Présence web classique",
                items: [
                    "Les sites d'évènementiel manquent souvent d'identité visuelle",
                    "Besoin de retranscrire l'ambiance musicale sur le web",
                    "Objectif de fidéliser une communauté autour du collectif"
                ]
            },
            solution: {
                title: "Expérience Interactive",
                items: [
                    "Intégration d'animations fluides avec Framer Motion",
                    "Scroll inertiel immersif (Lenis) pour parcourir les évènements",
                    "Design minimaliste mettant en valeur les assets visuels"
                ]
            },
            result: {
                title: "Engagement du public",
                items: [
                    "Le site agit comme une extension de l'expérience en club",
                    "Augmentation de la visibilité des prochains évènements",
                    "Renforcement de l'image de marque du collectif"
                ]
            }
        },
        problem: "Besoin d'une vitrine digitale qui ne soit pas juste un site informatif, mais une extension de l'expérience artistique du collectif.",
        stackDetails: [
            { name: "Next.js", reason: "Pour l'architecture moderne et le rendu ultra-rapide" },
            { name: "Framer Motion", reason: "Animations fluides et immersives" },
            { name: "Lenis", reason: "Smooth scrolling haute performance" },
            { name: "Tailwind CSS", reason: "Design système minimaliste et robuste" }
        ]

    },
    {
        id: "00", // New Top Project
        title: "Bellenippe - L'Art de l'Unicité",
        slug: "bellenippe-fashion",
        category: "E-Commerce Luxury",
        role: "Direction Artistique et Dev",
        description: "Maison de couture digitale prônant l'artisanat et l'unicité. Une expérience e-commerce immersive pour des pièces limitées.",
        tech: ["Next.js", "Shopify", "Framer Motion", "Tailwind"],
        mainTech: "Next.js / Shopify",
        color: "bg-[#0a0a0a]",
        textColor: "text-white",
        github: null, // Private client
        demo: "https://bellenippe.vercel.app/",
        logo: "/images/bellenippelogo.png",
        invertLogo: true,
        image: "/images/site-e-commerce-mode-bellenippe.png",
        imageAlt: "Logo et interface sombre du site e-commerce de luxe Bellenippe",
        images: [
            "/images/gallery/bellenippe/accueil-site-mode.png",
            "/images/gallery/bellenippe/page-marque-mode.png",
            "/images/gallery/bellenippe/page-contact-mode.png",
        ],
        longDescription: "Conception complète de l'identité numérique de Bellenippe, une marque de couture française. L'objectif était de traduire la texture et la rareté des pièces physiques dans une interface digitale. Utilisation de transitions fluides et d'une typographie éditoriale pour sublimer chaque vêtement.",
        competences: [],
        caseStudy: {
            problem: {
                title: "Vente de luxe en ligne",
                items: [
                    "Comment vendre des pièces uniques en ligne sans perdre l'émotion du toucher ?",
                    "Exigence d'une présentation irréprochable des vêtements",
                    "Besoin d'allier contenu éditorial et e-commerce"
                ]
            },
            solution: {
                title: "Direction Artistique Digitale",
                items: [
                    "Architecture Headless avec Shopify pour le backend",
                    "Frontend Next.js pour une navigation ultra-rapide",
                    "Transitions fluides 'page-turn' et typographie soignée"
                ]
            },
            result: {
                title: "Conversion et Prestige",
                items: [
                    "L'interface sublime les pièces et justifie leur valeur",
                    "Parcours d'achat sans friction avec performances optimales",
                    "Taux d'engagement de la clientèle en forte hausse (+30%)"
                ]
            }
        },
        problem: "Comment vendre des pièces 'uniques' en ligne sans perdre l'émotion du toucher et de l'essayage ? Réponse : Une direction artistique centrée sur la matière et le détail visuel.",
        stackDetails: [
            { name: "Next.js 14", reason: "Performance et SEO pour le luxe" },
            { name: "Shopify Headless", reason: "Gestion robuste du catalogue back-office" },
            { name: "Framer Motion", reason: "Animations 'page-turn' pour l'immersion" }
        ]

    },
    {
        id: "02",
        title: "Outil d'Analyse Réseau",
        slug: "analyse-graphes",
        category: "Data Science et Archives",
        role: "Data Scientist",
        description: "Projet d'analyse de réseaux d'acteurs utilisant la théorie des graphes. Implémentation d'algorithmes de centralité et de détection de communautés avec NetworkX.",
        tech: ["Python", "NetworkX", "Matplotlib", "SciPy"],
        mainTech: "Python / NetworkX",
        color: "bg-[#1a1a1a]",
        textColor: "text-white",
        github: "https://github.com/Xeananas/SAEGRAH",
        demo: null,
        logo: "/images/analyse-graphes-python.png",
        invertLogo: false,
        image: "/images/analyse-graphes-python.png",
        imageAlt: "Visualisation de graphe de réseau complexe générée avec NetworkX et Matplotlib",
        images: [],
        longDescription: "Analyse approfondie d'un réseau de collaboration scientifique. Utilisation de métriques de centralité (PageRank, Betweenness) pour identifier les acteurs clés.",
        competences: [],
        caseStudy: {
            problem: {
                title: "Données non structurées",
                items: [
                    "Nécessité d'analyser un vaste réseau de collaboration scientifique",
                    "Difficulté à identifier les acteurs clés (influenceurs, ponts)",
                    "Besoin de visualiser ces dynamiques de groupe complexes"
                ]
            },
            solution: {
                title: "Algorithmes de Graphes",
                items: [
                    "Utilisation de Python et de la librairie NetworkX",
                    "Implémentation d'algorithmes de centralité (PageRank, Betweenness)",
                    "Création de visualisations claires des communautés avec Matplotlib"
                ]
            },
            result: {
                title: "Insights Actionnables",
                items: [
                    "Identification immédiate des individus clés du réseau",
                    "Mise en évidence visuelle des différentes communautés",
                    "Script robuste réutilisable pour d'autres jeux de données"
                ]
            }
        },
        problem: "Comprendre les dynamiques de groupe au sein d'un large réseau de données non structurées.",
        stackDetails: [
            { name: "Python", reason: "Langage de référence pour la Data Science" },
            { name: "NetworkX", reason: "Manipulation de graphes complexes" }
        ]

    },
    {
        id: "03",
        title: "Gestion d'Événements (JO)",
        slug: "gestion-jo-2024",
        category: "Desktop Java et Archives",
        role: "Développeur Java",
        description: "Solution complète pour l'administration des épreuves et des résultats des Jeux Olympiques. Interface Java Swing.",
        tech: ["Java", "Swing", "MySQL", "JDBC"],
        mainTech: "Java / SQL",
        color: "bg-[#1f1f1f]",
        textColor: "text-white",
        github: "https://github.com/clemencebc1/SAe_JEUXIUTO",
        demo: null,
        logo: "/images/gestion-evenements-jo-java.png",
        invertLogo: false,
        image: "/images/gestion-evenements-jo-java.png",
        imageAlt: "Interface dashboard de l'application Java Swing pour la gestion des JO",
        images: [],
        longDescription: "Application de bureau pour la gestion centralisée des JO : athlètes, épreuves, résultats et médailles.",
        competences: [],
        caseStudy: {
            problem: {
                title: "Gestion de données massives",
                items: [
                    "Besoin de centraliser athlètes, épreuves et résultats",
                    "Volume important de données nécessitant une base robuste",
                    "Interface de saisie devant être efficace pour les opérateurs"
                ]
            },
            solution: {
                title: "Application de Bureau Native",
                items: [
                    "Modélisation complète d'une base de données relationnelle (MySQL)",
                    "Développement d'une application Java avec architecture MVC",
                    "Interface graphique Swing optimisée pour la productivité"
                ]
            },
            result: {
                title: "Centralisation et Fiabilité",
                items: [
                    "Accès rapide et sécurisé à l'ensemble des données sportives",
                    "Réduction des erreurs de saisie grâce aux validations intégrées",
                    "Application performante même avec un grand jeu de données"
                ]
            }
        },
        problem: "Besoin d'une interface robuste pour la saisie et la consultation rapide de grandes quantités de données sportives.",
        stackDetails: [
            { name: "Java Swing", reason: "Interface graphique native" },
            { name: "MySQL", reason: "Stockage relationnel structuré" }
        ]

    },
    {
        id: "07",
        title: "GSB - Compte Rendu",
        slug: "gsb-compte-rendu",
        category: "Web Fullstack",
        role: "Développeur Fullstack",
        description: "Application web de gestion des comptes rendus de visite pour les visiteurs médicaux du laboratoire Galaxy Swiss Bourdin. Interface CRUD complète avec authentification.",
        tech: ["PHP", "CodeIgniter 4", "MySQL", "Bootstrap"],
        mainTech: "CodeIgniter 4 / PHP",
        color: "bg-[#1a1a2e]",
        textColor: "text-white",
        github: "https://github.com/ambroise-boutrin/GSBcompterendu",
        demo: null,
        logo: "/images/application-frais-medicaux-gsb.webp",
        invertLogo: false,
        image: "/images/application-frais-medicaux-gsb.webp",
        imageAlt: "Interface de l'application GSB Compte Rendu",
        images: [],
        longDescription: "Application web développée dans le cadre du contexte GSB (Galaxy Swiss Bourdin) pour la gestion des comptes rendus de visite des visiteurs médicaux. Le système permet la saisie, la consultation et la modification des rapports de visite auprès des praticiens.",
        competences: [],
        caseStudy: {
            problem: {
                title: "Processus manuels",
                items: [
                    "Les visiteurs médicaux utilisaient des processus lents pour leurs comptes rendus",
                    "Besoin de centralisation sécurisée des données médicales",
                    "Manque de suivi en temps réel pour l'administration"
                ]
            },
            solution: {
                title: "Portail Web Centralisé",
                items: [
                    "Développement d'une application MVC avec CodeIgniter 4 (PHP)",
                    "Système d'authentification et de gestion des rôles (visiteur/admin)",
                    "Interface responsive avec Bootstrap pour utilisation en mobilité"
                ]
            },
            result: {
                title: "Efficacité Opérationnelle",
                items: [
                    "Saisie des rapports facilitée directement après la visite",
                    "Accès immédiat aux statistiques pour les managers",
                    "Sécurisation globale des données de l'entreprise"
                ]
            }
        },
        problem: "Besoin d'un outil centralisé pour la saisie et le suivi des visites médicales, remplaçant les processus manuels.",
        stackDetails: [
            { name: "CodeIgniter 4", reason: "Framework PHP MVC léger et performant" },
            { name: "MySQL", reason: "Base de données relationnelle pour les données métiers" },
            { name: "Bootstrap", reason: "Interface responsive et professionnelle" }
        ]

    },
    {
        id: "08",
        title: "Alunisson",
        slug: "alunisson",
        category: "Web Associatif",
        role: "Développeur Web",
        description: "Site vitrine pour l'association Alunisson, un collectif de couture solidaire. Ateliers créatifs accessibles dès 8 ans, partenariats sociaux et réservation en ligne.",
        tech: ["Next.js", "TailwindCSS", "Framer Motion"],
        mainTech: "Next.js / Tailwind",
        color: "bg-[#f5e6e0]",
        textColor: "text-[#1a1a1a]",
        github: "https://github.com/ambroise-boutrin/alunisson",
        demo: "https://alunisson.eu",
        logo: null,
        invertLogo: false,
        image: "/images/site-web-association-alunisson.webp",
        imageAlt: "Page d'accueil du site Alunisson, association de couture solidaire",
        images: [
            "/images/gallery/alunisson/accueil-site-association.webp",
            "/images/gallery/alunisson/page-ateliers-association.webp",
            "/images/gallery/alunisson/page-infolab-association.webp",
            "/images/gallery/alunisson/footer-site-association.webp"
        ],
        longDescription: "Conception et développement du site vitrine de l'association Alunisson, un collectif de couture solidaire basé à Orléans. Le site met en avant les ateliers créatifs accessibles dès 8 ans, les partenariats sociaux avec l'ODAS et les centres aérés, ainsi que la possibilité de réserver un atelier en ligne.",
        competences: [],
        caseStudy: {
            problem: {
                title: "Visibilité associative",
                items: [
                    "L'association manquait d'un support digital pour présenter ses actions",
                    "Besoin de faciliter la réservation des ateliers de couture",
                    "Nécessité de communiquer sur les partenariats sociaux (ODAS)"
                ]
            },
            solution: {
                title: "Site Vitrine Inclusif",
                items: [
                    "Développement d'une plateforme Next.js rapide et accessible",
                    "Design chaleureux et adapté à tous les publics (Tailwind CSS)",
                    "Mise en avant claire du planning et des formulaires de contact"
                ]
            },
            result: {
                title: "Rayonnement Local",
                items: [
                    "Augmentation de la participation aux ateliers créatifs",
                    "Professionnalisation de l'image de l'association",
                    "Facilitation des échanges avec les partenaires institutionnels"
                ]
            }
        },
        problem: "L'association avait besoin d'une présence en ligne professionnelle pour attirer de nouveaux membres et faciliter l'organisation des ateliers.",
        stackDetails: [
            { name: "Next.js", reason: "Performance et SEO pour la visibilité associative" },
            { name: "Tailwind CSS", reason: "Design cohérent et responsive" },
            { name: "Framer Motion", reason: "Animations douces pour un site accueillant" }
        ]

    }
];
