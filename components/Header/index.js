import React from 'react'
import Logo from './Logo'
import Menu from './Menu'


const Header = () => {
    return (
        <div className="flex flex-row p-6 items-center justify-between">
            <Logo />
            <Menu />
        </div>
    )
}

export default Header