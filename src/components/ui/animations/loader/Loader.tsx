'use client';

import styles from './loader.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useLoader } from './LoaderContext';
import { useEffect, useRef } from 'react';
import { useSmoothScrollingControl } from '@/components/ui/SmoothScrolling';
import LineReveal from '../LineReveal';

export default function Loader() {
    const { isLoading, setIsLoading }   = useLoader();
    const lenis                         = useSmoothScrollingControl();
    const timerRef                      = useRef<number | null>(null);

    useEffect(() => {
        timerRef.current = window.setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        // Nettoyage lors du démontage ou si l'effet est réexécuté
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null; // Réinitialiser la référence
            }
        };
    }, [setIsLoading]);

    useEffect(() => {
        lenis?.stop();
        document.documentElement.style.overflowY = 'hidden';
    }, [lenis]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className={`overlay ${styles['loader']}`}
                    initial={{ y: 0 }}
                    exit={{ y: '-100vh' }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    onAnimationComplete={() => {
                        lenis?.start();
                        document.documentElement.style.overflowY = 'auto';
                    }}
                >
                    <LineReveal delay={0.1}>
                        <span>CT.</span>
                    </LineReveal>
                </motion.div>
            )}
        </AnimatePresence>
    )
}