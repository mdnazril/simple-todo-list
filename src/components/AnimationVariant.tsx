export const fadeInFromTop = {
    initial: {
        opacity: 0,
        y: -50
    },
    animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.05, easeIn: 'ease' },
    })
};

export const fadeInFromLeft = {
    initial: {
        opacity: 0,
        x: -50
    },
    animate: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: 0.05, easeIn: 'ease' },
    })
};

export const fadeInFromRight = {
    initial: {
        opacity: 0,
        x: 50
    },
    animate: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: 0.05, easeIn: 'ease' },
    })
};