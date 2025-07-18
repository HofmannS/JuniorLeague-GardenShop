import React from 'react'
import IcxImage from "../../assets/Images/ic x.png"
import SecateursImage from "../../assets/Images/Secateurs.png"
import HeartImage from "../../assets/Images/Heart empty.png"
import "./ModalDiscount.scss"

const ModalDiscount = ({onClose}) => {
    return (
        <div className='modal' onClick={(e) => e.stopPropagation()}>
            <div className='modal__title'>
                <div className='modal__title-description'>
                    <p>50% discount on</p>
                    <p>product of the day!</p>
                </div>
                <div className='modal__close-button' onClick={onClose}>
                    <img src={IcxImage} alt="exit" />
                </div>
            </div>

            <div className='modal__content'>
                <div className='modal__content-image'>
                    <img src={SecateursImage} alt="Secateurs" />
                </div>
                <div className='modal__content-discont'>-50%</div>
                <div className='modal__content-favorite'>
                    <img src={HeartImage} alt="Heart" />
                </div>                
                <div className='modal__content-info'>
                    <div className='modal__content-name'>
                        <p>Secateurs</p>
                    </div>
                    <div className='modal__content-price'>
                        <p className='modal__content-price-new'>$120</p>
                        <p className='modal__content-price-old'>$240</p>
                    </div>
                </div>
            </div>
            <div className='modal__button'>
                <button>Add to cart</button>
            </div>
        </div>
    )
}
export default ModalDiscount