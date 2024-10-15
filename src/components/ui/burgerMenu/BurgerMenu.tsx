import clsx from 'clsx';
import styles from './burgerMenu.module.scss';
import { Button } from '../button/Button';

interface BurgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export default function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
    return (
        <Button
            className={clsx(styles['burger-menu'], {[styles['burger-menu--open']]: isOpen})}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="menu"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
                <span className={`${styles['burger-menu__line']} ${styles['burger-menu__line1']}`} />
                <span className={`${styles['burger-menu__line']} ${styles['burger-menu__line2']}`} />
        </Button>
    );
}