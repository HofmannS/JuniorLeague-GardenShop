import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({id, image, title}) => {
  return (
    <div className='category_item'>
        <Link to={`/category/${id}`}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </Link>    
    </div>
  )
}

export default Category