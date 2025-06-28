import React from 'react'
import logoIcon from '../assets/Images/logo.svg'

const Logo = () => {
  return (
    <div className='header__logo'>
        <img src={logoIcon} alt="Логотип" />
    </div>
  )
}

export default Logo