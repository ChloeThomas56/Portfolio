import { useLoader } from '../animations/Loader/LoaderContext';
import LineReveal from '../animations/LineReveal/LineReveal';
import { Button } from '../Button/Button';
import clsx from 'clsx';

interface BurgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export default function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
    const { isLoadingCompleted } = useLoader();

    if (!isLoadingCompleted)
        return null;

    return (
        <div className="burger-menu-container">
            <LineReveal>
                <Button
                    className={clsx("burger-menu", {"burger-menu--open": isOpen})}
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="menu"
                    aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
                        <span>Menu</span>
                        <span>Fermer</span>
                </Button>
            </LineReveal>
        </div>
    );
}