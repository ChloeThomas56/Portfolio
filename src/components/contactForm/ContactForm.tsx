'use client';

import styles from './contactForm.module.scss';
import { Button } from '@/components/ui/button/Button';
import { MdOutlineClose } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ImSpinner8 } from 'react-icons/im';

export default function ContactForm() {
    const [showMessage, setShowMessage] = useState(false);
    const [isLoading, setIsLoading]     = useState(false);
    const [formStatus, setFormStatus]   = useState<string | null>(null);

    const form = useRef<HTMLFormElement | null>(null);

    const closeModal = () => {
        setShowMessage(false);
        setFormStatus(null);
    }

    const sendForm = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        
        // emailjs info
        const serviceId     = "service_08yyidq";
        const templateId    = "template_95h9my6";
        const publicKey     = "fiGlmub6D_J9yzZV7";

        if (form.current) {
            setIsLoading(true);

            emailjs.sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            }).then(
                () => {
                    setFormStatus("success");
                    setShowMessage(true);
                    form.current?.reset();
                    console.log('SUCCESS!');
                },
                (error) => {
                    setFormStatus("error");
                    setShowMessage(true);
                    console.log('FAILED...', error.text);
                },
            ).finally(() => {
                setIsLoading(false);
            });
        }
        
    }

    return (
        <>
            <form ref={form} action="/submit-form" method="post" className={styles['form']} onSubmit={sendForm}>
                <div className={styles['form__field-wrapper']}>
                    <label htmlFor="first_name">
                        Prénom
                        <span>*</span>
                    </label>
                    <input 
                        type="text" 
                        id="first_name" 
                        name="first_name"
                        placeholder="Jean"
                        required />
                </div>
                <div className={styles['form__field-wrapper']}>
                    <label htmlFor="last_name">
                        Nom
                        <span>*</span>
                    </label>
                    <input 
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="Dupont"
                        required />
                </div>
                <div className={styles['form__field-wrapper']}>
                    <label htmlFor="email">
                        Email
                        <span>*</span>
                    </label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        placeholder="jean.dupont@exemple.com"
                        required />
                </div>
                <div className={styles['form__field-wrapper']}>
                    <label htmlFor="message">
                        Message
                        <span>*</span>
                    </label>
                    <textarea 
                        id="message"
                        name="message"
                        placeholder="Taper votre demande ici"
                        rows={3} 
                        required />
                </div>
                <Button type="submit" className="button" disabled={isLoading ? true : false}>
                    {
                        isLoading && (
                            <ImSpinner8 className="spinner" />
                        )
                    }
                    Envoyer
                </Button>
            </form>
            <AnimatePresence>
                {showMessage && (
                    <motion.div
                        key="modal-overlay" 
                        initial={{backdropFilter: 'blur(0px)'}}
                        animate={{backdropFilter: 'blur(5px)'}}
                        exit={{backdropFilter: 'blur(0px)'}}
                        transition={{duration: 0.3, ease:"easeIn"}}
                        className="modal-overlay">
                        <motion.div
                            key="modal"
                            initial={{scale: 0}}
                            animate={{scale: 1}}
                            exit={{scale: 0}}
                            transition={{duration: 0.4, ease: [0.76, 0, 0.24, 1]}}
                            className="modal">
                                <button className="modal__close-btn" onClick={closeModal}>
                                    <MdOutlineClose />
                                </button>
                                {
                                    formStatus === 'success' ? (
                                        <div>
                                            <p>
                                                Votre message a bien été envoyé&nbsp;!<br/>Je vous répondrai dans les plus brefs délais.<br/>
                                                <span className={styles['form__smiley']}>(•‿•)</span>
                                            </p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p>
                                                Oups&nbsp;! Quelque chose s&#39;est mal passé.<br/>Veuillez vérifier vos informations et réessayer.<br/>
                                                <span className={styles['form__smiley']}>(•_•)</span>
                                            </p>
                                        </div>
                                    )
                                }
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}