import styles from './mobileNav.module.scss'
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation';

interface LinkProps {
    name: string;
    href: string;
}

export default function MobileNav({ links, show, setShow }: { links: LinkProps[], show: boolean, setShow: (show: boolean) => void }) {
    const pathname = usePathname();

    const handleClick = (href: string) => {
        if (pathname === href) {
            setShow(false);
        }
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.nav
                    initial={{ top: '100vh' }}
                    animate={{ top: 0 }}
                    exit={{ top: '100vh' }}
                    transition={{ duration: 0.8, ease: [0.6, 0.14, 0, 1] }}
                    className={styles['nav']}
                >
                    <motion.ul
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ 
                            y: 0, 
                            opacity: 1,
                            transition: { duration: 1.5, delay: 0.4, ease: [0.19, 1, 0.22, 1] }
                        }}
                    >
                        {links.map((link) => (
                            <li key={link.name} >
                                <Link 
                                    href={link.href} 
                                    className="nav-item"
                                    onClick={() => handleClick(link.href)}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}