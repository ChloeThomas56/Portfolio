import { useTranslation } from '@/context/TranslationContext';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Title from '@/components/ui/Title/Title';
import CustomImage from '@/components/ui/CustomImage/CustomImage';
import { MdArrowOutward } from 'react-icons/md';

export default function About() {
    const { t }     = useTranslation();
    const router    = useRouter();
    const title     = `Chloé Thomas | ${t.about.title}`

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
                    {t.about.title}
                </Title>
                <div className="about">
                    <section className="about__introduction">
                        <div className="about__introduction-illustration">
                            <CustomImage
                                src="/images/portrait.webp"
                                width={1000}
                                height={1000}
                                sizes="(max-width: 768px) 100vw, 30vw"
                                alt="Portrait de Chloé Thomas"
                                priority
                            />
                        </div>
                        <div className="about__introduction-text">
                            <h2 className="subtitle">
                                {t.about.subtitle_background}
                            </h2>
                            <p>{t.about.paragraph_background_first}</p>
                            <p>{t.about.paragraph_background_second}</p>
                            <a href={t.about.href_resume} target="_blank" rel="noopener noreferrer" className="link">
                                <MdArrowOutward />
                                {t.about.cta_resume}
                            </a>
                        </div>
                    </section>
                    <section className="about__tools">
                        <h2 className="subtitle">
                            {t.about.subtitle_tools}
                        </h2>
                        <ul className="about__tools-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>React</li>
                            <li>Next</li>
                            <li>Vue</li>
                            <li>Nuxt</li>
                            <li>GSAP</li>
                            <li>Framer Motion</li>
                            <li>Figma</li>
                            <li>WordPress</li>
                            <li>PHP</li>
                            <li>Laravel</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    );
}
