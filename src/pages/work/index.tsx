import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import projects from '@/lib/projects.json';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import { CustomImage } from '@/components/ui/CustomImage/CustomImage';

export default function Work() {

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
                        <li className="projects--large">
                            <Link 
                                href={`/work/${projects[0].slug}`}
                                scroll={false}
                                className="projects__item">
                                <CustomImage
                                    src={projects[0].image_home}
                                    width={1900}
                                    height={1140}
                                    alt={projects[0].name}
                                />
                                <div className="projects__item-details">
                                    <h2>{projects[0].name}</h2>
                                    <span>
                                        <MdArrowOutward />
                                        Voir
                                    </span>
                                </div>
                            </Link>
                        </li>
                        {projects.slice(1).map((project) => (
                            <li key={project.id} className="projects--small">
                                <Link 
                                    href={`/work/${project.slug}`}
                                    scroll={false}
                                    className="projects__item">
                                    <CustomImage
                                        src={project.image_home}
                                        width={1900}
                                        height={1140}
                                        alt={project.name}
                                    />
                                    <div className="projects__item-details">
                                        <h2>{project.name}</h2>
                                        <span>
                                            <MdArrowOutward />
                                            Voir
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ol>
                    <div className="projects__spacer" />
                </div>
            </PageTransition>
        </>
    )
}