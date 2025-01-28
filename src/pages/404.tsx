import { useTranslation } from '@/context/TranslationContext';
import Head from 'next/head';
import Title from '@/components/ui/Title/Title';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';

export default function Custom404() {
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>Chloé Thomas | 404</title>
            </Head>
            <div className="centered-wrapper">
                <Title>
                    {t.common.error_title}
                </Title>
                <CustomLink href="/">
                    {t.common.error_cta}
                </CustomLink>
            </div>
        </>
    )
}