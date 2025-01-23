import { usePathname } from 'next/navigation';
import { useSmoothScrollingControl } from '@/components/ui/SmoothScrolling/SmoothScrolling';
import { AnimatePresence, motion } from "framer-motion";
import { mobileMenuFade, mobileMenuSlide } from '@/lib/variants';
import Link from 'next/link';
import { textReveal } from '@/lib/variants';
import SwitchLanguage from '../SwitchLanguage/SwitchLanguage';

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
                <motion.div
                    variants={mobileMenuFade}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    className="mobile-menu"
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
                    <div className="mobile-menu__inner">
                        <nav>
                            <ul>
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <motion.div
                                            variants={textReveal}
                                            initial="initial"
                                            animate="enter"
                                            exit="exit"
                                        >
                                            <Link 
                                                href={link.href} 
                                                onClick={() => handleClick(link.href)}
                                                scroll={false}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div style={{overflow: 'hidden'}}>
                            <motion.div
                                variants={textReveal}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                            >
                                <SwitchLanguage onClick={() => setShow(false)} />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}