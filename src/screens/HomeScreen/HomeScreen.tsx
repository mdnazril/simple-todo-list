import { fadeInFromLeft, fadeInFromRight } from '@/components/AnimationVariant'
import Header from '@/components/Header'
import Table from '@/components/Table'
import React, { useState } from 'react'

type Props = {
    [key: string]: any,
}

export type task = {
    task: string,
    complete: boolean
}

const HomeScreen = (props: Props) => {

    const [tasks, setTasks] = useState<task[]>([]);
    const [completedTasks, setCompletedTasks] = useState<task[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    const addTask = (e: any) => {

        e.preventDefault();

        if (newTask.trim() === "") {
            alert("put something in input")
            return
        };

        const task = { task: newTask, complete: false };

        setTasks([...tasks, task])

        setNewTask("");

    };

    const removeTask = (index: number, isCompleted: boolean) => {
        const setTasksList = isCompleted ? setCompletedTasks : setTasks;

        setTasksList(prev => prev.filter((_, i) => i !== index));
    };

    const completeTask = (index: number, isCompleted: boolean) => {
        const [sourceTasks, setSourceTasks] = isCompleted ? [completedTasks, setCompletedTasks] : [tasks, setTasks];
        const [targetTasks, setTargetTasks] = isCompleted ? [tasks, setTasks] : [completedTasks, setCompletedTasks];

        const taskToMove = sourceTasks[index];
        if (!taskToMove) return;

        const updatedTask = { ...taskToMove, complete: !isCompleted };

        setSourceTasks(prev => prev.filter((_, i) => i !== index));
        setTargetTasks(prev => [...prev, updatedTask]);
    };

    return (
        <div className='flex flex-1 flex-col justify-center items-center w-full h-full relative'>
            <Header addTask={addTask} newTask={newTask} setNewTask={setNewTask} />

            {tasks &&
                <Table list={tasks} heading="To Do" removeTask={removeTask} completeTask={completeTask} animation={fadeInFromLeft} />
            }

            {completedTasks &&
                <div className='pt-2 w-full'>
                    <Table list={completedTasks} heading="Done" removeTask={removeTask} completeTask={completeTask} animation={fadeInFromRight} />
                </div>
            }
        </div>
    )
}

export default HomeScreen