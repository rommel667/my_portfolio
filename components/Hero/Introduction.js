import React from 'react'

const Introduction = () => {
    return (
        <div className="row-span-full col-start-1 col-span-4 flex flex-col justify-center">
            <div className="md:w-5/6 space-y-6">
                <div className="text-gray-800 dark:text-gray-300 md:text-4xl lg:text-5xl xl:text-6xl text-xl font-bold tracking-wider font-serif">
                    I Am <br />
                    Rommel Velasco
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xl tracking-wider leading-loose">
                    <div>A Licensed Electronics Engineer by profession.</div>
                    <div>Learning new things and making an idea come to life is my passion.</div>
                    <div>Creating Web and Mobile application for FUN and and also for MONEY hopefully.</div>
                </div>
                <button
                    type="button"
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-4 rounded-2xl md:w-3/6"
                >
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default Introduction