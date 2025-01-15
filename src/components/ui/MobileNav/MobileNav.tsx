import { usePathname } from 'next/navigation';
import { useSmoothScrollingControl } from '@/components/ui/SmoothScrolling/SmoothScrolling';
import { AnimatePresence, motion } from "framer-motion";
import { mobileNavFade, mobileNavSlide } from '@/lib/variants';
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
                    variants={mobileNavFade}
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
                        variants={mobileNavSlide}
                        initial="initial"
                        animate="enter"
                        exit="exit"
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