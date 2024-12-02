'use client';

import styles from './selectedProjects.module.scss';
import { CustomImage } from '@/components/ui/CustomImage';
import Link from 'next/link';
import { useCursor } from '@/components/ui/cursor/CursorContext';
import projects from '@/lib/projects.json';
import { useEffect } from 'react';

export default function SelectedProjects() {
    const selectedProjects          = projects.slice(0, 3);
    const { setIsProjectHovered }   = useCursor();

    /* clean the cursor when unmount */
    useEffect(() => {
        return () => {
            setIsProjectHovered(false);
        };
    }, [setIsProjectHovered]);

    return (
        <section id="projects" className={styles['projects']}>
            <h2 className="subtitle">
                Projets
            </h2>
            <div className={styles['projects-container']}>
                <div className={styles['projects--large']}>
                    <Link 
                        href={`/work/${selectedProjects[0].slug}`}
                        onMouseEnter={() => {setIsProjectHovered(true);}}
                        onMouseLeave={() => {setIsProjectHovered(false);}}
                        className={styles['project']}>
                        <CustomImage
                            src={selectedProjects[0].image_home}
                            width={1900}
                            height={1140}
                            alt={selectedProjects[0].name}
                            className={styles['project__illustration']}
                        />
                        <h3>{selectedProjects[0].name}</h3>
                    </Link>
                </div>
                <div className={styles['projects--small']}>
                    {selectedProjects.slice(1).map((project) => (
                        <div key={project.id}>
                            <Link 
                                href={`/work/${project.slug}`}
                                onMouseEnter={() => {setIsProjectHovered(true);}}
                                onMouseLeave={() => {setIsProjectHovered(false);}}
                                className={styles['project']}>
                                <CustomImage
                                    src={project.image_home}
                                    width={1900}
                                    height={1140}
                                    alt={project.name}
                                    className={styles['project__illustration']}
                                />
                                <h3>{project.name}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}