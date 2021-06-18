import React, { useContext } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { ThemeContext } from '../../pages'

const Layout = ({ children }) => {

    const [ darkMode, toggleMode ] = useContext(ThemeContext)

    return (
        <div className={darkMode && "dark"}>
            <Header/>
            {children}
            <Footer />
        </div>
    )
}

export default Layout