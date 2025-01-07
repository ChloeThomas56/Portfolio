import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import Image from 'next/image';

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
                    <section className="about">
                        <div className="about__illustration">
                            <Image
                                src="/images/portrait.webp"
                                width={1000}
                                height={1000}
                                alt="Portrait de Chloé Thomas"
                                priority
                            />
                        </div>
                        <div className="about__introduction">
                            <p>
                                Attirée par le monde du numérique et le développement web, j&#39;ai été formée à l&#39;école O&#39;clock, après une première carrière de traductrice. J&#39;ai ensuite rejoint la start-up Sports-Village, où j&#39;ai contribué à un projet ambitieux durant deux ans. Je suis actuellement disponible pour mettre mes compétences au service de vos projets web, que ce soit pour des missions ponctuelles ou de plus grande envergure.
                            </p>
                            <p>
                                Je m&#39;attache à créer des interfaces soignées, fonctionnelles et intuitives, en accordant une attention particulière à chaque détail. Je développe des sites web sur mesure à l&#39;aide de frameworks modernes ou via des CMS pour une gestion simplifiée, offrant ainsi une solution adaptée à chaque projet. Mon expérience en back-end complète mon expertise en front-end, ce qui me permet de prendre en charge des projets dans leur globalité.
                            </p>
                            <div className="about__tools">
                                <h2>Mes outils</h2>
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
                            </div>
                        </div>
                    </section>
                </div>
            </PageTransition>
        </>
    );
}
