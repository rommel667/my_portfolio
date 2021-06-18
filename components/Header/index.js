import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Mode from './Mode'


const Header = () => {
    return (
        <div className="flex flex-row p-6 items-center justify-between dark:bg-gray-700">
            <Logo />
            <Menu />
            <Mode />
        </div>
    )
}

export default Header