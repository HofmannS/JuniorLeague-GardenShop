import React from 'react'
import './CartProduct.scss'

const CartProduct = ({ id, image, title, price, discont_price, quantity, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className='cart-product'>
      <div className='cart-product__image'>
        <img
          src={`${import.meta.env.VITE_APP_API_URL}${image}`}
          alt={title}
        />
      </div>
      <div className='cart-product__info'>
        <div className='cart-product__header'>
          <p className='cart-product__title'>{title}</p>
          <button className='cart-product__remove-btn' onClick={() => onRemove(id)}></button>
        </div>

        <div className='cart-product__footer'>
          <div className='cart-product__quantity'>
            <button className='cart-product__quantity-btn' onClick={() => onDecrease(id)}></button>
            <p className='cart-product__quantity-value'>{quantity}</p>
            <button className='cart-product__quantity-btn' onClick={() => onIncrease(id)}></button>
          </div>

          <div className='cart-product__price'>
            {discont_price ? (
              <>
                <p className='cart-product__price-new'>${discont_price * quantity}</p>
                <p className='cart-product__price-old'>${price * quantity}</p>
              </>
            ) : (
              <p className='cart-product__price-new'>${price * quantity}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
