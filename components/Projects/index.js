import React from 'react'
import { projects } from '../../data/projects'
import Project from './Project'


const Projects = () => {
    return (
        <div id="projects" className="px-3 md:px-10 dark:bg-gray-700">
            <div className="text-4xl pt-20 font-semibold text-gray-800 dark:text-gray-200">Projects</div>
            <div className="grid md:grid-cols-2 place-items-center">
                {projects.map(project => {
                    return (
                        <Project key={project.id} { ...project } />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects