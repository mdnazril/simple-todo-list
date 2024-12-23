import React, { useState } from 'react'
import styles from "./HomeScreen.module.css";

type Props = {
    [key: string]: any,
}

type task = {
    task: string,
    complete: boolean
}

const HomeScreen = (props: Props) => {

    const [tasks, setTasks] = useState<task[]>([]);
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

    const deleteTask = (index: number) => {

        const filteredTask = tasks.filter((task, i) => i !== index);

        setTasks(filteredTask);

    };

    const completeTask = (index: number) => {

        const updateTask = tasks.map((task, i) =>

            i === index ? { ...task, complete: !task.complete } : task
        );

        setTasks(updateTask);
    };

    return (
        <div className='bg-slate-100 text-black px-4 pb-4 rounded-lg w-full sm:w-[90vw] md:w-[70vw] lg:w-[50vw] max-w-[400px] min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] mx-auto'>

            <h1 className='text-start py-3'>Todo App</h1>

            <form className='flex gap-2'>
                <input
                    type="text"
                    className='bg-white flex-1 rounded-md'
                    value={newTask}
                    onChange={(e) => { setNewTask(e.target.value) }}
                />
                <button className='bg-blue-500 text-white' onClick={addTask}>Add</button>
            </form>

            <div className='flex flex-col gap-3 mt-3'>
                {tasks?.map((task, index) => (
                    <div key={index} className="bg-slate-200 rounded-md flex items-center justify-between">
                        <p className={`px-2 ${task.complete ? "line-through text-gray-500" : ""}`}>
                            {task.task}
                        </p>

                        <div className='flex gap-2'>
                            <button className='bg-green-500 text-white' onClick={() => completeTask(index)}>done</button>
                            <button className='bg-red-500 text-white' onClick={() => deleteTask(index)}>x</button>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default HomeScreen