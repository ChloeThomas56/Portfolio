import { useTranslation } from '@/context/TranslationContext';
import { useFirstLoad } from '@/context/FirstLoadContext';
import { motion } from 'framer-motion';
import { textReveal } from '@/lib/variants';
import clsx from 'clsx';

interface BurgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export default function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
    const { t }         = useTranslation();
    const { firstLoad } = useFirstLoad();

    return (
        <motion.div
            variants={textReveal}
            initial="initial"
            animate="enter"
            custom={{ firstLoad }} 
            className="burger-menu-container"
        >
            <button
                className={clsx("burger-menu", {"burger-menu--open": isOpen})}
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-controls="menu"
                aria-label={isOpen ? t.common.aria_label_close_menu : t.common.aria_label_open_menu}>
                    <span>{t.common.burger_menu_open}</span>
                    <span>{t.common.burger_menu_close}</span>
            </button>
        </motion.div>
    );
}