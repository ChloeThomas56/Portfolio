import { motion } from 'framer-motion';
import { textReveal } from '@/lib/variants';

export default function Title({ as: Tag = "h1", children }: { as?: React.ElementType, children: React.ReactNode }) {
    return (
        <Tag className="title">
            <span className="line-wrapper">
                <motion.span
                    variants={textReveal}
                    initial="initial"
                    animate="enter"
                >
                    {children}
                </motion.span>
            </span>
        </Tag>
    )
}