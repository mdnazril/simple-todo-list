import React, { useState } from 'react'

type Props = {
    [key: string]: any,
}

type task = {
    task: string,
    complete: boolean
}

const Home = (props: Props) => {

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
        <div className='flex justify-center items-center w-full h-full'>Home</div>
    )
}

export default Home