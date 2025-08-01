import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import DiscountFormImage from '../../assets/DiscountForm.png'
import octagon from '../../assets/images/icons/x-octagon.png'
import './DiscountForm.scss'

const FormError = ({ message }) => (
  <p className="form__error-message">
    <img src={octagon} alt="error-icon" />
    {message}
  </p>
)

const DiscountForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const hasSubmittedBefore = localStorage.getItem('discountSubmitted') === 'true'
    if (hasSubmittedBefore) {
      setIsSubmitted(true)
    }
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ mode: 'onSubmit' })

  const onSubmitHandler = (data) => {
    const existing = JSON.parse(localStorage.getItem('discountRequests') || '[]')
    const updated = [
      ...existing,
      {
        ...data,
        submittedAt: new Date().toISOString(),
        discount: '5%'
      }
    ]

    localStorage.setItem('discountRequests', JSON.stringify(updated))
    localStorage.setItem('lastDiscountUser', JSON.stringify(data))
    localStorage.setItem('discountSubmitted', 'true')

    setIsSubmitted(true)
    reset()
  }

  return (
    <div className="container">
      <div className="sale">
        <h2>5% off on the first order</h2>

        <div className="sale__content">
          <img className="sale__image" src={DiscountFormImage} alt="Discount banner" />

          <div className="sale__form">
            <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="form__item">
                <input
                  type="text"
                  placeholder="Name"
                  disabled={isSubmitted}
                  {...register('name', {
                    required: 'Required field',
                    pattern: {
                      value: /^[A-Za-zА-Яа-яЁё\s'-]+$/,
                      message: 'Only letters, spaces, hyphens and apostrophes allowed'
                    },
                    validate: (value) => value.trim() !== '' || 'Name cannot be only spaces'
                  })}
                />
                {errors.name && <FormError message={errors.name.message} />}
              </div>

              <div className="form__item">
                <input
                  type="tel"
                  placeholder="Phone number"
                  disabled={isSubmitted}
                  {...register('phone', {
                    required: 'Required field',
                    pattern: {
                      value: /^\+?[0-9\s\-()]{7,20}$/,
                      message: 'Please enter a valid phone number'
                    },
                    validate: (value) => value.trim() !== '' || 'Phone cannot be only spaces'
                  })}
                />
                {errors.phone && <FormError message={errors.phone.message} />}
              </div>

              <div className="form__item">
                <input
                  type="email"
                  placeholder="Email"
                  disabled={isSubmitted}
                  {...register('email', {
                    required: 'Required field',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                />
                {errors.email && <FormError message={errors.email.message} />}
                {isSubmitted && (
                  <p className="form__success-message">
                    The discount has been successfully sent by email
                  </p>
                )}
              </div>

              <div className="form__button">
                <button
                  type="submit"
                  className={`button ${isSubmitted ? 'button--submitted' : ''}`}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? 'Request Submitted' : 'Get a discount'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscountForm
