import React from 'react'
import { projects } from '../../data/projects'
import Project from './Project'


const Projects = () => {
    return (
        <div id="projects" className="px-10">
            <div>Projects</div>
            <div className="grid md:grid-cols-2">
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