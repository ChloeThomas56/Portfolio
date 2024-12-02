import styles from './hero.module.scss';
import { TfiWorld } from "react-icons/tfi";
import { CustomLink } from '@/components/ui/CustomLink';
import { useSmoothScrollingControl } from '../ui/SmoothScrolling';
import WordsReveal from '../ui/animations/WordsReveal';
import { MdArrowOutward } from 'react-icons/md';

export default function Hero() {
    const lenis = useSmoothScrollingControl();

    const onClickAnchor = (target: string) => {
        lenis?.scrollTo(target, { duration: 1.5 });
    };

    return (
        <section id="hero" className={styles['hero']}>
            <div id="hero-overlay" className={styles['hero__overlay']} />
            <div className={styles['hero__inner']}>
                <div className={styles['hero__main']}>
                    <div>
                        <h1 className="title">
                            <WordsReveal text="Chloé Thomas," />
                        </h1>
                        <h2 className="title">
                            <WordsReveal text="développeuse web freelance" />
                        </h2>
                    </div>
                    <p className={styles['hero__description']}>
                        Bienvenue sur mon portfolio&nbsp;! Je suis Chloé Thomas, développeuse web freelance passionnée par la création et le design. Je conçois des interfaces et solutions web qui répondent aux besoins des utilisateurs. Découvrez mes projets et explorons ensemble toutes les possibilités de donner vie à vos idées.
                    </p>
                    <div className={styles['hero__cta-container']}>
                        <span>(scroll)</span>
                        <div>
                            <div 
                                className="link"
                                onClick={() => onClickAnchor('#projects')}>
                                <MdArrowOutward />
                                Voir mes projets
                            </div>
                            <CustomLink href="/about">
                                En savoir plus
                            </CustomLink>
                        </div>
                    </div>
                </div>
                <div className={styles['hero__footer']}>
                    <div className={styles['hero__footer__inner']}>
                        <span>Basée à Vannes</span>
                        <span className={styles['hero__footer__worldwide']}>
                            <TfiWorld />
                            Active à l&#39;international
                        </span>
                        <span className={styles['hero__footer__availability']}>
                            Actuellement disponible
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}