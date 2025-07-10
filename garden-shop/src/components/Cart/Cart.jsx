import React, { useEffect, useState } from 'react'
import Panel from '@components/Panel/Panel'
import ProductCard from '@components/ProductCard/ProductCard'
import './Cart.scss'

const Cart = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(cart)
  }, [])

  // Заглушка — в реальности по id нужно подтянуть данные о товаре из стора или api  
  // пока можно оставить статично или передавать пропсом из App, если нужно  
  // или хранить объекты в cart, не только id

  return (
    <div className="cart-page">
      <Panel
        title="Shopping cart"
        items={cartItems}
        buttonText="Back to the store"
        link="/"
        isLoading={false}
        skeleton={null}
        renderItem={(itemId) => (
          <div key={itemId}>
            {/* Заглушка под карточку товара, когда будет полноценное подключение */}
            <ProductCard id={itemId} />
          </div>
        )}
      >
        {cartItems.length === 0 && (
          <div className="cart-empty">
            <p className="cart-empty__text">
              Looks like you have no items in your basket currently.
            </p>
            <button className='cart-empty__btn'>Continue Shopping</button>
          </div>
        )}
      </Panel>
    </div>
  )
}

export default Cart