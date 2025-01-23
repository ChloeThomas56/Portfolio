import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { textReveal } from '@/lib/variants';
import Link from 'next/link';
import SwitchLanguage from '../ui/SwitchLanguage/SwitchLanguage';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import MobileNav from '../ui/MobileNav/MobileNav';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen]   = useState(false);
    const { pathname, locale }          = useRouter();
        
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname, locale]);

    const links = [
        { name: 'Accueil', href: '/'},
        { name: 'Projets', href: '/work'},
        { name: 'À propos', href: '/about'},
        { name: 'Contact', href: '/contact'},
    ];

    return (
        <>
            <header className="header">
                <motion.div 
                    className="header__inner"
                    variants={textReveal}
                    initial="initial"
                    animate="enter"
                >
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
                                        <Link href={link.href} className="nav-item header__nav-item" scroll={false}>
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
                </motion.div>
            </header>
            <MobileNav links={links} show={isMenuOpen} setShow={setIsMenuOpen} />
        </>
    );
}