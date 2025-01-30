import { useTranslation } from '@/context/TranslationContext';
import { useFirstLoad } from '@/context/FirstLoadContext';
import { useEffect } from 'react';
import Title from '../ui/Title/Title';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';
import { motion } from 'framer-motion';
import { projectsImagesSlidUp } from '@/lib/variants';
import CustomImage from '../ui/CustomImage/CustomImage';
import Link from 'next/link';

interface Project {
    id: number;
    name: string;
    slug: string;
    text_fr: string;
    text_en: string;
    images: string[];
    year: string;
    stack: string;
    url: string;
    color_bg: string;
    color_primary: string;
    color_secondary: string;
}

interface ProjectProps {
    project: Project;
    previousProject: Project | null;
    nextProject: Project | null;
}

export default function Project({ project, previousProject, nextProject }: ProjectProps) {
    const { t, visibleLocale }  = useTranslation();
    const { firstLoad }         = useFirstLoad();

    useEffect(() => {
        document.documentElement.style.setProperty('--background-color', project?.color_bg);
        document.documentElement.style.setProperty('--shape-color-primary', project?.color_primary);
        document.documentElement.style.setProperty('--shape-color-secondary', project?.color_secondary);

        return () => {
            document.documentElement.style.removeProperty('--background-color');
            document.documentElement.style.removeProperty('--shape-color-primary');
            document.documentElement.style.removeProperty('--shape-color-secondary');
        }; 

    }, [project]);

    return (
        <div className="wrapper">
            <Title>
                {project.name}
            </Title>
            <section className="project__info">
                <div className="project__technical-data">
                    <div>
                        <span className="project__technical-data-label">
                            {t.projects.label_year}
                        </span>
                        <span>{project.year}</span>
                    </div>
                    <div>
                        <span className="project__technical-data-label">
                            {t.projects.label_stack}
                        </span>
                        <span>{project.stack}</span>
                    </div>
                </div>
                <div className="project__description" >
                    <p>{project[`text_${visibleLocale}` as keyof Project]}</p>
                    {project.url && project.url.length > 0 && (
                        <div className="project__url-container">
                            <CustomLink href={project.url} target="_blank" rel="noopener noreferrer">
                                {t.projects.cta_live_site}
                            </CustomLink>
                        </div>
                    )}
                </div>
            </section>
            <motion.div
                variants={projectsImagesSlidUp}
                initial="initial"
                animate="enter"
                custom={{ firstLoad }}
            >
                <section className="project__images">
                    {project.images.map((img, index) => (
                        <CustomImage
                            key={`${img}${index}`}
                            src={img}
                            width={1900}
                            height={1140}
                            className="project__image"
                            alt={`${t.projects.alt_label} ${project.name}`}
                            priority={index === 0}
                        />
                    ))}
                </section>
                <div className="project__navigation">
                    {previousProject && 
                        (
                            <Link 
                                href={`/work/${previousProject.slug}`} scroll={false}
                                className="project__navigation--backward hover-underline">
                                {t.projects.nav_previous}
                            </Link>
                        ) 
                    }
                    {nextProject &&
                        (
                            <Link 
                                href={`/work/${nextProject.slug}`} scroll={false}
                                className="project__navigation--forward hover-underline">
                                {t.projects.nav_next}
                            </Link>
                        )
                    }
                </div>
            </motion.div>
        </div>
    )
}