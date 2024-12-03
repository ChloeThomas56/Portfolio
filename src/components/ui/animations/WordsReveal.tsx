'use client';

import { motion, Variants } from 'framer-motion';

export default function WordsReveal({ text }: { text: string } ) {

    const wordsReveal: Variants = {
        initial: { y: "100%" },
        animate: (i: number) => ({
          y: 0,
          transition: { duration: 0.5, delay: 0.8 }
        })
    }

    return (
        <>
            {text.split(" ").map((word, index) => (
                <span 
                    key={index} 
                    className="line-wrapper">
                    <motion.span
                        key={index}
                        variants={wordsReveal}
                        initial="initial"
                        animate="animate"
                        custom={index}
                    >
                        {word}
                    </motion.span>
                </span>
            ))
            }
        </>
    );
}