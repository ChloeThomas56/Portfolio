import type { Metadata, ResolvingMetadata } from 'next';
import projects from '@/lib/projects.json';
import { notFound } from 'next/navigation';
import Project from '@/components/projects/project/Project';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
    const project = projects.find((p) => p.slug === slug)

    if (!project)
        notFound();

    return project;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const project = getProject(slug);
   
    return { title: `Chloé Thomas | ${project.name}` }
}

export default async function Page({ params }: Props) {
    const { slug } = await params
    const project = getProject(slug);

    const currentIndex = projects.findIndex((p) => p.slug === project.slug);
    const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < (projects.length - 1) ? projects[currentIndex + 1] : null;

    return (
        <div className="page">
            <Project project={project} previousProject={previousProject} nextProject={nextProject} />
        </div>
    );
}
