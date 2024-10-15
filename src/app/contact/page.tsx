import styles from './contact.module.scss';
import { CustomLink } from '@/components/ui/customLink/CustomLink';
import { MdArrowOutward } from 'react-icons/md';
import ContactForm from '@/components/contactForm/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chloé Thomas | Me contacter',
}

export default function Page() {
    return (
        <div className="page">
            <h1>
                Me contacter
            </h1>
            <section className={styles['contact__intro']}>
                <p>
                    Un projet, une question&nbsp;? N&#39;hésitez pas à me contacter via le formulaire de contact ou directement par email.
                </p>
                <ul className={styles['contact__info']}>
                    <li>
                        <CustomLink href="mailto:chloe.thomas@netc.fr" className="link hover-underline">
                            <MdArrowOutward />
                            chloe.thomas@netc.fr
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="https://www.linkedin.com/in/chloethomas56/" newTab className="link hover-underline">
                            <MdArrowOutward />
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
