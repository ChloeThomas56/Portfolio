'use client';

import styles from './projectsGallery.module.scss';
import projects from '@/lib/projects.json';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { IoTriangleSharp } from "react-icons/io5";
import { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { useCursor } from '@/components/ui/cursor/CursorContext';
import useWindowSize from '@/hooks/useWindowSize';

export default function ProjectsGallery() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [currentProject, setCurrentProject]           = useState(projects[0]);
    const { setIsProjectHovered }                       = useCursor();
    const { isDesktop }                                 = useWindowSize();

    const previousProject = currentProjectIndex > 0 ? projects[currentProjectIndex - 1] : null;
    const nextProject = currentProjectIndex < (projects.length - 1) ? projects[currentProjectIndex + 1] : null;

    const goForward = useCallback(() => {
        if (!nextProject) {
            setCurrentProjectIndex(0);
            setCurrentProject(projects[0]);
        } else {
            setCurrentProjectIndex(currentProjectIndex + 1);
            setCurrentProject(nextProject);
        }
    }, [currentProjectIndex, nextProject]);

    const goBack = () => {
        if (!previousProject) return

        setCurrentProjectIndex(currentProjectIndex - 1);
        setCurrentProject(previousProject);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            goForward();
        }, 5000);

        return () => clearInterval(interval);
    }, [goForward]);

    /* clean the cursor when unmount */
    useEffect(() => {
        return () => {
            setIsProjectHovered(false);
        };
    }, [setIsProjectHovered]);

    return (
        <div className={styles['projects-gallery-container']}>
            <div className={styles['projects-gallery__header']}>
                <h3 className={styles['projects-gallery__header__title']}>
                    Projets
                </h3>
                <div className={styles['projects-gallery__arrows']}>
                    <button 
                        disabled={!previousProject} 
                        aria-label="Projet précédent"
                        onClick={goBack}>
                        <MdArrowBack />
                    </button>
                    <button 
                        disabled={!nextProject}
                        aria-label="Projet suivant"
                        onClick={goForward}>
                        <MdArrowForward />
                    </button>
                </div>
            </div>
            <div className={styles['projects-gallery__titles']}>
                <ul>
                    {projects.map((project, index) => (
                        <li 
                            key={project.id}
                            className={clsx(
                                styles['projects-gallery__title'],
                                styles['projects-gallery__title'],
                                {[styles['projects-gallery__title--active']]: currentProject.id === project.id})}
                                style={!isDesktop ? {transform: `translateY(-${28 * currentProjectIndex}px)`} : {}}>
                            <h4 onClick={() => {
                                setCurrentProject(project);
                                setCurrentProjectIndex(index);
                            }}>
                                {project.name}
                            </h4>
                        </li>
                    ))}
                </ul>
                <span 
                    className={styles['projects-gallery__titles__icon-container']}
                    style={{transform: `translateY(${28 * currentProjectIndex}px)`}}>
                    <IoTriangleSharp />
                </span>
            </div>
            <div className={clsx(styles['projects-gallery'])}>
                <ul className={styles['projects-gallery__inner']}>
                    {projects.map((project, index) => (
                        <li 
                            key={project.id}
                            className={clsx(
                                styles['projects-gallery__item'], 
                                {[styles['projects-gallery__item--active']]: currentProjectIndex === index})}
                            style={{zIndex: currentProjectIndex === index ? "1" : "0"}}>
                            <Link 
                                href={`/work/${project.slug}`}
                                onMouseEnter={() => {isDesktop && setIsProjectHovered(true);}}
                                onMouseLeave={() => {isDesktop && setIsProjectHovered(false);}}>
                                <Image
                                    src={project.image_home}
                                    width={1200}
                                    height={800}
                                    className={styles['projects-gallery__item__img']}
                                    alt={project.name}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}