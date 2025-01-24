import { useTranslation } from '@/context/TranslationContext';
import { motion } from 'framer-motion';
import { textReveal } from '@/lib/variants';
import clsx from 'clsx';

interface BurgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export default function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
    const { t } = useTranslation();

    return (
        <motion.div
            variants={textReveal}
            initial="initial"
            animate="enter" 
            className="burger-menu-container"
        >
            <button
                className={clsx("burger-menu", {"burger-menu--open": isOpen})}
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-controls="menu"
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
                    <span>{t.common.burger_menu_open}</span>
                    <span>{t.common.burger_menu_close}</span>
            </button>
        </motion.div>
    );
}