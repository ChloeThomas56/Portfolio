'use client';

import { motion, Variants } from 'framer-motion';

export default function LineReveal({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    
    const lineReveal: Variants = {
        initial: { y: "100%"},
        animate: { 
            y: 0, 
            transition: { duration: 0.5, delay: delay }
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