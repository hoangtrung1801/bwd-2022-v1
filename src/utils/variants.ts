import { Variants } from "framer-motion";

export const screenLoadingVariants: Variants = {
    initial: {
        y: 0
    },
    exit: {
        y: '-100%',
        transition: {
            duration: 1.5
        }
    }
}