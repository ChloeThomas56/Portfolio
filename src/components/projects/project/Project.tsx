'use client';

import styles from './project.module.scss';
import { CustomImage } from '@/components/ui/customImage/CustomImage';
import clsx from 'clsx';
import { CustomLink } from '@/components/ui/customLink/CustomLink';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

interface Project {
    id: number;
    name: string;
    slug: string;
    text: string;
    images: string[];
    year: string;
    stack: string;
    url: string;
}

interface ProjectProps {
    project: Project;
    previousProject: Project | null;
    nextProject: Project | null;
}

export default function Project({ project, previousProject, nextProject }: ProjectProps) {
    const htmlContent = project.text

    return (
        <motion.div
            key="project"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}>
            <div className="page">
                <h1>
                    {project.name}
                </h1>
                <section className={styles['project__info']}>
                    <div className={styles['project__info__technical-data']}>
                        <div>
                            <h5>Année</h5>
                            <span>{project.year}</span>
                        </div>
                        <div>
                            <h5>Outils</h5>
                            <span>{project.stack}</span>
                        </div>
                    </div>
                    <div className={styles['project__info__description']} >
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                        {project.url && project.url.length > 0 && (
                        <div className={styles['project__info__url-container']}>
                            <CustomLink href={project.url} newTab className="link hover-underline">
                                <MdArrowOutward />
                                Visiter le site
                            </CustomLink>
                        </div>
                        )}
                    </div>
                </section>
                <section className={`${styles['project__images']}`}>
                    {project.images.map((img, index) => (
                        <CustomImage
                            key={img}
                            src={img}
                            width={1850}
                            height={1110}
                            className={styles['project__img']}
                            alt={`illustration du site ${project.name}`}
                        />
                    ))}
                </section>
                <div className={styles['project__navigation']}>
                    <CustomLink 
                        href={previousProject ? `/work/${previousProject.slug}` : ''}
                        className={clsx('hover-underline', styles['project__navigation__item'], {[styles['project__navigation__item--disabled']]: !previousProject})}>
                        Préc.
                    </CustomLink>
                    /
                    <CustomLink 
                        href={nextProject ? `/work/${nextProject.slug}` : ''}
                        className={clsx('hover-underline', styles['project__navigation__item'], {[styles['project__navigation__item--disabled']]: !nextProject})}>
                        Suiv.
                    </CustomLink>
                </div>
            </div>
        </motion.div>
    );
}