import { useLoader } from '../animations/Loader/LoaderContext';
import LineReveal from '../animations/LineReveal';
import { Button } from '../Button';
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
    );
}