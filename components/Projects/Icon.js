import React, { useState } from 'react'

const Icon = ({ icons, stack }) => {

    const [ showLabel, setShowLabel ] = useState(false)

    return (
        <div key={stack} className="flex flex-col items-center">
            <div
                onMouseEnter={() => setShowLabel(true)}
                onMouseLeave={() => setShowLabel(false)}
                className={`${icons[stack].color} flex border-2 rounded-md p-1 border-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
                {icons[stack].component}
            </div>
            <p className={`${showLabel ? "text-gray-700 dark:text-gray-300" : "text-gray-50 dark:text-gray-700"} text-xs  `}>{showLabel ? stack : "q"}</p>
        </div>
    )
}

export default Icon