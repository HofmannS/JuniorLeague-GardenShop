import React, { useEffect, useState } from 'react'
import "./ProductDetails.scss";

const ProductDetails = ({ product, loading, error }) => {

    const [quantity, setQuantity] = useState(1);
    const [favorite, setFavorite] = useState(false);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (product && product.id) {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            setFavorite(favorites.includes(product.id))
        }
    }, [product])

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;
    if (!product) return null;

    const imageUrl = `${import.meta.env.VITE_APP_API_URL}${product.image}`

    const discontPercent =
        product.discont_price && product.price
            ? Math.round(((product.price - product.discont_price) / product.price) * 100)
            : null;

    const shortDescription = product.description?.slice(0, 150) || '';
    const isLongDescription = product.description && product.description.length > 150;

    const handleQuantityChange = (change) => {
        setQuantity((prev) => Math.max(prev + change, 1))
    };

    const toggleFavorite = () => {
        if (!product?.id) return;
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        let updatedFavorites;
        if (favorite) {
            updatedFavorites = favorites.filter(id => id !== product.id)
        } else {
            updatedFavorites = [...favorites, product.id]
        }
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
        setFavorite(!favorite)
    }

    const handleAddToCart = () => {
        if (!product?.id) return;
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        for (let i = 0; i < quantity; i++) {
            cart.push(product.id)
        }
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <div className='product__details container'>
            <div className="product__details__image" onClick={() => setIsModalOpen(true)}>
                <img
                    src={imageUrl}
                    alt={product.title}
                />
            </div>

            <div className='product__details__info'>
                <div className='product__details__header'>
                    <h1 className='title'>{product.title}</h1>
                    <button
                        className={`favorite-btn ${favorite ? "active" : ""}`}
                        onClick={toggleFavorite}
                    ></button>
                </div>

                <div className='product__details__price'>
                    <div className='price__wrapper'>
                        {product.discont_price ? (
                            <>
                                <p className='price__new'>${product.discont_price}</p>
                                <p className='price__old'>${product.price}</p>
                            </>
                        ) : (
                            <p className='price__new'>${product.price}</p>
                        )}
                        {discontPercent &&
                            <div className="product__item__discount">-{discontPercent}%</div>
                        }
                    </div>
                </div>

                <div className='product__details__purchase'>
                    <div className='quantity__control'>
                        <button className='quantity__button' onClick={() => handleQuantityChange(-1)} >-</button>
                        <input type="number" min='1' value={quantity}
                            onChange={(inputEvent) => {
                                let value = parseInt(inputEvent.target.value);
                                setQuantity(isNaN(value) || value < 1 ? 1 : value);
                            }}
                            className='quantity__input'
                        />
                        <button className='quantity__button' onClick={() => handleQuantityChange(1)} >+</button>
                    </div>

                    <button className='cart__button' onClick={handleAddToCart}>Add to cart</button>
                </div>

                <div className='product__details__description'>
                    <h2>Description</h2>
                    {isDescriptionOpen || !isLongDescription ? product.description : shortDescription + '...'}
                    {isLongDescription && (
                        <button className='read__more__button' onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
                            {isDescriptionOpen ? 'Show less' : 'Read more'}
                        </button>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <div className='modal' onClick={() => setIsModalOpen(false)}>
                    <img src={imageUrl} alt={product.title} className='modal__image' onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    )
}

export default ProductDetails