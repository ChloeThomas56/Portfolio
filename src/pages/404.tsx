import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
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
                        Erreur 404
                    </h1>
                    <CustomLink href="/">
                        Retour à l&#39;accueil
                    </CustomLink>
                </div>
            </PageTransition>
        </>
    )
}