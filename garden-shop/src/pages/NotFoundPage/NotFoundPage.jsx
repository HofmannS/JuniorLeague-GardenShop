import React from 'react'
import { useNavigate } from 'react-router-dom'
import FourImage from "../../assets/images/four.png"
import CactusImage from "../../assets/images/Cactus.png"
import "./NotFoundPage.scss"

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome  = () => {
    navigate( '/' )
  }

  return (
    <div className="container">
      <div className="not-found__container">
        <div className="not-found__pictures">
          <img className="not-found__image" src={FourImage} alt="four" />
          <img className="not-found__image" src={CactusImage} alt="cactus" />
          <img className="not-found__image" src={FourImage} alt="four" />
        </div>
        <div className="not-found__text">
          <p className="not-found__title">Page Not Found</p>
          <div className='not-found__description'>
            <p>We’re sorry, the page you requested could not be found.</p>
            <p>Please go back to the homepage.</p>
          </div>
          <button className="not-found__button" onClick={handleGoHome}>Go Home</button>
        </div>
      </div>
    </div>
  )
}
export default NotFoundPage