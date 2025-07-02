import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlHandbag, SlHeart } from "react-icons/sl";
import "./ProductCard.scss";

const ProductCard = ({ id, image, title, price, discont_price }) => {
  let discont_percent = null;
  if (discont_price !== null) {
    discont_percent = (((price - discont_price) / price) * 100).toFixed(2);
  }

  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  return (
    <div className="product__item">
      <Link to={`/product/${id}`}>
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
          <p className="product__item__price__new">
            ${discont_price && discont_price}
          </p>
          <p
            className="product__item__content__price__old"
            style={{
              textDecoration: "line-through",
              color: "var(--color-txt-muted)",
            }}
          >
            ${price}
          </p>
        </div>
      </Link>
      <div className="icons">
        <button className="icons__favorite">
          <SlHeart
            size={30}
            color={isFavorite ? "var(--color-sale)" : ""}
            onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
        }}
          />
        </button>
        <button className="icons__cart">
          <SlHandbag
            size={30}
            color={isInCart ? "var(--color-sale)" : ""}
            onClick={(e) => {
            e.stopPropagation();
            setIsInCart(!isInCart);
        }}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
