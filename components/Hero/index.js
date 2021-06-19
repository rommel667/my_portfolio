import React from 'react'
import Introduction from './Introduction'
import BackgroundAnimation from './BackgroundAnimation'

const Hero = () => {
    return (
        <section id="home" className="grid md:grid-cols-5 mx-auto px-3 sm:px-6 md:px-10 pt-5 dark:bg-gray-700">
            <Introduction />
            <BackgroundAnimation />
        </section>
    )
}

export default Hero