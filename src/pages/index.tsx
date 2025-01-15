import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import LineReveal from '@/components/ui/animations/LineReveal/LineReveal';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';

export default function Home() {
    return (
        <>
            <Head>
                <title>Chloé Thomas</title>
            </Head>
            <PageTransition>
                <div className="centered-wrapper home">
                    <h1 className="title">
                        <LineReveal>
                            Chloé Thomas,
                        </LineReveal>
                    </h1>
                    <h2 className="title">
                        <LineReveal>
                            développeuse web
                        </LineReveal>
                    </h2>
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
