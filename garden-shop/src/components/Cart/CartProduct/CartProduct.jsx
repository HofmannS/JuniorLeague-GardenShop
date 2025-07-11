import React, { useState } from 'react'
import './CartProduct.scss'

const CartProduct = ({ id, image, title, price, discont_price, onRemove }) => {
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1))
    }

    return (
        <div className='cart-product'>
            <div className='cart-product__image'>
                <img
                    src={`${import.meta.env.VITE_APP_API_URL}${image}`}
                    alt={title}
                />
            </div>
            <div className='cart-product__info'>
                <div className='cart-product__info__top'>
                    <p className='cart-product__info__top__title'>{title}</p>
                    <button className='cart-product__info__top__remove'
                        onClick={() => onRemove(id)}
                    ></button>
                </div>

                <div className='cart-product__info__bottom'>
                    <div className='cart-product__info__bottom__quantity'>
                        <button className='cart-product__info__bottom__quantity__btn'
                            onClick={decreaseQuantity}></button>
                        <p className='cart-product__info__bottom__quantity__value'>{quantity}</p>
                        <button className='cart-product__info__bottom__quantity__btn'
                            onClick={increaseQuantity}></button>
                    </div>

                    <div className='cart-product__info__bottom__price'>
                        {discont_price ? (
                            <>
                                <p className='cart-product__info__bottom__price__new'>${discont_price * quantity}</p>
                                <p className='cart-product__info__bottom__price__old'>${price * quantity}</p>
                            </>
                        ) : (
                            <p className='cart-product__info__bottom__price__new'>${price * quantity}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
