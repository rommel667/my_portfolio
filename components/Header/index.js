import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Mode from './Mode'
import Mobile from './Mobile'

const Header = () => {
    return (
        <div className="fixed w-full z-20 bg-transparent">
            <div className="hidden md:flex flex-row p-6 items-center justify-between ">
                <Logo />
                <Menu />
                <Mode />
            </div>
            <div className="md:hidden bg-gray-300 dark:bg-gray-700">
                <Mobile />
            </div>
        </div>
    )
}

export default Header