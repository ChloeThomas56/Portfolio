import { CustomImage } from '@/components/ui/CustomImage';
import { CustomLink } from '@/components/ui/CustomLink';
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
}

interface ProjectProps {
    project: Project;
    previousProject: Project | null;
    nextProject: Project | null;
}

export default function Project({ project, previousProject, nextProject }: ProjectProps) {
    return (
        <>
            <h1 className="title">
                {project.name}
            </h1>
            <section className="project__info">
                <div className="project__technical-data">
                    <div>
                        <h5>Année</h5>
                        <span>{project.year}</span>
                    </div>
                    <div>
                        <h5>Outils</h5>
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
                {project.images.map((img) => (
                    <CustomImage
                        key={img}
                        src={img}
                        width={1900}
                        height={1140}
                        className="project__image"
                        alt={`illustration du site ${project.name}`}
                    />
                ))}
            </section>
            <div className="project__navigation">
                {previousProject ? 
                    (
                        <Link href={`/work/${previousProject.slug}`} scroll={false}>
                            Préc.
                        </Link>
                    ) : (
                        <span>Préc.</span>
                    )
                }
                /
                {nextProject ? 
                    (
                        <Link href={nextProject ? `/work/${nextProject.slug}` : ''} scroll={false}>
                            Suiv.
                        </Link>
                    ) : (
                        <span>Suiv.</span>
                    )
                }
            </div>
        </>
    );
}