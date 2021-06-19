import React, { useContext } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { ThemeContext } from '../Theme'

const Layout = ({ children }) => {

    const [ darkMode, toggleMode ] = useContext(ThemeContext)

    return (
        <div className={`${darkMode ? "dark" : ""} overscroll-contain scroll-smooth`}>
            <Header/>
            {children}
            <Footer />
        </div>
    )
}

export default Layout