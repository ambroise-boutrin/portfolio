import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
    title: 'Mentions Légales | Ambroise Boutrin',
    description: 'Mentions légales du site ambroise-boutrin.fr : éditeur, hébergement, propriété intellectuelle, données personnelles et cookies.',
    path: '/mentions-legales',
});

export default function MentionsLegales() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-12">Mentions Légales</h1>

                <section className="mb-12 space-y-4">
                    <h2 className="text-2xl font-bold border-b border-[var(--border-color)] pb-4 mb-6">1. Édition du site</h2>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet <strong className="text-[var(--foreground)]">ambroise-boutrin.fr</strong> l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]/80">
                        <li><strong className="text-[var(--foreground)]">Propriétaire du site :</strong> Ambroise Boutrin</li>
                        <li><strong className="text-[var(--foreground)]">Statut :</strong> Entrepreneur individuel</li>
                        <li><strong className="text-[var(--foreground)]">SIRET :</strong> 101 033 504 00016</li>
                        <li><strong className="text-[var(--foreground)]">TVA :</strong> TVA non applicable, art. 293 B du CGI</li>
                        <li><strong className="text-[var(--foreground)]">Directeur de la publication :</strong> Ambroise Boutrin</li>
                        <li><strong className="text-[var(--foreground)]">Contact :</strong> contact@ambroise-boutrin.fr</li>
                        <li><strong className="text-[var(--foreground)]">Téléphone :</strong> 07 59 87 83 34</li>
                        <li><strong className="text-[var(--foreground)]">Adresse :</strong> 1 rue Saint-Martin du Mail, 45000 Orléans, France</li>
                    </ul>
                </section>

                <section className="mb-12 space-y-4">
                    <h2 className="text-2xl font-bold border-b border-[var(--border-color)] pb-4 mb-6">2. Hébergement</h2>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        Le site est hébergé par :<br />
                        <strong className="text-[var(--foreground)]">Vercel Inc.</strong><br />
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789<br />
                        États-Unis<br />
                        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">https://vercel.com</a>
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h2 className="text-2xl font-bold border-b border-[var(--border-color)] pb-4 mb-6">3. Propriété intellectuelle</h2>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        <strong className="text-[var(--foreground)]">Ambroise Boutrin</strong> est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
                    </p>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de <strong className="text-[var(--foreground)]">Ambroise Boutrin</strong>.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h2 className="text-2xl font-bold border-b border-[var(--border-color)] pb-4 mb-6">4. Données personnelles et formulaire de contact</h2>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        Le site dispose d’un formulaire de contact qui collecte les informations suivantes : <strong className="text-[var(--foreground)]">nom</strong>, <strong className="text-[var(--foreground)]">adresse email</strong> et <strong className="text-[var(--foreground)]">message</strong>. Ces données sont transmises par email via le service <strong className="text-[var(--foreground)]">Resend</strong> et sont utilisées uniquement pour répondre aux sollicitations de l’utilisateur.
                    </p>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        Aucune donnée personnelle n’est stockée en base de données. Les informations collectées ne sont ni revendues ni transmises à des tiers.
                    </p>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi « Informatique et Libertés », vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez : <a href="mailto:contact@ambroise-boutrin.fr" className="underline hover:opacity-70 transition-opacity">contact@ambroise-boutrin.fr</a>.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h2 className="text-2xl font-bold border-b border-[var(--border-color)] pb-4 mb-6">5. Cookies et mesure d’audience</h2>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        Lors de votre première visite, un bandeau vous demande votre accord. Aucun outil de mesure n’est chargé tant que vous ne l’avez pas accepté.
                    </p>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        Après acceptation, <strong className="text-[var(--foreground)]">Google Tag Manager</strong> et <strong className="text-[var(--foreground)]">Vercel Analytics</strong> sont chargés pour la mesure d’audience. Si vous refusez, aucun de ces outils n’est chargé.
                    </p>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        Vous pouvez retirer ou modifier votre choix à tout moment via le lien <strong className="text-[var(--foreground)]">« Gérer les cookies »</strong> en bas de page.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h2 className="text-2xl font-bold border-b border-[var(--border-color)] pb-4 mb-6">6. Responsabilité</h2>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        Le propriétaire du site s’efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                    </p>
                </section>

                <div className="mt-20 pt-10 border-t border-[var(--border-color)] text-center text-[var(--text-secondary)] text-sm">
                    <p>Dernière mise à jour : octobre 2026</p>
                </div>
            </div>
        </main>
    );
}
