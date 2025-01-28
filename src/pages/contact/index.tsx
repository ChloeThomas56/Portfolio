import { useTranslation } from '@/context/TranslationContext';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Title from '@/components/ui/Title/Title';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function Contact() {
    const { t }     = useTranslation();
    const router    = useRouter();

    return (
        <>
            <Head>
                <title>Chloé Thomas | Contact</title>
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
                    Contact
                </Title>
                <section className="contact__intro">
                    <p>
                        {t.contact.paragraph}
                    </p>
                    <ul className="contact__info">
                        <li>
                            <CustomLink href="mailto:chloe.thomas@netc.fr">
                                chloe.thomas@netc.fr
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink 
                                href="https://www.linkedin.com/in/chloethomas56/"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                linkedin
                            </CustomLink>
                        </li>
                    </ul>
                </section>
                <section>
                    <div className="contact__form-container">
                        <ContactForm />
                    </div>
                </section>
            </div>
        </>
    );
}
