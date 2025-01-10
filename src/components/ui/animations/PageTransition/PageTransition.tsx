import { useRouter } from 'next/router';
import { useSmoothScrollingControl } from '@/components/ui/SmoothScrolling/SmoothScrolling';
import { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Footer from '@/components/Footer/Footer';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const router    = useRouter();
    const lenis     = useSmoothScrollingControl();

    useEffect(() => {
        if ('scrollRestoration' in window.history)
            window.history.scrollRestoration = 'manual';

        const handlePopState = (state: any) => {
            state.options.scroll = false;
            return true;
        };

        router.beforePopState(handlePopState);

        return () => {
            router.beforePopState(() => true);
        };
    }, [router]);

    const disableScroll = () => {
        lenis?.stop();
        document.documentElement.style.overflowY = 'hidden';
    }

    const enableScroll = () => {
        lenis?.start();
        document.documentElement.style.overflowY = 'auto';
    }

    const transition: Variants = {
        initial: {
            opacity: 0, 
            y: 75
        },
        enter: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.66, 1] }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.4 }
        }
    }

    return (
        <motion.div
            variants={transition}
            initial="initial"
            animate="enter"
            exit="exit"
            onAnimationStart={(variant) => {
                disableScroll();

                if (variant === 'enter') 
                    window.scrollTo(0,0);            
            }}
            onAnimationComplete={(variant) => {
                if (variant === 'enter')
                    enableScroll();
            }}
        >
            {children}
            <Footer />
        </motion.div>
    );
}