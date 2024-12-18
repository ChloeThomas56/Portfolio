import Head from 'next/head';
import PageTransition from '@/components/ui/animations/PageTransition/PageTransition';
import { CustomLink } from '@/components/ui/CustomLink';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Chloé Thomas | Contact</title>
            </Head>
            <PageTransition>
                <div className="wrapper">
                    <h1 className="title">
                        Me contacter
                    </h1>
                    <section className="contact__intro">
                        <p>
                            Un projet, une question&nbsp;? N&#39;hésitez pas à me contacter via le formulaire ci-dessous ou directement par email.
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
            </PageTransition>
        </>
    );
}
