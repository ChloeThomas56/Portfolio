import { motion, Variants } from 'framer-motion';

export default function LineReveal({ children }: { children: React.ReactNode }) {
    
    const lineReveal: Variants = {
        initial: { opacity: 0, y: "100%"},
        animate: {
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.66, 1] }
        }
    }

    return (
        <span className="line-wrapper">
            <motion.span
                variants={lineReveal}
                initial="initial"
                animate="animate"
            >
                {children}
            </motion.span>
        </span>
    )
}