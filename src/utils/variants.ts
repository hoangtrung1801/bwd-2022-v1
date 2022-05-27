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

export const categoryItemShow: Variants = {
    hidden: {
        // scale: 0.8,
        y: 50,
        opacity: 0,
    },
    visible: {
        // scale: 1,
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            delay: 0.2,
            duration: 0.75,
        }
    }

}

export const donateValueShow: Variants = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
        }
    }
}

export const inViewParentShow: Variants = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.05,
        },
    },
};

export const inViewScaleShow: Variants = {
    hidden: {
        scale: 0.9,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
        }
    }
}

export const inViewScaleParentShow: Variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                duration: 0.1,
                staggerChildren: 0.05
            }
        }

}

export const inViewScaleChildShow: Variants = {
        hidden: {
            scale: 0.9,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring'
            }
        }
}

export const inViewDropdownShow: Variants = {
        hidden: {
            y: -50,
            // scale: 0.9,
            opacity: 0
        },
        visible: {
            y: 0,
            // scale: 1,
            opacity: 1,
            transition: {
                type: 'spring'
            }
        }
}

export const inViewDropupShow: Variants = {
    hidden: {
        y: 75,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
        }
    }

}

export const inViewFromLeftShow: Variants = {
    hidden: {
        // scale: 0.8,
        x: -300,
        opacity: 0,
    },
    visible: {
        // scale: 1,
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            delay: 0.2,
            duration: 0.75,
        }
    }
}

export const inViewFromRightShow: Variants = {
    hidden: {
        x: 300,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            delay: 0.2,
            duration: 0.75,
        }
    }
}