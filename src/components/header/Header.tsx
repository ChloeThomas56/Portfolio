'use client';

import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import BurgerMenu from '../ui/burgerMenu/BurgerMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSmoothScrollingControl } from '../ui/SmoothScrolling';
import MobileNav from '../ui/mobileNav/MobileNav';
import LineReveal from '../ui/animations/LineReveal';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const lenis = useSmoothScrollingControl();
        
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // disable scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            lenis?.stop();
            document.documentElement.style.overflowY = 'hidden';
        } else {
            const timeout = setTimeout(() => {
                lenis?.start();
                document.documentElement.style.overflowY = 'auto';
            }, 800);
    
            return () => clearTimeout(timeout);
        }
    }, [isMenuOpen, lenis]);

    const links = [
        { name: 'Accueil', href: '/'},
        { name: 'À propos', href: '/about'},
        { name: 'Me contacter', href: '/contact'},
    ];

    return (
        <>
            <header className={styles['header']}>
                <div className={styles['header__inner']}>
                    <LineReveal>
                        <Link href="/" aria-label="Retour à l'accueil" className="nav-item">
                            CT.
                        </Link>
                    </LineReveal>
                    <nav className={styles['header__nav']}>
                        <ul>
                            {links.map((link) => (
                                <li key={link.name} >
                                    <LineReveal>
                                        <Link href={link.href} className="nav-item">
                                            {link.name}
                                        </Link>
                                    </LineReveal>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <BurgerMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} />
                </div>
            </header>
            <MobileNav links={links} show={isMenuOpen} setShow={setIsMenuOpen} />
        </>
    );
}