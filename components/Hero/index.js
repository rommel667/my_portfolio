import React from 'react'
import Introduction from './Introduction'
import BackgroundAnimation from './BackgroundAnimation'

const Hero = () => {
    return (
        <section className="grid md:grid-cols-5 mx-auto px-10 pt-5">
            <Introduction />
            <BackgroundAnimation />
        </section>
    )
}

export default Hero