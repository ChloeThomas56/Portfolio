import { useTranslation } from '@/context/TranslationContext';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ImSpinner8 } from 'react-icons/im';
import Modal from '../ui/Modal/Modal';

export default function ContactForm() {
    const { t }                         = useTranslation();
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
                        {t.contact.label_first_name}
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
                        {t.contact.label_last_name}
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
                    {t.contact.cta}
                </button>
            </form>
            <Modal show={showMessage} close={closeModal}>
                {
                    formStatus === 'success' ? (
                        <p>
                            {t.contact.modal_success_paragraph_first}<br/>{t.contact.modal_success_paragraph_second}<br/>
                            <span className="form__smiley">(•‿•)</span>
                        </p>
                    ) : (
                        <p>
                            {t.contact.modal_error_paragraph_first}<br/>{t.contact.modal_error_paragraph_second}<br/>
                            <span className="form__smiley">(•_•)</span>
                        </p>
                    )
                }
            </Modal>
        </>
    );
}