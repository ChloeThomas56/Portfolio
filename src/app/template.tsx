'use client';

import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="popLayout">
        <motion.div
            key="background"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="page-transition"
        />
        <motion.div
            key="content"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", delay: 0.5, duration: 0.75 }}
            className="container">
            {children}
        </motion.div>
    </AnimatePresence>
  );
}