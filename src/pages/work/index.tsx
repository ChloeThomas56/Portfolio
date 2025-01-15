import { useEffect } from 'react';
import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import Title from '@/components/ui/Title/Title';
import projects from '@/lib/projects.json';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import Image from 'next/image';

export default function Work() {
    useEffect(() => {
        document.documentElement.style.setProperty('--background-color', '#fff9ef');
        document.documentElement.style.setProperty('--shape-color', '#f4e7c1');
        document.documentElement.style.setProperty('--shape-shadow-color', '#d7cca9');

        return () => {
            document.documentElement.style.removeProperty('--background-color');
            document.documentElement.style.removeProperty('--shape-color');
            document.documentElement.style.removeProperty('--shape-shadow-color');
        }; 
    
    }, []);

    return (
        <>
            <Head>
                <title>Chloé Thomas | Projets</title>
            </Head>
            <PageTransition>
                <div className="wrapper">
                    <Title>
                        Projets
                    </Title>
                    <ol className="projects-list">
                        {projects.map((project) => (
                            <li key={project.id}>
                                <Link 
                                    href={`/work/${project.slug}`}
                                    scroll={false}
                                    className="list-item projects-list__item">
                                    <div className="projects-list__item-details">
                                        <h2 className="subtitle">
                                            {project.name}
                                        </h2>
                                        <span>
                                            <MdArrowOutward />
                                            Voir
                                        </span>
                                    </div>
                                    <div className="projects-list__item-illustration">
                                        <Image
                                            src={project.image_home}
                                            width={1900}
                                            height={1140}
                                            alt={project.name}
                                            priority
                                        />
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ol>
                </div>
            </PageTransition>
        </>
    )
}