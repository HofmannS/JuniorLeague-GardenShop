import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './CartForm.scss'
import octagon from '../../../assets/images/icons/x-octagon.png'

const CartForm = ({ cartItems }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, cartItem) => {
    const price = cartItem.discont_price || cartItem.price
    return sum + price * cartItem.quantity
  }, 0)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onSubmit'
  })

  const onSubmit = (data) => {
    console.log('Order placed:', { ...data, cartItems, totalItems, totalPrice })

    setIsSubmitted(true)
    reset()
  }

  const nameRegister = register("name", {
    required: "Required field",
    pattern: {
      value: /^[A-Za-zА-Яа-яЁё\s'-]+$/,
      message: "Only letters, spaces, hyphens and apostrophes allowed"
    }
  })
  const phoneRegister = register("phone", {
    required: "Required field",
    pattern: {
      value: /^\+?[0-9\s\-()]{7,20}$/,
      message: "Please enter a valid phone number"
    }
  })
  const emailRegister = register('email', {
    required: "Required field",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Please enter a valid email address"
    }
  })

  return (
    <div className="order-form">
      <h3 className="order-form__title">Order Details</h3>

      <div className="order-form__summary">
        <p className="order-form__summary-item">
          {totalItems} items
        </p>
        <p className="order-form__summary-item">
          Total
          <p className="order-form__summary-price">${totalPrice.toFixed(2)}</p>
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__item">
          <input type="text" placeholder="Name" {...nameRegister} />
          {errors.name && (
            <p className="error__message">
              <img src={octagon} alt="error-icon" />
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="form__item">
          <input type="tel" placeholder="Phone number" {...phoneRegister} />
          {errors.phone && (
            <p className="error__message">
              <img src={octagon} alt="error-icon" />
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="form__item">
          <input type="email" placeholder="Email" {...emailRegister} />
          {errors.email && (
            <p className="error__message">
              <img src={octagon} alt="error-icon" />
              {errors.email.message}
            </p>
          )}
        </div>

        {isSubmitted && (
          <div className="modal">
            <div className="modal__content">
              <button className="modal__close" onClick={() => setIsSubmitted(false)}>&times;</button>
              <h2>Congratulations!</h2>
              <p>Your order has been successfully placed on the website.<br />
                A manager will contact you shortly to confirm your order.</p>
            </div>
          </div>
        )}

        <button type="submit" className={`order-form__btn ${isSubmitted ? 'submitting' : ''}`} disabled={isSubmitted}>
          {isSubmitted ? 'Order Placed' : 'Order'}
        </button>
      </form>
    </div>
  )
}

export default CartForm
