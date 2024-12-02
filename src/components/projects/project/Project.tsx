import styles from './project.module.scss';
import { CustomImage } from '@/components/ui/CustomImage';
import { CustomLink } from '@/components/ui/CustomLink';
import Link from 'next/link';
import WordsReveal from '@/components/ui/animations/WordsReveal';

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
                <WordsReveal text={project.name} />
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
                    <p>{project.text}</p>
                    {project.url && project.url.length > 0 && (
                        <div className={styles['project__info__url-container']}>
                            <CustomLink href={project.url} target="_blank" rel="noopener noreferrer">
                                Visiter le site
                            </CustomLink>
                        </div>
                    )}
                </div>
            </section>
            <section className={`${styles['project__images']}`}>
                {project.images.map((img) => (
                    <CustomImage
                        key={img}
                        src={img}
                        width={1900}
                        height={1140}
                        className={styles['project__img']}
                        alt={`illustration du site ${project.name}`}
                    />
                ))}
            </section>
            <div className={styles['project__navigation']}>
                {previousProject ? 
                    (
                        <Link href={`/work/${previousProject.slug}`}>
                            Préc.
                        </Link>
                    ) : (
                        <span>Préc.</span>
                    )
                }
                /
                {nextProject ? 
                    (
                        <Link href={nextProject ? `/work/${nextProject.slug}` : ''}>
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