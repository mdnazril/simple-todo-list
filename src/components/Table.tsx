import { task } from '@/screens/HomeScreen/HomeScreen'
import React, { useEffect, useRef } from 'react'
import { Checkbox } from './ui/checkbox';
import { AnimatePresence, motion } from "framer-motion"
import AnimatedNumber from './AnimatedNumber';

type Props = {
    list: task[],
    heading: string,
    completeTask: (index: number, isCompleted: boolean) => void,
    removeTask: (index: number, isCompleted: boolean) => void,
    animation
}

const Table = (props: Props) => {

    const { list, heading, completeTask, removeTask, animation } = props;
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [list.length]);

    return (
        <div ref={containerRef}
            className="w-full max-w-[1440px] mx-auto h-auto max-h-[40dvh] sm:max-h-[40dvh]
                       overflow-y-auto overflow-x-hidden px-2 relative">
            <motion.div
                variants={animation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex justify-between py-2 mb-4 border-b-2 sticky top-0 bg-background">
                <h1 className='font-medium text-3xl'>
                    {heading}
                </h1>
                <h1 className='font-medium text-3xl'>
                    <AnimatedNumber value={list.length} />
                </h1>
            </motion.div>

            <AnimatePresence>
                {list.map((row, i) => (
                    <motion.div
                        key={row.task}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-between py-1 w-full"
                    >
                        <div className='flex items-center flex-1 overflow-hidden'>
                            <Checkbox checked={row.complete} onCheckedChange={() => completeTask(i, row.complete)} />
                            <p className={`px-2 text-xl truncate break-words ${row.complete ? "line-through text-gray-500" : ""}`}>
                                {row.task}
                            </p>
                        </div>

                        <div className='flex gap-2'>
                            <button className='bg-primary px-4 py-2 rounded-md text-white' onClick={() => removeTask(i, row.complete)}>Remove</button>
                        </div>

                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default Table;
