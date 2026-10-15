// Guides pratiques pour artisans, commerçants et PME.
// Chaque guide répond d'abord à la question posée (réponse courte en tête),
// pour être repris tel quel par Google et les assistants IA.

export interface GuideSection {
    heading: string;
    paragraphs?: string[];
    list?: string[];
}

export interface Guide {
    slug: string;
    title: string;
    metaTitle: string;
    description: string;
    publishedAt: string;
    updatedAt: string;
    readingMinutes: number;
    answer: string;
    sections: GuideSection[];
    faq: { question: string; answer: string }[];
    cta: { text: string; href: string; label: string };
}

export const guides: Guide[] = [
    {
        slug: "prix-site-internet-artisan",
        title: "Combien coûte un site internet pour un artisan ?",
        metaTitle: "Prix d'un site internet pour artisan en 2026 : combien prévoir ?",
        description: "Combien coûte un site internet pour un artisan : fourchettes de prix selon la solution (outil en ligne, freelance, agence), ce qui fait varier le devis et les coûts annuels à prévoir.",
        publishedAt: "2026-10-13",
        updatedAt: "2026-10-15",
        readingMinutes: 6,
        answer: "Pour un artisan, un site vitrine de quelques pages coûte en général entre 0 € (outil à faire soi-même) et 5 000 € et plus (agence). Avec un développeur freelance, comptez le plus souvent entre 800 € et 2 500 € pour un site sur mesure, plus 100 à 600 € par an pour le nom de domaine, l'hébergement et la maintenance.",
        sections: [
            {
                heading: "Les trois façons d'avoir un site, et leur prix",
                list: [
                    "Le faire soi-même avec un outil en ligne (Wix, Jimdo, Google Sites…) : de 0 à 30 € par mois. Peu cher au départ, mais il faut y passer du temps, le résultat ressemble souvent à un modèle, et le référencement local demande des connaissances que l'outil ne donne pas.",
                    "Passer par un développeur freelance : de 800 € à 2 500 € pour un site vitrine de 1 à 5 pages. Un seul interlocuteur, un site adapté à votre métier, et en général un prix fixé à l'avance.",
                    "Passer par une agence web : de 2 500 € à plus de 5 000 €. Plus de monde sur le projet (chef de projet, graphiste, développeur), utile pour des besoins complexes, souvent surdimensionné pour un artisan.",
                ],
            },
            {
                heading: "Ce qui fait varier le prix",
                paragraphs: [
                    "Le nombre de pages compte moins qu'on ne le croit. Ce qui pèse vraiment sur un devis, c'est le travail autour du site :",
                ],
                list: [
                    "La rédaction des textes : les fournissez-vous, ou faut-il les écrire à partir d'un échange ?",
                    "Les photos : vos propres photos de chantiers valent mieux que des images de banque d'images, mais il faut parfois les trier et les retoucher.",
                    "Le référencement local : pages pensées pour votre métier et votre ville, données structurées, fiche Google Business Profile.",
                    "Les fonctions en plus : formulaire de devis détaillé, prise de rendez-vous, galerie de réalisations, espace client, paiement en ligne.",
                    "La refonte d'un site existant : il faut reprendre le contenu et conserver le référencement déjà acquis (redirections).",
                ],
            },
            {
                heading: "Les coûts à prévoir chaque année",
                paragraphs: [
                    "Un site ne s'arrête pas le jour de sa mise en ligne. Prévoyez chaque année le nom de domaine (environ 10 à 20 €), l'hébergement (de 0 à 200 € selon la solution) et, si vous ne voulez pas vous en occuper, un contrat de maintenance qui couvre les mises à jour, les sauvegardes et la sécurité.",
                    "Demandez toujours qui est propriétaire du nom de domaine et du site. Il doit être à votre nom : si vous changez de prestataire, vous devez pouvoir partir avec.",
                ],
            },
            {
                heading: "Mes tarifs, pour comparer",
                paragraphs: [
                    "Je suis développeur web freelance à Orléans. Le Pack Visibilité (site vitrine de 1 à 5 pages, formulaire de devis, fiche Google, référencement local et 1re année d'hébergement incluse) démarre à 1 490 €, et je le propose à 800 € pour mes 3 prochains projets en échange d'un témoignage. La maintenance démarre à 49 € par mois, sans engagement. Le prix est fixé avant de commencer.",
                ],
            },
        ],
        faq: [
            {
                question: "Un site internet à 0 € est-il une bonne idée pour un artisan ?",
                answer: "Pour démarrer, une fiche Google Business Profile bien remplie (gratuite) apporte souvent plus de clients qu'un site gratuit bâclé. Un site gratuit devient intéressant si vous avez le temps de bien l'écrire et de le tenir à jour.",
            },
            {
                question: "Un site d'artisan peut-il être rentabilisé ?",
                answer: "Il est rentabilisé dès qu'il vous apporte un ou deux chantiers supplémentaires. C'est pour cela que le référencement local et un formulaire de devis simple comptent plus que le design.",
            },
        ],
        cta: { text: "Vous voulez un prix précis pour votre site ?", href: "/contact", label: "Demander un devis" },
    },
    {
        slug: "refaire-son-site-internet",
        title: "Faut-il refaire son site internet ? 7 signes qui ne trompent pas",
        metaTitle: "Faut-il refaire son site internet ? 7 signes à vérifier",
        description: "Comment savoir s'il faut refaire son site internet : 7 signes à vérifier en 10 minutes (mobile, vitesse, Google, demandes de devis) et quand une simple mise à jour suffit.",
        publishedAt: "2026-10-13",
        updatedAt: "2026-10-13",
        readingMinutes: 5,
        answer: "Il faut refaire son site quand il ne vous apporte plus de demandes : il s'affiche mal sur téléphone, il est lent, il n'apparaît pas sur Google quand on cherche votre métier dans votre ville, ou ses informations sont dépassées. Si seul le contenu a vieilli, une mise à jour suffit souvent.",
        sections: [
            {
                heading: "Les 7 signes qu'il est temps de refaire votre site",
                list: [
                    "Il s'affiche mal sur téléphone : textes minuscules, boutons trop petits, page qu'il faut zoomer. La majorité des visiteurs d'un artisan arrivent depuis un mobile.",
                    "Il met plus de 3 secondes à s'afficher. Au-delà, beaucoup de visiteurs repartent avant d'avoir vu quoi que ce soit.",
                    "Il n'apparaît pas quand on tape « votre métier + votre ville » dans Google.",
                    "Il ne vous a apporté aucune demande de devis depuis des mois.",
                    "Les informations sont fausses ou anciennes : horaires, téléphone, prestations, photos d'il y a dix ans.",
                    "Le navigateur affiche « Non sécurisé » à côté de l'adresse (pas de certificat HTTPS).",
                    "Vous ne pouvez plus le modifier : prestataire injoignable, accès perdus, outil abandonné.",
                ],
            },
            {
                heading: "Comment vérifier en 10 minutes",
                list: [
                    "Ouvrez votre site sur votre téléphone, en 4G, comme le ferait un client.",
                    "Testez sa vitesse avec PageSpeed Insights de Google (gratuit) : un score mobile sous 50 est mauvais signe.",
                    "Cherchez « votre métier + votre ville » dans Google en navigation privée et notez où vous apparaissez.",
                    "Envoyez-vous une demande via votre propre formulaire de contact pour vérifier qu'elle arrive bien.",
                ],
            },
            {
                heading: "Refonte complète ou simple mise à jour ?",
                paragraphs: [
                    "Si votre site est rapide, bien affiché sur mobile et que vous pouvez le modifier, une mise à jour suffit : nouveaux textes, nouvelles photos, fiche Google à jour.",
                    "Si deux ou trois des signes ci-dessus se cumulent, une refonte coûte souvent moins cher que de rafistoler. Une bonne refonte conserve votre adresse et redirige les anciennes pages vers les nouvelles, pour ne pas perdre le référencement déjà acquis.",
                ],
            },
        ],
        faq: [
            {
                question: "Combien de temps dure la refonte d'un site vitrine ?",
                answer: "Comptez en général 4 à 8 semaines pour une refonte, selon la quantité de contenu à reprendre et la rapidité des validations.",
            },
            {
                question: "Vais-je perdre mon référencement en refaisant mon site ?",
                answer: "Pas si la refonte est bien faite : on garde le même nom de domaine, on reprend les contenus qui fonctionnent et on redirige chaque ancienne adresse vers la nouvelle page correspondante.",
            },
        ],
        cta: { text: "Vous hésitez entre refonte et mise à jour ? Parlons de votre site.", href: "/contact", label: "Me contacter" },
    },
    {
        slug: "fiche-google-business-profile-artisan",
        title: "Fiche Google Business Profile : le guide pour les artisans",
        metaTitle: "Fiche Google Business Profile pour artisan : créer et optimiser",
        description: "Créer et optimiser sa fiche Google Business Profile quand on est artisan : étapes, informations à remplir, photos, avis clients et erreurs à éviter pour apparaître dans Google Maps.",
        publishedAt: "2026-10-13",
        updatedAt: "2026-10-13",
        readingMinutes: 6,
        answer: "La fiche Google Business Profile (ex-Google My Business) est gratuite et fait apparaître votre entreprise dans Google Maps et dans l'encadré local des résultats. Pour un artisan, c'est souvent la première source d'appels : créez-la, choisissez la bonne catégorie, définissez votre zone d'intervention, ajoutez des photos de chantiers et demandez des avis à chaque client satisfait.",
        sections: [
            {
                heading: "Créer sa fiche, étape par étape",
                list: [
                    "Allez sur business.google.com avec un compte Google, de préférence un compte dédié à l'entreprise.",
                    "Saisissez le nom exact de votre entreprise, sans y ajouter de mots-clés (Google peut suspendre la fiche).",
                    "Choisissez la catégorie principale la plus précise possible : « Plombier » plutôt que « Entreprise de construction ».",
                    "Si vous vous déplacez chez vos clients, indiquez une zone d'intervention et masquez votre adresse si vous travaillez depuis chez vous.",
                    "Validez la fiche : Google propose selon les cas un appel, un SMS, un e-mail ou une courte vidéo.",
                ],
            },
            {
                heading: "Les informations qui font la différence",
                list: [
                    "Les horaires, y compris les horaires spéciaux des jours fériés.",
                    "La liste de vos services, avec une courte description pour chacun.",
                    "Le lien vers votre site internet, idéalement vers la page qui correspond à votre métier.",
                    "Des photos réelles : vous, votre véhicule, vos chantiers avant et après. Ajoutez-en régulièrement.",
                    "Une description qui dit ce que vous faites, où et pour qui, en quelques phrases simples.",
                ],
            },
            {
                heading: "Les avis clients",
                paragraphs: [
                    "Les avis comptent à la fois pour votre position dans Google Maps et pour la décision du client. Demandez-en un à chaque fin de chantier réussi, en envoyant directement le lien d'avis que Google fournit dans votre fiche. Répondez à tous les avis, y compris les négatifs, calmement et en proposant une solution.",
                    "N'achetez jamais d'avis et n'en écrivez pas vous-même : c'est interdit et Google les supprime.",
                ],
            },
            {
                heading: "Les erreurs fréquentes",
                list: [
                    "Ajouter « Orléans pas cher » ou d'autres mots-clés dans le nom de l'entreprise.",
                    "Avoir un nom, une adresse ou un téléphone différents entre la fiche, le site et les annuaires.",
                    "Créer une deuxième fiche au lieu de récupérer l'ancienne.",
                    "Laisser la fiche sans photo ni publication pendant des mois.",
                ],
            },
        ],
        faq: [
            {
                question: "La fiche Google Business Profile est-elle payante ?",
                answer: "Non, elle est entièrement gratuite. Méfiez-vous des démarchages téléphoniques qui prétendent le contraire.",
            },
            {
                question: "Faut-il un site internet si on a une fiche Google ?",
                answer: "La fiche apporte des appels, le site rassure et convertit : il montre vos réalisations, vos prix ou votre méthode, et permet une demande de devis détaillée. Les deux se renforcent, et Google tient compte du site lié à la fiche.",
            },
        ],
        cta: { text: "J'optimise votre fiche Google en même temps que votre site.", href: "/creation-site-artisan", label: "Voir le Pack Visibilité" },
    },
];

export function getGuide(slug: string) {
    return guides.find((guide) => guide.slug === slug);
}
