import { usePathname } from 'next/navigation';
import { useSmoothScrollingControl } from '@/components/ui/SmoothScrolling/SmoothScrolling';
import { AnimatePresence, motion, Variants } from "framer-motion";
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

    const transition: Variants = {
        initial: { opacity: 0 },
        enter: {
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.9, delay: 0.4 } 
        }
    }

    return (
        <AnimatePresence>
            {show && (
                <motion.nav
                    variants={transition}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    className="mobile-nav"
                    onAnimationStart={(variant) => {
                        if (variant === 'enter') {
                            lenis?.stop();
                            document.documentElement.style.overflowY = 'hidden';
                        }
                    }}
                    onAnimationComplete={(variant) => {
                        if (variant === 'exit') {
                            lenis?.start();
                            document.documentElement.style.overflowY = 'auto'; 
                        }
                    }}
                >
                    <motion.ul
                        initial={{ y: -300, opacity: 0 }}
                        animate={{ 
                            y: 0, 
                            opacity: 1,
                            transition: { duration: 1.5, delay: 0.4, ease: [0.19, 1, 0.22, 1] }
                        }}
                        exit={{
                            y: -200,
                            opacity: 0,
                            transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
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