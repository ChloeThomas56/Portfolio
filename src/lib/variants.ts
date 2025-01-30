import { Variants } from 'framer-motion';

export const pageTransition: Variants = {
    initial: {
        opacity: 0, 
        y: 50
    },
    enter: (custom) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: custom?.firstLoad ? 0.5 : 0.15, ease: [0.2, 1, 0.66, 1] }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.15 }
    }
}

export const textReveal: Variants = {
    initial: { 
        opacity: 0, 
        y: "100%"
    },
    enter: (custom) => ({
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, delay: custom?.firstLoad ? 0.45 : 0.1, ease: [0.2, 1, 0.66, 1] }
    }),
    exit: {
        opacity: 0, 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.2, 1, 0.66, 1] }
    }
}

export const shapesFadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, delay: 0.15 }
    }
}

export const mobileMenuFade: Variants = {
    initial: { opacity: 0 },
    enter: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: (custom) => ({
        opacity: 0,
        transition: { duration: 0.5, delay: custom?.exitDelay || 0 }
    })
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

export const projectsImagesSlidUp: Variants = {
    initial: { 
        opacity: 0, 
        y: 50,
    },
    enter: (custom) => ({ 
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: custom?.firstLoad ? 0.5 : 0.15, ease: [0.2, 1, 0.66, 1] }
    })
}