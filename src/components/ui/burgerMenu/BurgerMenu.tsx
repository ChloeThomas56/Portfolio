import clsx from 'clsx';
import styles from './burgerMenu.module.scss';
import { Button } from '../Button';
import LineReveal from '../animations/LineReveal';

interface BurgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export default function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
    return (
        <LineReveal delay={2.3}>
            <Button
                className={clsx(styles['burger-menu'], {[styles['burger-menu--open']]: isOpen})}
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-controls="menu"
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
                    <div className={styles['burger-menu__inner']}>
                        <span className={`${styles['burger-menu__line']} ${styles['burger-menu__line1']}`} />
                        <span className={`${styles['burger-menu__line']} ${styles['burger-menu__line2']}`} />
                        <span className={styles['burger-menu__close']}>
                            Fermer
                        </span>
                    </div>
            </Button>
        </LineReveal>
    );
}