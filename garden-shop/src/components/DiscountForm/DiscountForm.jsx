import React, { useState } from 'react'
import DiscountFormImage from "../../assets/DiscountForm.png"
import "./DiscountForm.scss"
import { useForm } from 'react-hook-form'
import { XOctagon } from 'lucide-react'

const DiscountForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onSubmit'
    })

    const onSubmit = (data) => {
        console.log("Submitted data:", data)
        setIsSubmitted(true)
        reset()

        setTimeout(() => {
            setIsSubmitted(false)
        }, 3000)
    }

    const nameRegister = register("name", {
        required: "Required field",
        pattern: {
            value: /^[A-Za-zА-Яа-яЁё\s'-]+$/,
            message: "Only letters, spaces, hyphens and apostrophes allowed"
        },
        validate: value => value.trim() !== "" || "Name cannot be only spaces"
    })
    const phoneRegister = register("phone", {
        required: "Required field",
        pattern: {
            value: /^\+?[0-9\s\-()]{7,20}$/,
            message: "Please enter a valid phone number"
        },
        validate: value => value.trim() !== "" || "Phone cannot be only spaces"
    })
    const emailRegister = register('email', {
        required: "Required field",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email address"
        }
    })

    return (
        <div className='container'>
            <div className='sale'>
                <h2>5% off on the first order</h2>

                <div className='sale__content'>
                    <img className='sale__image' src={DiscountFormImage} alt="DiscountForm" />

                    <div className='sale__form'>
                        <form className='form' onSubmit={handleSubmit(onSubmit)}>
                            <div className='form__item'>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    {...nameRegister}
                                />
                                {errors.name && (
                                    <p className='error__message'>
                                        <XOctagon className="error__icon" />
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                            <div className='form__item'>
                                <input
                                    type='tel'
                                    placeholder='Phone number'
                                    {...phoneRegister}
                                />
                                {errors.phone && (
                                    <p className='error__message'>
                                        <XOctagon className="error__icon" />
                                        {errors.phone.message}
                                    </p>
                                )}
                            </div>
                            <div className='form__item'>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    {...emailRegister}
                                />
                                {errors.email && (
                                    <p className='error__message'>
                                        <XOctagon className="error__icon" />
                                        {errors.email.message}
                                    </p>
                                )}
                                {isSubmitted && (
                                    <p className='success__message'>The discount has been successfully sent by email</p>
                                )}
                            </div>
                            <div className='form__button'>
                                <button type='submit'>Get a discount</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscountForm            