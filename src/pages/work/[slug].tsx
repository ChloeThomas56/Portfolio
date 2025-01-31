import { GetStaticPaths, GetStaticProps } from 'next';
import projects from '@/lib/projects.json';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Project from '@/components/Project/Project';

type Props = {
    project: typeof projects[0] | null;
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    if (!locales) {
        throw new Error('Locales are not defined in getStaticPaths');
    }

    const paths = locales.flatMap((locale) =>
        projects.map((project) => ({
            params: { slug: project.slug },
            locale,
        }))
    );

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
    const router = useRouter();
    
    if (!project) return null;

    const currentIndex = projects.findIndex((p) => p.slug === project.slug);
    const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < (projects.length - 1) ? projects[currentIndex + 1] : null;

    const title = `Chloé Thomas | ${project.name}`

    return (
        <>
            <Head>
                <title>{title}</title>
                {router.locales?.map((locale) => (
                    <link 
                        key={locale} 
                        rel="alternate" 
                        hrefLang={locale} 
                        href={`https://www.chloethomas.me${locale === 'en' ? `/${locale}` : ''}${router.asPath}`} 
                    />
                ))}
            </Head>
            <Project project={project} previousProject={previousProject} nextProject={nextProject} />
        </>
    );
}
