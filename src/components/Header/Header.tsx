import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LineReveal from '../ui/animations/LineReveal/LineReveal';
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
                <div className="header__inner">
                    <LineReveal>
                        <Link href="/" className="nav-item header__nav-item" scroll={false}>
                            CT.
                        </Link>
                    </LineReveal>
                    <nav className="header__nav">
                        <ul>
                            {links.map((link) => (
                                <li key={link.name} >
                                    <LineReveal>
                                        <Link href={link.href} className="nav-item header__nav-item" scroll={false}>
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