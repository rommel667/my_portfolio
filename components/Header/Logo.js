import React from 'react'
import Link from 'next/link';

const Logo = () => {
    return (
        <div className="">
            <Link href="/">
                <a className="flex flex-row items-center gap-2">
                    <h3 className="text-gray-700 font-semibold">Rommel V.</h3>
                </a>
            </Link>
        </div>
    )
}

export default Logo