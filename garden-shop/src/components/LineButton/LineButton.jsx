import React from 'react'
import './LineButton.scss'

const LineButton = ({ name }) => {
    return (
        <div className="button__container">
            <div className="header__line"></div>
            <button>{name}</button>
        </div>
    )
}

export default LineButton