import { Variants } from "framer-motion";

export const screenLoadingVariants: Variants = {
    initial: {
        y: 0
    },
    exit: {
        y: '-100%',
        transition: {
            duration: 1
        }
    }
}

export const carouselItemContentVariatns: Variants = {
    hidden: {
        y: 200,
        opacity: 0,
        transition: {
            type: 'spring',
            delay: 0.3
        }
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            delay: 0.75
        }
    }
}