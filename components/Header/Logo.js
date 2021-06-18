import React from 'react'
import Link from 'next/link';

const Logo = () => {
    return (
        <div className="">
            <Link href="/">
                <a>
                    <h3 className="text-gray-600 font-semibold dark:text-gray-400">Rommel V.</h3>
                </a>
            </Link>
        </div>
    )
}

export default Logo