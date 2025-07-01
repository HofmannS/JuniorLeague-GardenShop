import React from 'react'
import { Link } from 'react-router-dom'
import { SlHandbag, SlHeart } from "react-icons/sl";
import '@ProductCard.scss'

const ProductCard = ({ id, image, title, price, discont_price }) => {
    let discont_percent = null
    if (discont_price !== null) {
        discont_percent = (((price - discont_price) / price) * 100).toFixed(1)
    }



    return (
        <div className='product__item'>
            <Link to={`/product/${id}`}>
                <div className="product__item__image">
                    <img src={`${import.meta.env.VITE_APP_API_URL}${image}`} alt={title} />
                    <div className="icons">
                        <button className='icons__favorite'><SlHeart size={38}  /></button>
                        <button className='icons__cart'><SlHandbag size={38} /></button>
                    </div>
                    {discont_percent && <div className="product__item__discont">{discont_percent}%</div>}
                </div>
                <div className="product__item__content">
                    <p>{title}</p>
                </div>
                <div className="product__item__price">
  {discont_price ? (
    <>
      <p className="product__item__price__new">${discont_price}</p>
      <p className="product__item__price__old">
        ${price}
      </p>
    </>
  ) : (
    <p className="product__item__price__new">${price}</p>
  )}
</div>
            </Link>

        </div>
    )
}

export default ProductCard