import React from 'react'
import Link from 'next/link';

const Logo = () => {
    return (
        <div className="">
            <Link href="#home">
                <a>
                    <h3 className="text-gray-600 text-lg font-bold dark:text-gray-400">Rommel V.</h3>
                </a>
            </Link>
        </div>
    )
}

export default Logo