import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
    value: number;
};

const AnimatedNumber = ({ value }: Props) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(displayValue, value, {
            duration: 1,
            ease: "easeOut",
            onUpdate: (latest) => setDisplayValue(Math.round(latest)),
        });

        return () => controls.stop();
    }, [value]);

    return <motion.span>{displayValue}</motion.span>;
};

export default AnimatedNumber;
