import { useTranslation } from '@/context/TranslationContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import Title from '@/components/ui/Title/Title';
import projects from '@/lib/projects.json';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import CustomImage from '@/components/ui/CustomImage/CustomImage';

export default function Work() {
    const { t }     = useTranslation();
    const router    = useRouter();
    const title     = `Chloé Thomas | ${t.projects.title}`

    useEffect(() => {
        document.documentElement.style.setProperty('--background-color', '#fff9ef');
        document.documentElement.style.setProperty('--shape-color-primary', '#f4e7c1');
        document.documentElement.style.setProperty('--shape-color-secondary', '#d7cca9');

        return () => {
            document.documentElement.style.removeProperty('--background-color');
            document.documentElement.style.removeProperty('--shape-color-primary');
            document.documentElement.style.removeProperty('--shape-color-secondary');
        }; 
    
    }, []);

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
            <div className="wrapper">
                <Title>
                    {t.projects.title}
                </Title>
                <ol className="projects-list">
                    {projects.map((project, index) => (
                        <li key={project.id}>
                            <Link 
                                href={`/work/${project.slug}`}
                                scroll={false}
                                className="list-item projects-list__item">
                                <div className="projects-list__item-details">
                                    <h2 className="subtitle">
                                        {project.name}
                                    </h2>
                                    <span className="hover-underline">
                                        <MdArrowOutward />
                                        {t.projects.cta}
                                    </span>
                                </div>
                                <div className="projects-list__item-illustration">
                                    <CustomImage 
                                        src={project.image_home}
                                        width={1900}
                                        height={1140}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                                        alt={`${t.projects.alt_label} ${project.name}`}
                                        priority={index <= 1}
                                    />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}