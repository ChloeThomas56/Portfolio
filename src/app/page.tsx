'use client';

import styles from './home.module.scss';
import { MdArrowOutward } from 'react-icons/md';
import { CustomLink } from '@/components/ui/customLink/CustomLink';
import ProjectsGallery from '@/components/projects/projectsGallery/ProjectsGallery';
import { Metadata } from 'next';
import { useEffect } from 'react';

export default function Page() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
