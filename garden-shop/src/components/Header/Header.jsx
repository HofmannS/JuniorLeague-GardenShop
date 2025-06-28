import React from 'react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import Navbar from './Navbar'
import './Header.scss'
import Icons from './Icons'

const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <ThemeToggle />
            <Navbar />
            <Icons />
        </header>
    )
}

export default Header