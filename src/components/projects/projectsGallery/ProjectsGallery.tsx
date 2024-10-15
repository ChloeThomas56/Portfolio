'use client';

import styles from './projectsGallery.module.scss';
import projects from '@/lib/projects.json';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useCursor } from '@/components/ui/cursor/CursorContext';
import useWindowSize from '@/hooks/useWindowSize';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ProjectsGallery() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [currentProject, setCurrentProject]           = useState(projects[0]);
    const { isProjectHovered, setIsProjectHovered }     = useCursor();
    const { isDesktop, windowSize }                     = useWindowSize();
    const scaledProjects                                = useRef<HTMLDivElement | null>(null);

    const previousProject = currentProjectIndex > 0 ? projects[currentProjectIndex - 1] : null;
    const nextProject = currentProjectIndex < (projects.length - 1) ? projects[currentProjectIndex + 1] : null;

    const goForward = () => {
        if (!nextProject) return
    
        setCurrentProjectIndex(currentProjectIndex + 1);
        setCurrentProject(nextProject);
    }

    const goBack = () => {
        if (!previousProject) return

        setCurrentProjectIndex(currentProjectIndex - 1);
        setCurrentProject(previousProject);
    }
    

    /* clean the cursor when unmount */
    useEffect(() => {
        return () => {
            setIsProjectHovered(false);
        };
    }, [setIsProjectHovered]);


    /* scaling animation */
    useEffect(() => {
        window.scrollTo(0, 0);

        let animation: gsap.core.Tween | null = null;

        if (scaledProjects.current && isDesktop) {
            gsap.registerPlugin(ScrollTrigger);

            const rect = scaledProjects.current.getBoundingClientRect();
            const start = rect.top

            animation = gsap.fromTo(scaledProjects.current, 
                {
                    width: "40%",
                }, 
                {
                    width: "80%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: scaledProjects.current,
                        start: "top +"+start,
                        end: "+=800",
                        scrub: 0.5,
                    }
                }
            );

            return () => {
                if (animation) {
                    animation.kill();
                    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
                }
            }
        }
    }, [isDesktop, windowSize]);

    return (
        <div ref={scaledProjects} className={styles['projects-gallery-container']}>
            <div className={styles['projects-gallery__header']}>
                <div>
                    <h3 className={styles['projects-gallery__header__title']}>
                        Projets
                    </h3>
                    <div className={styles['projects-gallery__arrows']}>
                        <button disabled={!previousProject}>
                            <MdArrowBack className={styles['projects-gallery__arrow']} onClick={goBack} />
                        </button>
                        <button disabled={!nextProject}>
                            <MdArrowForward className={styles['projects-gallery__arrow']} onClick={goForward} />
                        </button>
                    </div>
                </div>
                <span className={styles['projects-gallery__header__scroll']}>
                    (scroll &#8595;)
                </span>
            </div>
            <div className={clsx(styles['projects-gallery'])}>
                {isDesktop && (
                    <AnimatePresence>
                        {currentProject && isProjectHovered && (
                            <motion.h5
                                key="project-title" 
                                className={`${styles['projects-gallery__title']} ${styles['projects-gallery__title--desktop']}`}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100%" }}
                                transition={{ ease: "linear", duration: 0.3 }}>
                                <span>0{currentProjectIndex + 1}</span>
                                {currentProject.name}
                            </motion.h5>
                        )}
                    </AnimatePresence>
                )}
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
                                    src={project.images[0]}
                                    width={1850}
                                    height={1110}
                                    className={styles['projects-gallery__item__img']}
                                    alt={project.name}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {currentProject && (
                <h5 className={`${styles['projects-gallery__title']} ${styles['projects-gallery__title--mobile']}`}>
                    <span>0{currentProjectIndex + 1}</span>
                    {currentProject.name}
                </h5>
            )}
        </div>
    );
}