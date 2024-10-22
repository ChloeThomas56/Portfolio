import styles from './legal.module.scss';
import { CustomLink } from '@/components/ui/customLink/CustomLink';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chloé Thomas | Mentions légales',
}

export default function Page() {
    
    return (
        <div className={`page ${styles['legal-page']}`}>
            <h1>
                Mentions légales
            </h1>
            <section className="grid">
                <article>
                    <h3>Éditeur</h3>
                    <p>
                        Le site&nbsp; 
                        <CustomLink href="/">
                            chloethomas.me
                        </CustomLink> 
                        &nbsp;est édité par&nbsp;
                        <CustomLink href="mailto:chloe.thomas@netc.fr">
                            Chloé Thomas
                        </CustomLink>.
                        <br />
                        SIRET&nbsp;: 87760685500030
                        <br />
                        Siège social&nbsp;: 9 Sainte-Suzanne, 56230 Questembert, France
                    </p>
                </article>
                <article>
                    <h3>Hébergeur</h3>
                    <p>
                        Le site&nbsp;
                        <CustomLink href="/">
                            chloethomas.me
                        </CustomLink>
                        &nbsp;est hébergé par Vercel Inc.
                        <br />
                        Siège social&nbsp;: 340 S Lemon Ave #4120, Walnut, CA 91789, USA
                        <br />
                        Contact&nbsp;:&nbsp;
                        <CustomLink href="tel:+19513836898">
                            +1 951-383-6898
                        </CustomLink>
                    </p>
                </article>
                <article>
                    <h3>Propriété intellectuelle</h3>
                    <p>
                        L&#39;ensemble des contenus de ce site est la propriété exclusive de Chloé Thomas, sauf indication contraire. Toute reproduction ou représentation totale ou partielle de ce site, sans autorisation expresse, est interdite et constituerait une contrefaçon.
                    </p>
                </article>
                <article>
                    <h3>Données personnelles</h3>
                    <p>
                        Ce site ne collecte pas de données personnelles. Les informations fournies par les utilisateurs via le formulaire de contact sont uniquement utilisées pour répondre aux demandes et ne sont pas stockées ni partagées.
                    </p>
                </article>
                <article>
                    <h3>Responsabilité</h3>
                    <p>
                        Le site peut contenir des liens vers des sites externes. Nous déclinons toute responsabilité quant au contenu de ces sites et à toute éventuelle conséquence découlant de leur utilisation.
                    </p>
                </article>
                <article>
                    <h3>Modification</h3>
                    <p>
                        Nous nous réservons le droit de modifier les présentes mentions légales à tout moment. Il est recommandé de les consulter régulièrement pour prendre connaissance de toute mise à jour.
                    </p>
                </article>
            </section>
        </div>
    );
}
