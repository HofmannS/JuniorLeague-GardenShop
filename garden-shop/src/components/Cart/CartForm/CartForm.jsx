import React, { useState, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import './CartForm.scss'
import octagon from '../../../assets/images/icons/x-octagon.png'
import { useDispatch } from 'react-redux'
import { clearCart } from '@features/cartSlice'

const CartForm = ({ cartItems }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const savedUser = JSON.parse(localStorage.getItem('lastDiscountUser'))

  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    watch
  } = useForm({ mode: 'onSubmit' })

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('lastDiscountUser'))
    if (savedUser) {
      setValue('name', savedUser.name)
      setValue('phone', savedUser.phone)
      setValue('email', savedUser.email)
    }
  }, [setValue])

  const name = watch('name') || ''
  const phone = watch('phone') || ''
  const email = watch('email') || ''

  const hasDiscount = useMemo(() => {
    if (!savedUser) return false
    return (
      savedUser.name?.trim() === name.trim() &&
      savedUser.phone?.trim() === phone.trim() &&
      savedUser.email?.trim() === email.trim()
    )
  }, [name, phone, email, savedUser])

  const totalItems = cartItems.length

  const rawTotalPrice = useMemo(() => {
    return cartItems.reduce((sum, cartItem) => {
      const price = cartItem.discont_price || cartItem.price
      return sum + price * cartItem.quantity
    }, 0)
  }, [cartItems])

  const totalPrice = hasDiscount ? rawTotalPrice * 0.95 : rawTotalPrice

  const onSubmit = (data) => {
    console.log('Order placed:', {
      ...data,
      cartItems,
      totalItems,
      totalPrice,
      discountApplied: hasDiscount
    })

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
        <p className="order-form__summary-item">{totalItems} items</p>
        <div className="order-form__summary-item">
          Total
          <p className="order-form__summary-price">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
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
              <div className="modal__text">
                <h2>Congratulations!</h2>
                <p>Your order has been successfully placed on the website.</p>
                <p>A manager will contact you shortly to confirm your order.</p>
              </div>
              <button className="modal__close"
               onClick={() => {
                setIsSubmitted(false)
                dispatch(clearCart())
                window.dispatchEvent(new Event("cartUpdated"))
              }}>&times;</button>
            </div>
          </div>
        )}

        <button
          type="submit"
          className={`order-form__btn ${isSubmitted ? 'submitting' : ''}`}
          disabled={isSubmitted}
        >
          {isSubmitted ? 'Order Placed' : 'Order'}
        </button>
      </form>
    </div>
  )
}

export default CartForm
