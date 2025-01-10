import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ImSpinner8 } from 'react-icons/im';
import Modal from '../ui/Modal/Modal';

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
            <form ref={form} action="/submit-form" method="post" className="form" onSubmit={sendForm}>
                <div className="form__field-wrapper">
                    <label htmlFor="first_name">
                        Prénom
                        <span>*</span>
                    </label>
                    <input 
                        type="text" 
                        id="first_name" 
                        name="first_name"
                        required />
                </div>
                <div className="form__field-wrapper">
                    <label htmlFor="last_name">
                        Nom
                        <span>*</span>
                    </label>
                    <input 
                        type="text"
                        id="last_name"
                        name="last_name"
                        required />
                </div>
                <div className="form__field-wrapper">
                    <label htmlFor="email">
                        Email
                        <span>*</span>
                    </label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        required />
                </div>
                <div className="form__field-wrapper">
                    <label htmlFor="message">
                        Message
                        <span>*</span>
                    </label>
                    <textarea 
                        id="message"
                        name="message"
                        rows={3} 
                        required />
                </div>
                <button type="submit" className="button" disabled={isLoading ? true : false}>
                    {
                        isLoading && (
                            <ImSpinner8 className="spinner" />
                        )
                    }
                    Envoyer
                </button>
            </form>
            <Modal show={showMessage} close={closeModal}>
                {
                    formStatus === 'success' ? (
                        <p>
                            Votre message a bien été envoyé&nbsp;!<br/>Je vous répondrai dans les plus brefs délais.<br/>
                            <span className="form__smiley">(•‿•)</span>
                        </p>
                    ) : (
                        <p>
                            Oups&nbsp;! Quelque chose s&#39;est mal passé.<br/>Veuillez vérifier vos informations et réessayer.<br/>
                            <span className="form__smiley">(•_•)</span>
                        </p>
                    )
                }
            </Modal>
        </>
    );
}