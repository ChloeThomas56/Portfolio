import { usePathname } from 'next/navigation';
import { useSmoothScrollingControl } from '@/components/ui/SmoothScrolling';
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';

interface LinkProps {
    name: string;
    href: string;
}

export default function MobileNav({ links, show, setShow }: { links: LinkProps[], show: boolean, setShow: (show: boolean) => void }) {
    const pathname  = usePathname();
    const lenis     = useSmoothScrollingControl();

    const handleClick = (href: string) => {
        if (pathname === href)
            setShow(false);
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.nav
                    initial={{ top: '-100vh' }}
                    animate={{ top: 0 }}
                    exit={{ top: '-100vh' }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="mobile-nav"
                    onAnimationStart={() => {
                        lenis?.stop();
                        document.documentElement.style.overflowY = 'hidden';
                    }}
                    onAnimationComplete={(animation: { top: string}) => {
                        if (animation.top === "-100vh") {
                            lenis?.start();
                            document.documentElement.style.overflowY = 'auto'; 
                        }
                    }}
                >
                    <motion.ul
                        initial={{ y: -150, opacity: 0 }}
                        animate={{ 
                            y: 0, 
                            opacity: 1,
                            transition: { duration: 1.5, delay: 0.4, ease: [0.19, 1, 0.22, 1] }
                        }}
                        exit={{
                            y: -150,
                            opacity: 0,
                            transition: { duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }
                        }}
                    >
                        {links.map((link) => (
                            <li key={link.name} >
                                <Link 
                                    href={link.href} 
                                    className="nav-item"
                                    onClick={() => handleClick(link.href)}
                                    scroll={false}>
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