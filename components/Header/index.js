import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Mode from './Mode'
import Mobile from './Mobile'

const Header = () => {
    return (
        <div className="flex w-10/12 z-20 bg-transparent fixed mt-5">
            <div className="hidden md:flex flex-row items-center justify-between w-full">
                <Logo />
                <Menu />
                <Mode />
            </div>
            <div className="md:hidden w-full">
                <Mobile />
            </div>
        </div>
    )
}

export default Header