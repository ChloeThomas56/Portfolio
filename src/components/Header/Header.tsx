import { useTranslation } from '@/context/TranslationContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { textReveal } from '@/lib/variants';
import Link from 'next/link';
import SwitchLanguage from '../ui/SwitchLanguage/SwitchLanguage';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import MobileNav from '../ui/MobileNav/MobileNav';

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
                    >
                        <Link href="/" className="nav-item header__nav-item" scroll={false}>
                            CT.
                        </Link>
                    </motion.div>
                    <div className="header__controls">
                        <nav className="header__nav">
                            <AnimatePresence mode="wait">
                                <motion.ul
                                    key={locale}
                                    variants={textReveal}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    {links.map((link) => (
                                        <li key={link.name} >
                                            <Link href={link.href} className="nav-item header__nav-item" scroll={false}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            </AnimatePresence>
                        </nav>
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
            <MobileNav links={links} show={isMenuOpen} setShow={setIsMenuOpen} />
        </>
    );
}