import { useTranslation } from '@/context/TranslationContext';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Title from '@/components/ui/Title/Title';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';

export default function Home() {
    const { t }     = useTranslation();
    const router    = useRouter();

    return (
        <>
            <Head>
                <title>Chloé Thomas</title>
                {router.locales?.map((locale) => (
                    <link 
                        key={locale} 
                        rel="alternate" 
                        hrefLang={locale} 
                        href={`https://www.chloethomas.me${locale === 'en' ? `/${locale}` : ''}`} 
                    />
                ))}
            </Head>
            <div className="centered-wrapper home">
                <Title>
                    Chloé Thomas,
                </Title>
                <Title as="h2">
                    {t.home.subtitle}
                </Title>
                <p>
                    {t.home.paragraph_first}
                    <br/>
                    {t.home.paragraph_second}
                </p>
                <nav className="home__nav">
                    <CustomLink href="/work">
                        {t.home.cta_projects}
                    </CustomLink>
                    <CustomLink href="/about">
                        {t.home.cta_about}
                    </CustomLink>
                </nav>
            </div>
        </>
    );
}
