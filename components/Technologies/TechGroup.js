import React from 'react'
import Tech from './Tech'

const TechGroup = ({ stacks, title }) => {
    return (
        <div className="border-2 rounded-md p-1 w-full">
            <div className="text-2xl flex justify-center border-2 rounded-md dark:text-gray-300 mb-5">{title}</div>
            <div className=" flex flex-col items-center">
            <div className="space-y-3 mx-5">
                {stacks.map(stack => {
                    return (
                        <Tech key={stack} stack={stack} />
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default TechGroup