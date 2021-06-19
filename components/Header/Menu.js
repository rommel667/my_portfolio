import React from 'react'
import Link from 'next/link';

const Menu = () => {
    return (
        <ul className="flex space-x-6 text-lg font-semibold text-gray-700 dark:text-gray-300">
            <li>
                <Link href="#projects">
                    <a className="hover:text-gray-400">Projects</a>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                    <a className="hover:text-gray-400">Technologies</a>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <a className="hover:text-gray-400">About</a>
                </Link>
            </li>
        </ul>
    )
}

export default Menu