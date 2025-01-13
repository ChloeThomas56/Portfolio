import { useEffect } from 'react';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
    id: number;
    name: string;
    slug: string;
    text: string;
    images: string[];
    year: string;
    stack: string;
    url: string;
    background: string;
    color: string;
    shadow: string;
}

interface ProjectProps {
    project: Project;
    previousProject: Project | null;
    nextProject: Project | null;
}

export default function Project({ project, previousProject, nextProject }: ProjectProps) {

    useEffect(() => {
        document.documentElement.style.setProperty('--background-color', project?.background);
        document.documentElement.style.setProperty('--shape-color', project?.color);
        document.documentElement.style.setProperty('--shape-shadow-color', project?.shadow);

        return () => {
            document.documentElement.style.removeProperty('--background-color');
            document.documentElement.style.removeProperty('--shape-color');
            document.documentElement.style.removeProperty('--shape-shadow-color');
        }; 

    }, [project]);

    return (
        <div className="wrapper">
            <h1 className="title">
                {project.name}
            </h1>
            <section className="project__info">
                <div className="project__technical-data">
                    <div>
                        <span className="project__technical-data-label">
                            Année
                        </span>
                        <span>{project.year}</span>
                    </div>
                    <div>
                        <span className="project__technical-data-label">
                            Outils
                        </span>
                        <span>{project.stack}</span>
                    </div>
                </div>
                <div className="project__description" >
                    <p>{project.text}</p>
                    {project.url && project.url.length > 0 && (
                        <div className="project__url-container">
                            <CustomLink href={project.url} target="_blank" rel="noopener noreferrer">
                                Visiter le site
                            </CustomLink>
                        </div>
                    )}
                </div>
            </section>
            <section className="project__images">
                {project.images.map((img, index) => (
                    <Image
                        key={`${img}${index}`}
                        src={img}
                        width={1900}
                        height={1140}
                        className="project__image"
                        alt={`illustration du site ${project.name}`}
                        priority
                    />
                ))}
            </section>
            <div className="project__navigation">
                {previousProject && 
                    (
                        <Link 
                            href={`/work/${previousProject.slug}`} scroll={false}
                            className="project__navigation--backward">
                            Précédent
                        </Link>
                    ) 
                }
                {nextProject &&
                    (
                        <Link 
                            href={`/work/${nextProject.slug}`} scroll={false}
                            className="project__navigation--forward">
                            Suivant
                        </Link>
                    )
                }
            </div>
        </div>
    )
}