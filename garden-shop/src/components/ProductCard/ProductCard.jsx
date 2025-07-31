import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@features/cartSlice";
import { toggleFavorite } from "@features/favoriteSlice";
import "./ProductCard.scss";



const ProductCard = ({ id, image, title, price, discont_price, from, categoryId}) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  let discont_percent = null;
  if (discont_price !== null) {
    discont_percent = (((price - discont_price) / price) * 100).toFixed(1);
  }

  useEffect(() => {
    setIsFavorite(favorites.includes(id)); //изменила
    setIsInCart(cart.some((item) => item.id === id));
  }, [favorites, cart, id]);
  

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();    
    dispatch(toggleFavorite(id));
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  const handleToggleCart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isInCart) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(addToCart({ id, image, title, price, discont_price, quantity: 1 }));
    }
    window.dispatchEvent(new Event("cartUpdated"));
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
          onClick={handleToggleFavorite}
        ></button>
        <button
          className={`icons__button cart ${isInCart ? "active" : ""}`}
          onClick={handleToggleCart}
        ></button>
      </div>
    </div>
  );
};

export default ProductCard;
