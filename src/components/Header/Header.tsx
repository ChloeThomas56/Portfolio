import { useTranslation } from '@/context/TranslationContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFirstLoad } from '@/context/FirstLoadContext';
import { motion, AnimatePresence } from 'framer-motion';
import { headerReveal } from '@/lib/variants';
import Link from 'next/link';
import SwitchLanguage from '../ui/SwitchLanguage/SwitchLanguage';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import MobileMenu from '../ui/MobileMenu/MobileMenu';

export default function Header() {
    const { t }                         = useTranslation();
    const [isMenuOpen, setIsMenuOpen]   = useState(false);
    const { pathname, locale }          = useRouter();
    const { firstLoad }                 = useFirstLoad();
        
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
                <AnimatePresence mode="wait">
                    <motion.div
                        key={locale}
                        variants={headerReveal}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        custom={{ firstLoad }}
                    >
                        <div className="header__inner">
                            <div>
                                <Link href="/" className="nav-item header__nav-item" scroll={false}>
                                    CT.
                                </Link>
                            </div>
                            <div className="header__controls">
                                <nav className="header__nav">
                                    <ul>
                                        {links.map((link) => (
                                            <li key={link.name} >
                                                <Link href={link.href} className="nav-item header__nav-item hover-underline" scroll={false}>
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div className="desktop-only">
                                    <SwitchLanguage />
                                </div>
                            </div>
                            <BurgerMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </header>
            <MobileMenu links={links} show={isMenuOpen} setShow={setIsMenuOpen} />
        </>
    );
}