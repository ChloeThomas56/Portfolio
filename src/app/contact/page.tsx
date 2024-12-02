import styles from './contact.module.scss';
import { CustomLink } from '@/components/ui/CustomLink';
import ContactForm from '@/components/contactForm/ContactForm';
import { Metadata } from 'next';
import WordsReveal from '@/components/ui/animations/WordsReveal';

export const metadata: Metadata = {
    title: 'Chloé Thomas | Me contacter',
}

export default function Page() {
    return (
        <div className="page">
            <h1 className="title">
                <WordsReveal text="Me contacter" />
            </h1>
            <section className={styles['contact__intro']}>
                <p>
                    Un projet, une question&nbsp;? N&#39;hésitez pas à me contacter via le formulaire ci-dessous ou directement par email.
                </p>
                <ul className={styles['contact__info']}>
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
                <div className={styles['contact__form-container']}>
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}
