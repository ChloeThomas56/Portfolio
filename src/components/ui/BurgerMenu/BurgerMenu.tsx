import LineReveal from '../animations/LineReveal/LineReveal';
import clsx from 'clsx';

interface BurgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export default function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
    return (
        <div className="burger-menu-container">
            <LineReveal>
                <button
                    className={clsx("burger-menu", {"burger-menu--open": isOpen})}
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="menu"
                    aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
                        <span>Menu</span>
                        <span>Fermer</span>
                </button>
            </LineReveal>
        </div>
    );
}