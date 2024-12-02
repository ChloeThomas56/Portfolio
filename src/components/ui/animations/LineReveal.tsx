'use client';

import { motion, Variants } from 'framer-motion';

export default function LineReveal({ children }: { children: React.ReactNode }) {
    
    const lineReveal: Variants = {
        initial: { y: "-100%"},
        animate: { 
            y: 0, 
            transition: { duration: 0.5 }
        },
    }

    return (
        <div className="line-wrapper">
            <motion.div
                variants={lineReveal}
                initial="initial"
                animate="animate"
            >
                {children}
            </motion.div>
        </div>
    )
}