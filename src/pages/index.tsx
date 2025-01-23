import { useRouter } from 'next/router';
import fr from '../../locales/fr/home';
import en from '../../locales/en/home';
import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import Title from '@/components/ui/Title/Title';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';

export default function Home() {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : fr;

    return (
        <>
            <Head>
                <title>Chloé Thomas</title>
            </Head>
            <PageTransition>
                <div className="centered-wrapper home">
                    <Title>
                        Chloé Thomas,
                    </Title>
                    <Title as="h2">
                        {t.subtitle}
                    </Title>
                    <p>
                        Passionnée par le développement front-end, je conçois des interfaces modernes alliant design et performance.
                        <br/>
                        Découvrez mon univers et mes projets&nbsp;!
                    </p>
                    <nav className="home__nav">
                        <CustomLink href="/work">
                            Voir mes projets
                        </CustomLink>
                        <CustomLink href="/about">
                            En savoir plus
                        </CustomLink>
                    </nav>
                </div>
            </PageTransition>
        </>
    );
}
