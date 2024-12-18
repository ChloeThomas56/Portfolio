import { useSmoothScrollingControl } from '../ui/SmoothScrolling';
import { CustomLink } from '@/components/ui/CustomLink';
import { MdArrowOutward } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';

export default function Hero() {
    const lenis = useSmoothScrollingControl();

    const onClickAnchor = (target: string) => {
        lenis?.scrollTo(target, { duration: 1.5 });
    };

    return (
        <section id="hero" className="hero">
            <div id="hero-overlay" className="hero__overlay" />
            <div className="hero__inner">
                <div className="hero__main">
                    <div>
                        <h1 className="title">
                            Chloé Thomas,
                        </h1>
                        <h2 className="title">
                            développeuse web freelance
                        </h2>
                    </div>
                    <p className="hero__description">
                        Bienvenue sur mon portfolio&nbsp;! Je suis Chloé Thomas, développeuse web freelance passionnée par la création et le design. Je conçois des interfaces et solutions web qui répondent aux besoins des utilisateurs. Découvrez mes projets et explorons ensemble toutes les possibilités de donner vie à vos idées.
                    </p>
                    <div className="hero__cta-container">
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
                <div className="hero__footer">
                    <div className="hero__footer-inner">
                        <span>Basée à Vannes (56)</span>
                        <span className="hero__footer-worldwide">
                            <BiWorld />
                            Active à l&#39;international
                        </span>
                        <span className="hero__footer-availability">
                            Actuellement disponible
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}