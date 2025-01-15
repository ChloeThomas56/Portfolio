import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import LineReveal from '@/components/ui/animations/LineReveal/LineReveal';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Chloé Thomas | 404</title>
            </Head>
            <PageTransition>
                <div className="centered-wrapper">
                    <h1 className="title">
                        <LineReveal>
                            Erreur 404
                        </LineReveal>
                    </h1>
                    <CustomLink href="/">
                        Retour à l&#39;accueil
                    </CustomLink>
                </div>
            </PageTransition>
        </>
    )
}