import { useState } from 'react';
import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import projects from '@/lib/projects.json';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import { CustomImage } from '@/components/ui/CustomImage/CustomImage';

export default function Work() {
    const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

    return (
        <>
            <Head>
                <title>Chloé Thomas | Projets</title>
            </Head>
            <PageTransition>
                <div className="wrapper">
                    <h1 className="title">
                        Projets
                    </h1>
                    <ol className="projects-list">
                        {projects.map((project) => (
                            <li key={project.id}>
                                <Link 
                                    href={`/work/${project.slug}`} 
                                    scroll={false}
                                    className="projects-list__link"
                                >
                                    <div className="projects-list__illustration--mobile">
                                        <CustomImage
                                            src={project.image_home}
                                            width={1900}
                                            height={1140}
                                            alt={project.name}
                                        />
                                    </div>
                                    <div className="projects-list__details">
                                        <h2>{project.name}</h2>
                                        <span className="projects-list__cta">
                                            <MdArrowOutward />
                                            Voir
                                        </span>
                                    </div>
                                </Link>
                                <div className="projects-list__illustration--desktop">
                                    <CustomImage
                                        src={project.image_home}
                                        width={1900}
                                        height={1140}
                                        alt={project.name}
                                    />
                                </div>
                            </li>
                        ))}
                    </ol>
                    <div className="projects-list__spacer" />
                </div>
            </PageTransition>
        </>
    )
}