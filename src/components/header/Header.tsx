'use client';

import clsx from 'clsx';
import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import Logo from '/public/images/logo.svg';
import BurgerMenu from '../ui/burgerMenu/BurgerMenu';
import { CustomLink } from '../ui/customLink/CustomLink';
import { usePathname } from 'next/navigation';
import { MdArrowOutward } from 'react-icons/md';
import { useSmoothScrollingControl } from '../ui/SmoothScrolling';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const pathname = usePathname();

    const lenis = useSmoothScrollingControl();
        
    const toggleMenu = () => {
        if (isMenuOpen)
            closeMenu(1000);
        else
            openMenu();
    };

    const openMenu = () => {
        setIsMenuOpen(true);
        setIsHidden(false);
    }

    const closeMenu = (delay: number) => {
        setIsMenuOpen(false);
        setTimeout(() => {
            setIsHidden(true);
        }, delay);
    }

    useEffect(() => {
        closeMenu(0);
    }, [pathname]);

    // disable scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            if (lenis)
                lenis.stop();
            document.documentElement.style.overflowY = 'hidden';
        } else {
            if (lenis)
                lenis.start();
            document.documentElement.style.overflowY = 'auto';
        }
    }, [isMenuOpen, lenis]);

    const links = [
        { name: 'Accueil', href: '/'},
        { name: 'À propos', href: '/about'},
        { name: 'Me contacter', href: '/contact'},
    ];

    return (
        <header className={styles['header']}>
            <div className={styles['header__logo-container']}>
                <CustomLink href="/" aria-label="Retour à l'accueil">
                    <Logo className={styles['header__logo']} />
                </CustomLink>
            </div>
            <div className={styles['header__menu-container']}>
                <nav className={`${styles['nav']} ${styles['nav--desktop']}`}>
                    <ul>
                        {links.map((link) => (
                            <li key={link.name} >
                                <CustomLink
                                    href={link.href}
                                    className={clsx('hover-underline', styles['nav__link'], {[styles['nav__link--active']]: pathname === link.href})}>
                                    {link.name}
                                </CustomLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <BurgerMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} />
            </div>
            <nav 
                className={clsx(
                    styles['nav'],
                    styles['nav--mobile'],
                    isMenuOpen ? styles['nav--open'] : styles['nav--closed'])}
                style={{ visibility: isHidden ? 'hidden' : 'visible'}}>
                <ul>
                    {links.map((link) => (
                        <li key={link.name} >
                            <CustomLink
                                href={link.href}
                                className={styles['nav__link']}
                                onClick={() => {link.href === pathname && closeMenu(1000)}}>
                                <MdArrowOutward className={styles['nav__link__arrow']} />
                                <span className={styles['nav__link__name']}>
                                    {link.name}
                                </span>
                            </CustomLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}