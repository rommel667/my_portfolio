import React from 'react'

const TechGroup = ({ stacks, title }) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                {stacks.map(stack => {
                    return (
                        <p key={stack}>{stack}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default TechGroup