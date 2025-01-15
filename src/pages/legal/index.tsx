import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import Title from '@/components/ui/Title/Title';
import Link from 'next/link';

export default function Legal() {
    return (
        <>
            <Head>
                <title>Chloé Thomas | Mentions légales</title>
            </Head>
            <PageTransition>
                <div className="wrapper">
                    <Title>
                        Mentions légales
                    </Title>
                    <section className="legal">
                        <article className="list-item">
                            <h2 className="subtitle">
                                Éditeur
                            </h2>
                            <p>
                                Le site&nbsp; 
                                <Link href="/" scroll={false}>
                                    chloethomas.me
                                </Link> 
                                &nbsp;est édité par Chloé Thomas.
                                <br />
                                SIRET&nbsp;: 87760685500030
                                <br />
                                Siège social&nbsp;: 9 Sainte-Suzanne, 56230 Questembert, France
                                <br />
                                Contact&nbsp;:&nbsp;
                                <Link href="mailto:chloe.thomas@netc.fr">
                                    chloe.thomas@netc.fr
                                </Link>
                            </p>
                        </article>
                        <article className="list-item">
                            <h2 className="subtitle">
                                Hébergeur
                            </h2>
                            <p>
                                Le site&nbsp;
                                <Link href="/" scroll={false}>
                                    chloethomas.me
                                </Link> 
                                &nbsp;est hébergé par Vercel Inc.
                                <br />
                                Siège social&nbsp;: 340 S Lemon Ave #4120, Walnut, CA 91789, USA
                                <br />
                                Contact&nbsp;:&nbsp;
                                <Link href="tel:+19513836898">
                                    +1 951-383-6898
                                </Link>
                            </p>
                        </article>
                        <article className="list-item">
                            <h2 className="subtitle">
                                Propriété intellectuelle
                            </h2>
                            <p>
                                L&#39;ensemble des contenus de ce site est la propriété exclusive de Chloé Thomas, sauf indication contraire. Toute reproduction ou représentation totale ou partielle de ce site, sans autorisation expresse, est interdite et constituerait une contrefaçon.
                            </p>
                        </article>
                        <article className="list-item">
                            <h2 className="subtitle">
                                Données personnelles
                            </h2>
                            <p>
                                Ce site ne collecte pas de données personnelles. Les informations fournies par les utilisateurs via le formulaire de contact sont uniquement utilisées pour répondre aux demandes et ne sont pas stockées ni partagées.
                            </p>
                        </article>
                        <article className="list-item">
                            <h2 className="subtitle">
                                Responsabilité
                            </h2>
                            <p>
                                Le site peut contenir des liens vers des sites externes. Nous déclinons toute responsabilité quant au contenu de ces sites et à toute éventuelle conséquence découlant de leur utilisation.
                            </p>
                        </article>
                        <article className="list-item">
                            <h2 className="subtitle">
                                Modification
                            </h2>
                            <p>
                                Nous nous réservons le droit de modifier les présentes mentions légales à tout moment. Il est recommandé de les consulter régulièrement pour prendre connaissance de toute mise à jour.
                            </p>
                        </article>
                    </section>
                </div>
            </PageTransition>
        </>
    );
}
