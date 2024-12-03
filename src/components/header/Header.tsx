'use client';

import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import BurgerMenu from '../ui/burgerMenu/BurgerMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from '../ui/mobileNav/MobileNav';
import LineReveal from '../ui/animations/LineReveal';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
        
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const links = [
        { name: 'Accueil', href: '/'},
        { name: 'À propos', href: '/about'},
        { name: 'Me contacter', href: '/contact'},
    ];

    return (
        <>
            <header className={styles['header']}>
                <div className={styles['header__inner']}>
                    <LineReveal delay={2.3}>
                        <Link href="/" aria-label="Retour à l'accueil" className="nav-item">
                            CT.
                        </Link>
                    </LineReveal>
                    <nav className={styles['header__nav']}>
                        <ul>
                            {links.map((link) => (
                                <li key={link.name} >
                                    <LineReveal delay={2.3}>
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