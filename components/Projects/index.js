import React from 'react'
import { projects } from '../../data/projects'
import Project from './Project'


const Projects = () => {
    return (
        <div id="projects" className="px-3 md:px-10 dark:bg-gray-700">
            <div>Projects</div>
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