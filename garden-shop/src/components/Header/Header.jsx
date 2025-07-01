import React from 'react'
import Logo from '@Logo'
import ThemeToggle from '@SwitchThemeToggle/SwitchThemeToggle'
import Navbar from '@Navbar'
import '@Header.scss'
import Icons from '@Icons'

const Header = () => {
    return (
        <header className='header container'>
            <Logo />
            <ThemeToggle />
            <Navbar />
            <Icons />
        </header>
    )
}

export default Header