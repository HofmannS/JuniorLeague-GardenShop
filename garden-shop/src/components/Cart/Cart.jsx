import React, { useEffect, useState } from 'react'
import LineButton from '@components/LineButton/LineButton'
import CartProduct from '@components/Cart/CartProduct/CartProduct'
import './Cart.scss'
import CartForm from '@components/Cart/CartForm/CartForm'

const Cart = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(cart)
  }, [])

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }
  
  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }


  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    )
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }
  return (
    <div className="container">
      <div className="cart-panel">
        <div className="cart-panel__header">
          <h2 className="cart-panel__header__title">Shopping cart</h2>
          {<LineButton name={"Back to the store"} link={"/products"} />}
        </div>
        {cartItems.length !== 0 && (<div className="cart-panel__full">
          <div className="cart-panel__full__list">
            {cartItems && cartItems.map(
              (item) => (<CartProduct
                key={item.id}
                {...item}
                onRemove={removeItem}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
              />))}
          </div>
          <div className="cart-panel__full__form">
            <CartForm cartItems={cartItems} />
          </div>
        </div>)}
        {cartItems.length === 0 && (
          <div className="cart-panel__empty">
            <p className="cart-panel__empty__text">
              Looks like you have no items in your basket currently.
            </p>
            <button className='cart-panel__empty__btn'>Continue Shopping</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
