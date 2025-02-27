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

    const removeTask = (index: number) => {

        const filteredTask = tasks.filter((task, i) => i !== index);

        setTasks(filteredTask);

    };

    const completeTask = (index: number, isCompleted: boolean) => {

        if (isCompleted) {
            const taskToMove = completedTasks[index];

            if (!taskToMove) return;

            const updatedTask = { ...taskToMove, complete: false };

            setCompletedTasks(prev => prev.filter((_, i) => i !== index));
            setTasks(prev => [...prev, updatedTask]);
        } else {
            const taskToMove = tasks[index];

            if (!taskToMove) return;

            const updatedTask = { ...taskToMove, complete: true };

            setTasks(prev => prev.filter((_, i) => i !== index));
            setCompletedTasks(prev => [...prev, updatedTask]);
        }
    };

    return (
        <div className='flex flex-1 flex-col justify-center items-center w-full h-full relative'>
            <Header addTask={addTask} newTask={newTask} setNewTask={setNewTask} />

            {tasks &&
                <Table list={tasks} heading="To Do" removeTask={removeTask} completeTask={completeTask} />
            }

            {completedTasks &&
                <div className='pt-2 w-full'>
                    <Table list={completedTasks} heading="Done" removeTask={removeTask} completeTask={completeTask} />
                </div>
            }
        </div>
    )
}

export default HomeScreen