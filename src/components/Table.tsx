import { task } from '@/screens/HomeScreen/HomeScreen'
import React from 'react'
import { Checkbox } from './ui/checkbox';

type Props = {
    list: task[],
    heading: string,
    completeTask: (index: number, isCompleted: boolean) => void,
    removeTask: (index: number, isCompleted: boolean) => void,
}

const Table = (props: Props) => {

    const { list, heading, completeTask, removeTask } = props;

    return (
        <div className="w-full max-w-[1440px] mx-auto h-auto max-h-[40dvh] sm:max-h-[44dvh] overflow-y-auto px-2 relative">
            <div className="flex justify-between py-2 mb-4 border-b-2 sticky top-0 bg-background">
                <h1 className='font-medium text-3xl'>
                    {heading}
                </h1>
                <h1 className='font-medium text-3xl'>
                    {list.length}
                </h1>
            </div>

            {list.map((row, i) => (
                <div key={i} className="flex items-center justify-between py-1">
                    <div className='flex items-center'>
                        <Checkbox checked={row.complete} onCheckedChange={() => completeTask(i, row.complete)} />
                        <p className={`px-2 text-xl ${row.complete ? "line-through text-gray-500" : ""}`}>
                            {row.task}
                        </p>
                    </div>

                    <div className='flex gap-2'>
                        <button className='bg-primary px-4 py-2 rounded-md text-white' onClick={() => removeTask(i, row.complete)}>Remove</button>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Table