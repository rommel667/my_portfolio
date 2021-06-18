import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Theme from '../Theme'

const Layout = ({ children, darkMode, setDarkMode }) => {
    return (
        <>
            <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
            {children}
            <Footer />
        </>
    )
}

export default Layout