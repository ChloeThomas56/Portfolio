import styles from './about.module.scss';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chloé Thomas | À propos',
}

export default function Page() {
    
    return (
        <div className="page">
            <h1>
                À propos
            </h1>
            <section className={styles['about__introduction']}>
                <div className={styles['about__introduction__text']}>
                    <p>
                        Attirée par le monde du digital et le développement web, j&#39;ai été formée à l&#39;école O&#39;clock, après une première carrière de traductrice. J&#39;ai ensuite rejoint la start-up Sports-Village, où j&#39;ai contribué à un projet ambitieux. Désormais freelance, je mets mes compétences à votre service pour concrétiser vos projets web.
                    </p>
                    <p>
                        Je m&#39;attache à créer des interfaces soignées, fonctionnelles et intuitives, en accordant une attention particulière à chaque détail pour offrir une expérience utilisateur fluide et agréable. En parallèle, je travaille également sur la partie &quot;cachée&quot; d&#39;un site, celle qui gère les données et le fonctionnement interne. Je suis ainsi en mesure de concevoir des solutions web de A à Z.
                    </p>
                </div>
                <div className={styles['about__introduction__illustration']}>
                    <div>
                        <Image
                            src="/images/portrait.webp"
                            width={1000}
                            height={1000}
                            className={styles['about__img']}
                            alt="Portrait de Chloé Thomas"
                            priority
                        />
                    </div>
                </div>
            </section>
            <section className={styles['about__steps']}>
                <h3 className="subtitle">
                    Expertise
                </h3>
                <ol className={styles['about__steps__list']}>
                    <li>
                        <h4>Conception graphique</h4>
                        <p>
                            Je crée des maquettes qui reflètent l&#39;identité de votre marque, tout en étant esthétiques et fonctionnelles sur tous les types d&#39;appareils. Ensemble, nous imaginons un design centré sur l&#39;expérience utilisateur et l&#39;impact visuel.
                        </p>
                    </li>
                    <li>
                        <h4>Développement sur mesure</h4>
                        <p>
                            Je construis votre site ou application web en fonction de vos besoins et en m&#39;assurant de répondre à toutes vos exigences techniques, que ce soit via des CMS pour une gestion simplifiée ou par des solutions personnalisées.
                        </p>
                    </li>
                    <li>
                        <h4>Optimisation SEO</h4>
                        <p>
                            Je vous aide à améliorer la visibilité de votre site sur les moteurs de recherche en optimisant sa structure, son contenu et ses performances, afin d&#39;assurer un meilleur classement SEO.
                        </p>
                    </li>
                    <li>
                        <h4>Maintenance</h4>
                        <p>
                            Je propose également des services de maintenance et veille à ce que votre site soit toujours à jour, sécurisé et performant, afin que vous puissiez vous concentrer sur votre activité sans souci technique.
                        </p>
                    </li>
                </ol>
            </section>
            <section className={styles['about__tools']}>
                <h3 className="subtitle">
                    Mes outils
                </h3>
                <ul className={styles['about__tools-list']}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>React</li>
                    <li>Next</li>
                    <li>Nuxt</li>
                    <li>Gsap</li>
                    <li>Framer motion</li>
                    <li>Figma</li>
                    <li>Wordpress</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                </ul>
            </section>
        </div>
    );
}
