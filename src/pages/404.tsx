import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import { CustomLink } from '@/components/ui/CustomLink';

export default function Custom404() {
    return (
        <>
            <Head>
                    <title>Chloé Thomas | 404</title>
                </Head>
            <PageTransition>
                <div className="wrapper">
                    <h1 className="title">
                        Erreur 404
                    </h1>
                    <h2 className="subtitle">
                        Oups, cette page n&#39;existe pas
                    </h2>
                    <div>
                        <CustomLink href="/">
                            Retour à l&#39;accueil
                        </CustomLink>
                    </div>
                </div>
            </PageTransition>
        </>
    )
}