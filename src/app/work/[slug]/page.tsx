import projects from '@/lib/projects.json';
import { notFound } from 'next/navigation';
import Project from '@/components/projects/project/Project';

function getProject(slug: string) {
    const project = projects.find((p) => p.slug === slug)

    if (!project)
        notFound();

    return project;
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
    const project = getProject(params.slug);

    return {
        title: `Chloé Thomas | ${project.name}`
    }
}


export default function Page({ params }: { params: { slug: string } }) {
    const project = getProject(params.slug);

    const currentIndex = projects.findIndex((p) => p.slug === project.slug);
    const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < (projects.length - 1) ? projects[currentIndex + 1] : null;

    return (
        <>
            <Project project={project} previousProject={previousProject} nextProject={nextProject} />
        </>
    );
}
