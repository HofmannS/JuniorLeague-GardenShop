import React from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <button className='navbar__discount-button'>1 day discount!</button>
      <ul className='navbar__nav-list'>
        <li> <NavLink to="/">Main Page</NavLink></li>
        <li> <NavLink to="/categories">Categories</NavLink></li>
        <li> <NavLink to="/products">All products</NavLink></li>
        <li> <NavLink to="/discount"> All sales</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar