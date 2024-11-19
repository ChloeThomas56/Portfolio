import styles from './home.module.scss';
import { MdArrowOutward } from 'react-icons/md';
import { TfiWorld } from "react-icons/tfi";
import { CustomLink } from '@/components/ui/customLink/CustomLink';
import ProjectsGallery from '@/components/projects/projectsGallery/ProjectsGallery';

export default function Page() {
    return (
        <div className={`page ${styles['home']}`}>
            <section className={styles['home__content']}>
                <h1>
                    Chloé Thomas
                </h1>
                <h2 className="subtitle">
                    Développeuse web freelance
                </h2>
                <p className={styles['home__description']}>
                    Bienvenue sur mon portfolio&nbsp;! Je suis Chloé Thomas, développeuse web freelance passionnée par la création et le design. Je conçois des interfaces et solutions web qui répondent aux besoins des utilisateurs. Découvrez mes projets et explorons ensemble toutes les possibilités de donner vie à vos idées.
                </p>
                <div className={styles['home__infos']}>
                    <div className={styles['home__infos__location']}>
                        <TfiWorld />
                        Basée à Vannes
                    </div>
                    <CustomLink href="/about" className="link hover-underline">
                        <MdArrowOutward />
                        En savoir plus
                    </CustomLink>
                </div>
            </section>
            <section className={styles['home__projects']}>
                <ProjectsGallery />
            </section>
        </div>
    );
}
