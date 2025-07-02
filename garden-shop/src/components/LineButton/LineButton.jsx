import React from 'react'
import './LineButton.scss'
import { Link } from 'react-router-dom'

const LineButton = ({ name, link }) => {
    return (
        <div className="button__container">
            <div className="header__line"></div>
            <Link to={link}><button >{name}</button></Link>
        </div>
    )
}

export default LineButton