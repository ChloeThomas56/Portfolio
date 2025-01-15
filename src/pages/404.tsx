import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import Title from '@/components/ui/Title/Title';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Chloé Thomas | 404</title>
            </Head>
            <PageTransition>
                <div className="centered-wrapper">
                    <Title>
                        Erreur 404
                    </Title>
                    <CustomLink href="/">
                        Retour à l&#39;accueil
                    </CustomLink>
                </div>
            </PageTransition>
        </>
    )
}