'use client';

import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import BurgerMenu from '../ui/burgerMenu/BurgerMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from '../ui/mobileNav/MobileNav';
import LineReveal from '../ui/animations/LineReveal';
import { useLoader } from '../ui/animations/loader/LoaderContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen]   = useState(false);
    const pathname                      = usePathname();
    const { isLoadingCompleted }        = useLoader();
        
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
                    {isLoadingCompleted && (
                        <LineReveal>
                            <Link href="/" className="nav-item">
                                CT.
                            </Link>
                        </LineReveal>
                    )}
                    <nav className={styles['header__nav']}>
                        <ul>
                            {links.map((link) => (
                                <li key={link.name} >
                                    {isLoadingCompleted && (
                                        <LineReveal>
                                            <Link href={link.href} className="nav-item">
                                                {link.name}
                                            </Link>
                                        </LineReveal>
                                    )}
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