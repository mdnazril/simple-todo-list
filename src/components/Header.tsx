import React from 'react'
import logo from "@/assets/logo.png";

type Props = {
    addTask: (e: any) => void,
    newTask: string,
    setNewTask: (value: string) => void,
}

const Header = (props: Props) => {
    const { addTask, newTask, setNewTask } = props;

    return (
        <div className='bg-secondary w-full flex flex-1 justify-center p-4'>
            <div className='flex flex-1 flex-col justify-center sm:flex-row items-center w-full max-w-[1440px] gap-4'>

                <img src={logo} alt='logo' className='w-16 sm:w-20' />

                <form className='flex w-full sm:w-[50rem] gap-2'>
                    <input
                        type="text"
                        className='bg-white flex-1 rounded-md p-2 text-black outline-none'
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Enter a task..."
                    />
                    <button
                        className='bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'
                        onClick={(e) => addTask(e)}
                    >
                        Add Task
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Header;
