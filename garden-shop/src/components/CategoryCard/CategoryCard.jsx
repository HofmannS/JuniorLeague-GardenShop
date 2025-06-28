import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryCard.scss'

const CategoryCard = ({ id, image, title }) => {
  return (
    <div className='category__item'>
      <Link to={`/category/${id}`}>
        <div className="category__item__image">
          <img src={`${import.meta.env.VITE_APP_API_URL}${image}`} alt={title} />
        </div>
        <div className="category__item__title">
          <p>{title}</p>
        </div>

      </Link>
    </div>
  )
}

export default CategoryCard