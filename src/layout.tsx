import React from 'react'
import { ModeToggle } from './components/mode-toggle';
import Header from './components/Header';

type Props = {
    children: React.ReactNode;
}

const Layout = (props: Props) => {
    const { children } = props;
    return (
        <div className="relative min-h-screen w-full mx-auto overflow-x-hidden">
            {children}
            <ModeToggle classNames="absolute bottom-0 left-0 m-3 hidden sm:flex" />
        </div>
    )
}

export default Layout