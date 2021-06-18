import React, { useEffect, useState } from 'react'
import Layout from '../Layout'

const Theme = () => {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if(localStorage.getItem("dark")) {
            setDarkMode(localStorage.getItem("dark"))
        }
    }, [])

    return (
        <div className={darkMode ? "dark" : ""}>
            <Layout darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)} />
        </div>
    )
}


export default Theme