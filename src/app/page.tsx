'use client';

import styles from './home.module.scss';
import { MdArrowOutward } from 'react-icons/md';
import { CustomLink } from '@/components/ui/customLink/CustomLink';
import ProjectsGallery from '@/components/projects/projectsGallery/ProjectsGallery';
import { useEffect } from 'react';
import { useSmoothScrollingControl } from '@/components/ui/SmoothScrolling';

export default function Page() {
    const lenis = useSmoothScrollingControl(); // Accéder à l'instance de Lenis

    useEffect(() => {
        lenis?.stop();
        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            lenis?.start();
        }, 1250);

        return () => clearTimeout(timer);
    }, [lenis]);

    return (
        <div className={`page ${styles['home-page']}`}>
            <section className={styles['home__hero']}>
                <div>
                    <h1>
                        Chloé Thomas
                    </h1>
                    <h2 className="subtitle">
                        Développeuse web freelance
                    </h2>
                    <p className={styles['home__description']}>
                        Bienvenue sur mon portfolio&nbsp;! Je suis Chloé Thomas, développeuse web freelance passionnée par la création et le design. Je conçois des interfaces et solutions web qui répondent aux besoins des utilisateurs. Découvrez mes projets et explorons ensemble toutes les possibilités pour donner vie à vos idées.
                    </p>
                    <CustomLink href="/about" className="link hover-underline">
                        <MdArrowOutward />
                        En savoir plus
                    </CustomLink>
                </div>
            </section>
            <section className={styles['home__projects']}>
                <ProjectsGallery />
            </section>
            <div className={styles['home__hidden-projects-container']} />
        </div>
    );
}
