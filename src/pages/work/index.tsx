import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import projects from '@/lib/projects.json';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import Image from 'next/image';

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