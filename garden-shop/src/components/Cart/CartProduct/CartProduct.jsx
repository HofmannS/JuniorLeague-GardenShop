import React from 'react'
import './CartProduct.scss'
import { Link } from 'react-router-dom'

const CartProduct = ({ id, image, title, price, discont_price, quantity, onRemove, onIncrease, onDecrease }) => {
  const formatPrice = (value) => {
    return Number.isInteger(value) ? value : value.toFixed(2);
  };
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
          <Link to={`/product/${id}`}>
            <p className='cart-product__title'>{title}</p>
          </Link>
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
                <p className='cart-product__price-new'>${formatPrice(discont_price * quantity)}</p>
                <p className='cart-product__price-old'>${formatPrice(price * quantity)}</p>
              </>
            ) : (
              <p className='cart-product__price-new'>${formatPrice(price * quantity)}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
