import React from 'react'
import { technologies } from '../../data/technologies'
import TechGroup from './TechGroup'

const Technologies = () => {
    return (
        <div id="tech" className="px-3 py-5 md:px-10 dark:bg-gray-700">
            <div className="text-4xl pt-20 font-semibold text-gray-800 dark:text-gray-200">Technologies</div>
            <div className="grid sm:grid-cols-3 place-items-center items-start mt-10 gap-10">
                {technologies.map(group => {
                    return (
                        <TechGroup key={group.title} stacks={group.stacks} title={group.title} />
                    )
                })}
            </div>
        </div>
    )
}

export default Technologies