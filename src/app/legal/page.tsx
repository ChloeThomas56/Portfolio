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
            <section>
                <article>
                    <h4>
                        Éditeur
                    </h4>
                    <p>
                        Le site https://www.chloethomas.com est édité par Chloé Thomas, entreprise individuelle.
                        <br />
                        SIRET&nbsp;: 87760685500030
                        <br />
                        Siège social&nbsp;: 9 Sainte-Suzanne, 59230 Questembert, France
                        <br />
                        Email&nbsp;:
                        <CustomLink href="mailto:chloe.thomas@netc.fr">
                            &nbsp;chloe.thomas@netc.fr
                        </CustomLink>
                    </p>
                </article>
                <article>
                    <h4>
                        Hébergement
                    </h4>
                    <p>
                        Le site https://www.chloethomas.com est hébergé par XXX
                        <br />
                        Siège social&nbsp;:
                        <br />
                        Contact&nbsp;:
                    </p>
                </article>
                <article>
                    <h4>
                        Propriété intellectuelle
                    </h4>
                    <p>
                        L&#39;ensemble des contenus présents sur ce site, y compris les textes, images, logos, et autres éléments, est la propriété exclusive de Chloé Thomas, sauf indication contraire. Toute reproduction ou représentation totale ou partielle de ce site, sans autorisation expresse, est interdite et constituerait une contrefaçon.
                    </p>
                </article>
                <article>
                    <h4>
                        Données personnelles
                    </h4>
                    <p>
                        Ce site ne collecte pas de données personnelles. Les informations fournies par les utilisateurs via le formulaire de contact sont uniquement utilisées pour répondre aux demandes et ne sont pas stockées ni partagées.
                    </p>
                </article>
                <article>
                    <h4>
                        Responsabilité
                    </h4>
                    <p>
                        Le site peut contenir des liens vers des sites externes. Nous déclinons toute responsabilité quant au contenu de ces sites et à toute éventuelle conséquence découlant de leur utilisation.
                    </p>
                </article>
                <article>
                    <h4>
                        Modification des mentions légales
                    </h4>
                    <p>
                        Nous nous réservons le droit de modifier les présentes mentions légales à tout moment. Il est recommandé de les consulter régulièrement pour prendre connaissance de toute mise à jour.
                    </p>
                </article>
            </section>
        </div>
    );
}
