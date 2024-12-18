import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import { CustomImage } from '@/components/ui/CustomImage';

export default function About() {
    return (
        <>
            <Head>
                <title>Chloé Thomas | À propos</title>
            </Head>
            <PageTransition>
                <div className="wrapper">
                    <h1 className="title">
                        À propos
                    </h1>
                    <section className="grid">
                        <div>
                            <div className="about__illustration-container">
                                <CustomImage
                                    src="/images/portrait.webp"
                                    width={1000}
                                    height={1000}
                                    alt="Portrait de Chloé Thomas"
                                />
                            </div>
                        </div>
                        <div className="about__introduction">
                            <p>
                                Attirée par le monde du digital et le développement web, j&#39;ai été formée à l&#39;école O&#39;clock, après une première carrière de traductrice. J&#39;ai ensuite rejoint la start-up Sports-Village, où j&#39;ai contribué à un projet ambitieux. Désormais freelance, je mets mes compétences à votre service pour concrétiser vos projets web.
                            </p>
                            <p>
                                Je m&#39;attache à créer des interfaces soignées, fonctionnelles et intuitives, en accordant une attention particulière à chaque détail pour offrir une expérience utilisateur fluide et agréable. En parallèle, je travaille également sur la partie &quot;cachée&quot; d&#39;un site, celle qui gère les données et le fonctionnement interne. Je suis ainsi en mesure de concevoir des solutions web de A à Z.
                            </p>
                        </div>
                    </section>
                    <section className="about__steps">
                        <h2 className="subtitle">
                            Expertise
                        </h2>
                        <ol className="about__steps-list">
                            <li className="grid">
                                <h3>Conception graphique</h3>
                                <p>
                                    Je crée des maquettes qui reflètent l&#39;identité de votre marque, tout en étant esthétiques et adaptées à tous les types d&#39;appareils. Ensemble, nous imaginons un design centré sur l&#39;expérience utilisateur et l&#39;impact visuel.
                                </p>
                            </li>
                            <li className="grid">
                                <h3>Développement sur mesure</h3>
                                <p>
                                    Je construis votre site ou application web en fonction de vos besoins et en m&#39;assurant de répondre à toutes vos exigences techniques, que ce soit via des CMS pour une gestion simplifiée ou par des solutions personnalisées.
                                </p>
                            </li>
                            <li className="grid">
                                <h3>Optimisation SEO</h3>
                                <p>
                                    Je vous aide à améliorer la visibilité de votre site sur les moteurs de recherche, en optimisant sa structure, son contenu et ses performances, afin d&#39;assurer un meilleur classement SEO.
                                </p>
                            </li>
                            <li className="grid">
                                <h3>Maintenance</h3>
                                <p>
                                    Je propose également des services de maintenance et veille à ce que votre site soit toujours à jour, sécurisé et performant, pour que vous puissiez vous concentrer sur votre activité sans souci technique.
                                </p>
                            </li>
                        </ol>
                    </section>
                    <section className="about__tools">
                        <h2 className="subtitle">
                            Mes outils
                        </h2>
                        <ul className="about__tools-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>React</li>
                            <li>Next</li>
                            <li>Nuxt</li>
                            <li>GSAP</li>
                            <li>Framer Motion</li>
                            <li>Figma</li>
                            <li>Wordpress</li>
                            <li>PHP</li>
                            <li>Laravel</li>
                        </ul>
                    </section>
                </div>
            </PageTransition>
        </>
    );
}
