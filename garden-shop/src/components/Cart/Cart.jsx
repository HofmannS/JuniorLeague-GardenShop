import { useSelector, useDispatch } from 'react-redux'
import LineButton from '@components/LineButton/LineButton'
import CartProduct from '@components/Cart/CartProduct/CartProduct'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '@/store/features/cartSlice'
import './Cart.scss'
import CartForm from '@components/Cart/CartForm/CartForm'

const Cart = () => {
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
    window.dispatchEvent(new Event("cartUpdated"));
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
                {...item}
                onRemove={handleRemoveFromCart}
                onIncrease={() => dispatch(increaseQuantity(item.id))}
                onDecrease={() => dispatch(decreaseQuantity(item.id))}
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
