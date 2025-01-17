import { Variants } from 'framer-motion';

export const textReveal: Variants = {
    hidden: { 
        opacity: 0, 
        y: "100%" 
    },
    visible: {
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.66, 1] }
    }
}

export const pageTransition: Variants = {
    initial: {
        opacity: 0, 
        y: 50
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.25, ease: [0.2, 1, 0.66, 1] }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.25 }
    }
}

export const shapesFadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, delay: 0.25 }
    },
}

export const mobileNavFade: Variants = {
    initial: { opacity: 0 },
    enter: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.9, delay: 0.4 } 
    }
}

export const mobileNavSlide: Variants = {
    initial: { 
        y: -300, 
        opacity: 0 
    },
    enter: {
        y: 0, 
        opacity: 1,
        transition: { duration: 1.5, delay: 0.4, ease: [0.19, 1, 0.22, 1] }
    },
    exit: {
        y: -200,
        opacity: 0,
        transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
    }
}

export const modalBlur: Variants = {
    initial: { backdropFilter: 'blur(0px)' },
    enter: { 
        backdropFilter: 'blur(5px)',
        transition: { duration: 0.3, ease:"easeIn" } 
    },
    exit: { 
        backdropFilter: 'blur(0px)',
        transition: { duration: 0.3, ease:"easeIn" }  
    }
}

export const modalScale: Variants = {
    initial: { scale: 0 },
    enter: { 
        scale: 1,
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
    },
    exit: { 
        scale: 0,
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
    }
}