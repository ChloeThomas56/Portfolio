import { GetStaticPaths, GetStaticProps } from 'next';
import projects from '@/lib/projects.json';
import Head from 'next/head';
import { useEffect } from 'react';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';
import { CustomImage } from '@/components/ui/CustomImage/CustomImage';
import Link from 'next/link';

type Props = {
    project: typeof projects[0] | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = projects.map((project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const project = projects.find((p) => p.slug === params?.slug);

    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            project,
        },
    };
}

export default function ProjectPage({ project }: Props) {
    if (!project) return null;

    useEffect(() => {
        document.documentElement.style.setProperty('--shape-color', project?.color);
        document.documentElement.style.setProperty('--shape-shadow-color', project?.box_shadow);

        // Nettoie la variable lorsque le composant se démonte
        return () => {
            document.documentElement.style.removeProperty('--shape-color');
            document.documentElement.style.removeProperty('--shape-shadow-color');
        };
    }, [project]);

    const currentIndex = projects.findIndex((p) => p.slug === project.slug);
    const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < (projects.length - 1) ? projects[currentIndex + 1] : null;

    const title = `Chloé Thomas | ${project.name}`

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <PageTransition>
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
            </PageTransition>
        </>
    );
}
