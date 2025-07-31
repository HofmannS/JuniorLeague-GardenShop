import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@features/cartSlice";
import { toggleFavorite } from "@features/favoriteSlice";
import "./ProductCard.scss";

const ProductCard = ({ id, image, title, price, discont_price, from, categoryId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.includes(id));
    setIsInCart(cart.some((item) => item.id === id));
  }, [favorites, cart, id]);

  const discountPercent = discont_price
    ? (((price - discont_price) / price) * 100).toFixed(1)
    : null;

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(id));
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  const handleToggleCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInCart) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(addToCart({ id, image, title, price, discont_price, quantity: 1 }));
    }
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="product-card">
      <Link
        to={`/product/${id}`}
        state={{ from, categoryId, productID: id, productTitle: title }}
      >
        <div className="product-card__image-wrapper">
          <img
            className="product-card__image"
            src={`${import.meta.env.VITE_APP_API_URL}${image}`}
            alt={title}
          />
          {discountPercent && (
            <div className="product-card__discount">-{discountPercent}%</div>
          )}
        </div>

        <div className="product-card__title">{title}</div>

        <div className="product-card__price">
          <span className="product-card__price-new">
            ${discont_price || price}
          </span>
          {discont_price && (
            <span className="product-card__price-old">${price}</span>
          )}
        </div>
      </Link>

      <div className="product-card__icons">
        <button
          className={`product-card__icon product-card__icon--favorite ${
            isFavorite ? "is-active" : ""
          }`}
          onClick={handleToggleFavorite}
        />
        <button
          className={`product-card__icon product-card__icon--cart ${
            isInCart ? "is-active" : ""
          }`}
          onClick={handleToggleCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
