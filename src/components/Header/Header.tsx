import { useTranslation } from '@/context/TranslationContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { textReveal } from '@/lib/variants';
import Link from 'next/link';
import SwitchLanguage from '../ui/SwitchLanguage/SwitchLanguage';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import MobileMenu from '../ui/MobileMenu/MobileMenu';

export default function Header() {
    const { t }                         = useTranslation();
    const [isMenuOpen, setIsMenuOpen]   = useState(false);
    const { pathname, locale }          = useRouter();
        
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname, locale]);

    const links = [
        { name: t.common.link_home, href: '/'},
        { name: t.common.link_projects, href: '/work'},
        { name: t.common.link_about, href: '/about'},
        { name: t.common.link_contact, href: '/contact'},
    ];

    return (
        <>
            <header className="header">
                <div className="header__inner">
                    <motion.div
                        variants={textReveal}
                        initial="initial"
                        animate="enter"
                        className="header__logo-container"
                    >
                        <Link href="/" className="nav-item header__nav-item" scroll={false}>
                            CT.
                        </Link>
                    </motion.div>
                    <div className="header__controls">
                        <AnimatePresence mode="wait">
                            <motion.nav
                                key={locale}
                                variants={textReveal}
                                initial="initial"
                                animate="enter"
                                exit="exit" 
                                className="header__nav"
                            >
                                <ul>
                                    {links.map((link) => (
                                        <li key={link.name} >
                                            <Link href={link.href} className="nav-item header__nav-item hover-underline" scroll={false}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.nav>
                        </AnimatePresence>
                        <motion.div 
                            variants={textReveal}
                            initial="initial"
                            animate="enter"
                            className="desktop-only">
                            <SwitchLanguage />
                        </motion.div>
                    </div>
                    <BurgerMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} />
                </div>
            </header>
            <MobileMenu links={links} show={isMenuOpen} setShow={setIsMenuOpen} />
        </>
    );
}