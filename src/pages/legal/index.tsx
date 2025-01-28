import { useTranslation } from '@/context/TranslationContext';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Title from '@/components/ui/Title/Title';
import Link from 'next/link';

export default function Legal() {
    const { t }     = useTranslation();
    const router    = useRouter();
    const title     = `Chloé Thomas | ${t.legal.title}`

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
                    {t.legal.title}
                </Title>
                <section className="legal">
                    <article className="list-item">
                        <h2 className="subtitle">
                            {t.legal.subtitle_publisher}
                        </h2>
                        <p>
                            {t.legal.paragraph_website}
                            <Link href="/" scroll={false} className="hover-underline">
                                chloethomas.me
                            </Link>
                            {t.legal.paragraph_publisher_name}
                            <br />
                            {t.legal.paragraph_publisher_siret} 87760685500030
                            <br />
                            {t.legal.paragraph_publisher_headquarters} 9 Sainte-Suzanne, 56230 Questembert, France
                            <br />
                            {t.legal.paragraph_contact}
                            <Link href="mailto:chloe.thomas@netc.fr" className="hover-underline">
                                chloe.thomas@netc.fr
                            </Link>
                        </p>
                    </article>
                    <article className="list-item">
                        <h2 className="subtitle">
                            {t.legal.subtitle_host}
                        </h2>
                        <p>
                            {t.legal.paragraph_website}
                            <Link href="/" scroll={false} className="hover-underline">
                                chloethomas.me
                            </Link> 
                            {t.legal.paragraph_host_name}
                            <br />
                            {t.legal.paragraph_host_headquarters} 340 S Lemon Ave #4120, Walnut, CA 91789, USA
                            <br />
                            {t.legal.paragraph_contact}
                            <Link href="tel:+19513836898" className="hover-underline">
                                +1 951-383-6898
                            </Link>
                        </p>
                    </article>
                    <article className="list-item">
                        <h2 className="subtitle">
                            {t.legal.subtitle_ip}
                        </h2>
                        <p>{t.legal.paragraph_ip}</p>
                    </article>
                    <article className="list-item">
                        <h2 className="subtitle">
                            {t.legal.subtitle_data}
                        </h2>
                        <p>{t.legal.paragraph_data}</p>
                    </article>
                    <article className="list-item">
                        <h2 className="subtitle">
                            {t.legal.subtitle_responsibility}
                        </h2>
                        <p>{t.legal.paragraph_responsibility}</p>
                    </article>
                    <article className="list-item">
                        <h2 className="subtitle">
                            {t.legal.subtitle_changes}
                        </h2>
                        <p>{t.legal.paragraph_changes}</p>
                    </article>
                </section>
            </div>
        </>
    );
}
