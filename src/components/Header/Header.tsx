import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { textReveal } from '@/lib/variants';
import Link from 'next/link';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import MobileNav from '../ui/MobileNav/MobileNav';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen]   = useState(false);
    const pathname                      = usePathname();
        
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const links = [
        { name: 'Accueil', href: '/'},
        { name: 'Projets', href: '/work'},
        { name: 'À propos', href: '/about'},
        { name: 'Me contacter', href: '/contact'},
    ];

    return (
        <>
            <header className="header">
                <motion.div 
                    className="header__inner"
                    variants={textReveal}
                    initial="hidden"
                    animate="visible"
                >
                    <div>
                        <Link href="/" className="nav-item header__nav-item" scroll={false}>
                            CT.
                        </Link>
                    </div>
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
                    <BurgerMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} />
                </motion.div>
            </header>
            <MobileNav links={links} show={isMenuOpen} setShow={setIsMenuOpen} />
        </>
    );
}