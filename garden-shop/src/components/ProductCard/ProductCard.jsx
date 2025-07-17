import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";


const ProductCard = ({ id, image, title, price, discont_price, from, categoryId, onFavoriteToggle }) => {
const [isFavorite, setIsFavorite] = useState(false);
const [isInCart, setIsInCart] = useState(false);

  let discont_percent = null;
  if (discont_price !== null) {
    discont_percent = (((price - discont_price) / price) * 100).toFixed(1);
  }

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    setIsFavorite(favorites.includes(id));
    setIsInCart(cart.some((item) => item.id === id));
  }, [id]);
  

  const toggleFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;

    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event('favoritesUpdated'));
    setIsFavorite(!isFavorite);

    if (onFavoriteToggle) onFavoriteToggle();
  };

  const toggleCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
  
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const existingItem = cart.find((item) => item.id === id);
    let updatedCart;
  
    if (existingItem) {
      updatedCart = cart.filter((item) => item.id !== id);
    } else {

      const productData = { id, image, title, price, discont_price, quantity: 1 };
      updatedCart = [...cart, productData];
    }
  
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
    setIsInCart(!existingItem);
  };


  return (
    <div className="product__item">
      <Link to={`/product/${id}`}
      state={{
        from,
        categoryId,
        productID: id,
        productTitle: title
      }}
      >
        <div className="product__item__image">
          <img
            src={`${import.meta.env.VITE_APP_API_URL}${image}`}
            alt={title}
          />

          {discont_percent && (
            <div className="product__item__discont">-{discont_percent}%</div>
          )}
        </div>
        <div className="product__line"></div>
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
      <div className="icons">
        <button
          className={`icons__button favorite ${isFavorite ? "active" : ""}`}
          onClick={toggleFavorite}
        ></button>
        <button
          className={`icons__button cart ${isInCart ? "active" : ""}`}
          onClick={toggleCart}
        ></button>
      </div>
    </div>
  );
};

export default ProductCard;
