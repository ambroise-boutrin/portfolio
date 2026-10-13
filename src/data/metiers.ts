// Pages « création de site internet pour [métier] ».
// Chaque métier a ses propres besoins, sa structure de site et ses questions :
// des pages réellement différentes, pas un même texte où seul le métier change.

export interface Metier {
    slug: string;
    name: string;
    namePlural: string;
    intro: string;
    searches: string[];
    needs: { title: string; description: string }[];
    pages: string[];
    example: { headline: string; subline: string; cta: string; proof: string };
    relatedProject?: { slug: string; label: string };
    faq: { question: string; answer: string }[];
}

export const metiers: Metier[] = [
    {
        slug: "plombier-chauffagiste",
        name: "plombier chauffagiste",
        namePlural: "plombiers et chauffagistes",
        intro: "Un client qui cherche un plombier a souvent une fuite ou une chaudière en panne. Il appelle l'un des premiers qu'il trouve sur son téléphone. Votre site doit donc être trouvé vite, se charger vite et mettre votre numéro au premier plan.",
        searches: ["plombier Orléans", "dépannage chaudière Orléans", "chauffagiste Loiret", "remplacement chauffe-eau prix"],
        needs: [
            { title: "Le dépannage en premier", description: "Bouton d'appel visible en haut de chaque page sur mobile, zone d'intervention et délais d'intervention annoncés clairement." },
            { title: "Les travaux qui rapportent", description: "Une page par prestation à forte valeur : remplacement de chaudière, pompe à chaleur, rénovation de salle de bain, avec photos de vos chantiers." },
            { title: "Les certifications", description: "RGE, Qualigaz, QualiPAC : à afficher, car elles rassurent et conditionnent les aides (MaPrimeRénov', CEE) que vos clients recherchent." },
        ],
        pages: ["Accueil avec numéro et zone d'intervention", "Dépannage plomberie", "Chauffage et pompe à chaleur", "Salle de bain", "Réalisations avant / après", "Demande de devis"],
        example: { headline: "Plombier chauffagiste à Orléans et alentours", subline: "Dépannage, remplacement de chaudière et pompe à chaleur. Artisan RGE.", cta: "Appeler maintenant", proof: "Intervention sur Orléans Métropole et le Loiret" },
        relatedProject: { slug: "ene-microstation", label: "Site d'ENE, spécialiste de l'assainissement non collectif" },
        faq: [
            { question: "Faut-il afficher ses prix de dépannage sur son site ?", answer: "Afficher un prix de déplacement ou une fourchette rassure et filtre les demandes. Pour les gros travaux, un « à partir de » suivi d'une demande de devis fonctionne bien." },
            { question: "Comment apparaître quand quelqu'un cherche « plombier » près de chez lui ?", answer: "Il faut une fiche Google Business Profile complète avec des avis, et un site qui mentionne clairement votre métier et les communes où vous intervenez." },
        ],
    },
    {
        slug: "electricien",
        name: "électricien",
        namePlural: "électriciens",
        intro: "Mise aux normes, tableau électrique, borne de recharge, domotique : les clients d'un électricien comparent souvent plusieurs devis avant de se décider. Votre site doit montrer votre sérieux et rendre la demande de devis simple.",
        searches: ["électricien Orléans", "mise aux normes électrique maison", "installation borne recharge Loiret", "remplacement tableau électrique prix"],
        needs: [
            { title: "Rassurer sur la sécurité", description: "Qualifications (Qualifelec, IRVE pour les bornes), assurance décennale, conformité aux normes : ce sont les premières questions de vos clients." },
            { title: "Des pages par besoin", description: "Rénovation électrique, borne de recharge, dépannage, domotique : chaque page répond à une recherche différente sur Google." },
            { title: "Un devis facile à demander", description: "Un formulaire qui demande le type de logement, les travaux et des photos du tableau vous fait gagner un déplacement." },
        ],
        pages: ["Accueil", "Rénovation et mise aux normes", "Borne de recharge (IRVE)", "Dépannage", "Réalisations", "Demande de devis avec photos"],
        example: { headline: "Électricien à Orléans : rénovation, mise aux normes et bornes de recharge", subline: "Artisan qualifié, devis gratuit sous 48 h.", cta: "Demander un devis", proof: "Habilité IRVE pour les bornes de recharge" },
        faq: [
            { question: "Une page dédiée aux bornes de recharge est-elle utile ?", answer: "Oui : c'est une recherche précise, avec des clients prêts à acheter, et les aides possibles sont une question fréquente à laquelle la page peut répondre." },
            { question: "Puis-je ajouter mes réalisations moi-même ?", answer: "Oui, le site peut être livré avec une galerie que vous complétez depuis votre téléphone, ou je m'en charge dans le cadre de la maintenance." },
        ],
    },
    {
        slug: "paysagiste",
        name: "paysagiste",
        namePlural: "paysagistes",
        intro: "Pour un paysagiste, le site est avant tout une vitrine de réalisations. Vos clients achètent un résultat qu'ils doivent pouvoir imaginer : les photos avant / après font l'essentiel du travail.",
        searches: ["paysagiste Orléans", "entretien jardin Loiret", "création jardin prix", "élagage Orléans"],
        needs: [
            { title: "Des photos qui vendent", description: "Une galerie avant / après rapide à charger, classée par type de projet : création, terrasse, clôture, entretien." },
            { title: "Création et entretien séparés", description: "Ce ne sont pas les mêmes clients : un projet de création ponctuel d'un côté, un contrat d'entretien régulier de l'autre." },
            { title: "Le crédit d'impôt", description: "L'entretien de jardin ouvre droit à un crédit d'impôt de 50 % pour les particuliers : un argument à expliquer clairement, avec les conditions." },
        ],
        pages: ["Accueil avec réalisations", "Création et aménagement", "Entretien et contrats annuels", "Élagage et abattage", "Galerie avant / après", "Demande de devis"],
        example: { headline: "Paysagiste à Orléans : création et entretien de jardins", subline: "De la conception à l'entretien, avec un seul interlocuteur.", cta: "Voir nos réalisations", proof: "Entretien de jardin éligible au crédit d'impôt de 50 % (selon conditions)" },
        faq: [
            { question: "Combien de photos faut-il pour un site de paysagiste ?", answer: "Dix à vingt bons projets suffisent pour démarrer, idéalement avec une photo avant et une photo après. Mieux vaut peu de photos réussies que beaucoup de photos floues." },
            { question: "Un site peut-il m'aider à remplir la basse saison ?", answer: "Oui, en mettant en avant les contrats d'entretien et les travaux d'hiver (taille, élagage, plantations) au bon moment de l'année." },
        ],
    },
    {
        slug: "menuisier",
        name: "menuisier",
        namePlural: "menuisiers",
        intro: "Fenêtres, portes, escaliers, agencement sur mesure : un menuisier vend à la fois un savoir-faire et un produit. Votre site doit montrer la qualité de vos finitions et expliquer clairement ce que vous posez.",
        searches: ["menuisier Orléans", "pose fenêtre PVC Loiret", "escalier sur mesure", "dressing sur mesure prix"],
        needs: [
            { title: "Le sur-mesure en images", description: "Escaliers, dressings, cuisines : des photos détaillées qui montrent les finitions et les essences de bois." },
            { title: "Pose ou fabrication", description: "Distinguer la pose de menuiseries (fenêtres, portes, volets) de la fabrication sur mesure en atelier, car les clients et les budgets diffèrent." },
            { title: "Les aides à la rénovation", description: "Le remplacement de fenêtres peut ouvrir droit à des aides selon les cas : une page qui l'explique attire des clients qualifiés." },
        ],
        pages: ["Accueil", "Fenêtres, portes et volets", "Agencement sur mesure", "Escaliers", "L'atelier", "Demande de devis"],
        example: { headline: "Menuisier à Orléans : fabrication et pose sur mesure", subline: "Fenêtres, escaliers et agencements fabriqués dans notre atelier.", cta: "Parler de votre projet", proof: "Fabrication dans notre atelier du Loiret" },
        faq: [
            { question: "Faut-il un catalogue en ligne pour un menuisier ?", answer: "Pas forcément. Pour la pose de fenêtres, quelques gammes présentées clairement suffisent ; pour le sur-mesure, ce sont vos réalisations qui convainquent." },
            { question: "Le site peut-il mettre en avant mon atelier ?", answer: "Oui, une page sur l'atelier, les machines et les essences utilisées montre que vous fabriquez vous-même, ce qui vous distingue des simples poseurs." },
        ],
    },
    {
        slug: "peintre-en-batiment",
        name: "peintre en bâtiment",
        namePlural: "peintres en bâtiment",
        intro: "Peinture intérieure, ravalement de façade, revêtements : les clients d'un peintre veulent savoir si le travail sera propre et dans les délais. Votre site doit le prouver avec des chantiers réels et des avis.",
        searches: ["peintre en bâtiment Orléans", "ravalement façade Loiret", "peintre intérieur prix m2", "entreprise peinture Orléans"],
        needs: [
            { title: "La preuve par les chantiers", description: "Avant / après, détails des finitions, protection des lieux pendant les travaux : c'est ce qui rassure un particulier." },
            { title: "Particuliers et professionnels", description: "Logements, bureaux, commerces, copropriétés : une page par type de client si vous travaillez pour les deux." },
            { title: "Des avis visibles", description: "Les avis Google affichés sur le site renforcent la confiance au moment de la demande de devis." },
        ],
        pages: ["Accueil", "Peinture intérieure", "Ravalement de façade", "Revêtements sols et murs", "Réalisations", "Demande de devis"],
        example: { headline: "Peintre en bâtiment à Orléans", subline: "Intérieur, façade et revêtements. Chantier propre, délais tenus.", cta: "Demander un devis", proof: "Particuliers, commerces et copropriétés" },
        faq: [
            { question: "Faut-il afficher un prix au mètre carré ?", answer: "Une fourchette indicative aide le client à se situer, à condition d'expliquer ce qui la fait varier (état des supports, hauteur, nombre de couches)." },
            { question: "Un site aide-t-il à décrocher des chantiers de copropriété ?", answer: "Oui, une page dédiée avec vos références et vos assurances facilite le travail des syndics, qui comparent plusieurs entreprises." },
        ],
    },
];

export function getMetier(slug: string) {
    return metiers.find((metier) => metier.slug === slug);
}
