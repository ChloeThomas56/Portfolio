'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();

    return (
        <div key={pathName}>
            <AnimatePresence mode="popLayout">
                <motion.div
                    key="background"
                    initial={{ y: "-100vh" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.6, 0.14, 0, 1] }}
                    className="page-transition"
                />
                <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", delay: 0.8, duration: 0.75 }}
                    className="container">
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
  );
}