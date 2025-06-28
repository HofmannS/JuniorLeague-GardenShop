import React from 'react'
import "./Header.scss"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <button className='navbar__discount-button'>1 day discount!</button>
        <ul className='navbar__nav-list'>
            <li>Main Page</li>
            <li>Categories</li>
            <li>All products</li>
            <li>All sales</li>
        </ul>
    </nav>
  )
}

export default Navbar