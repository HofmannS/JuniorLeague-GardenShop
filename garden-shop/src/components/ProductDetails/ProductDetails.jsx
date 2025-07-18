import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/store/features/cartSlice'
import { toggleFavorite } from '@/store/features/favoriteSlice'
import './ProductDetails.scss'

const ProductDetails = ({ product, loading, error }) => {
    const [quantity, setQuantity] = useState(1)
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
  
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites)
    const isFavorite = favorites.includes(product?.id)
  
    useEffect(() => {
        // Синхронизация избранного и корзины составяем, т.к. нужно отслеживать обновления из localStorage
        window.addEventListener('favoritesUpdated', () => {})
        window.addEventListener('cartUpdated', () => {})
        return () => {
          window.removeEventListener('favoritesUpdated', () => {})
        //   window.removeEventListener('cartUpdated', () => {})
        }
      }, [])
    
      if (loading) return <p>Загрузка...</p>
      if (error) return <p>Ошибка: {error}</p>
      if (!product) return null
    
      const imageUrl = `${import.meta.env.VITE_APP_API_URL}${product.image}`
      const discontPercent =
        product.discont_price && product.price
          ? Math.round(((product.price - product.discont_price) / product.price) * 100)
          : null
    
      const shortDescription = product.description?.slice(0, 150) || ''
      const isLongDescription = product.description && product.description.length > 150
    
      const handleQuantityChange = (change) => {
        setQuantity((prev) => Math.max(prev + change, 1))
      }
    
      const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity }))
        window.dispatchEvent(new Event('cartUpdated'))
      }
    
      const handleToggleFavorite = () => {
        dispatch(toggleFavorite(product.id))
        window.dispatchEvent(new Event('favoritesUpdated'))
      }
    


    return (
        <div className='product-details container'>
            <div className="product-details__image" onClick={() => setIsModalOpen(true)}>
                <img
                    src={imageUrl}
                    alt={product.title}
                />
            </div>

            <div className='product-details__info'>
                <div className='product-details__header'>
                    <h1 className='product-details__title'>{product.title}</h1>
                    <button
                        className={`product-details__favorite ${isFavorite ? "active" : ""}`}
                        onClick={handleToggleFavorite}
                    ></button>
                </div>

                <div className='product-details__price'>
                    <div className='product-details__price-wrapper'>
                        {product.discont_price ? (
                            <>
                                <p className='product-details__price-new'>${product.discont_price}</p>
                                <p className='product-details__price-old'>${product.price}</p>
                            </>
                        ) : (
                            <p className='product-details__price-new'>${product.price}</p>
                        )}
                        {discontPercent &&
                            <div className="product-details__discount">-{discontPercent}%</div>
                        }
                    </div>
                </div>

                <div className='product-details__purchase'>
                    <div className='product-details__quantity'>
                        <button className='product-details__button' onClick={() => handleQuantityChange(-1)} ></button>
                        <p className='product-details__value'>{quantity}</p>
                        <button className='product-details__button' onClick={() => handleQuantityChange(1)} ></button>
                    </div>

                    <button className='product-details__button-cart' onClick={handleAddToCart}>Add to cart</button>
                </div>

                <div className='product-details__description'>
                    <h2>Description</h2>
                    {isDescriptionOpen || !isLongDescription ? product.description : shortDescription + '...'}
                    {isLongDescription && (
                        <button className='product-details__read-more' onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
                            {isDescriptionOpen ? 'Show less' : 'Read more'}
                        </button>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <div className='product-details__modal' onClick={() => setIsModalOpen(false)}>
                    <img src={imageUrl} alt={product.title} className='product-details__modal-image' onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    )
}

export default ProductDetails