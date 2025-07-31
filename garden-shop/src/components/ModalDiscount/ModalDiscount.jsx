import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from "@features/productSlice";
import { toggleFavorite } from "@features/favoriteSlice";
import { addToCart } from "@features/cartSlice";

import IcxImage from "../../assets/Images/ic x.png"
import "./ModalDiscount.scss"

const ModalDiscount = ({ onClose }) => {
    const dispatch = useDispatch();
    const apiUrl = import.meta.env.VITE_APP_API_URL;

    const favorites = useSelector(state => state.favorites);
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    const [randomProduct, setRandomProduct] = useState(null);

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts())
        } else {
            getDailyProduct(products)
        }
    }, [dispatch, products])

    const getDailyProduct = (productList) => {
        const today = new Date().toISOString().split("T")[0];

        const stored = localStorage.getItem("dailyDiscount");
        if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed.date === today) {
                setRandomProduct(parsed.product);
                return;
            }
        }
        const index = Math.floor(Math.random() * productList.length);
        const selected = productList[index];
        setRandomProduct(selected);

        localStorage.setItem(
            "dailyDiscount",
            JSON.stringify({ date: today, product: selected })
        );
    }

    if (loading || !randomProduct) {
        return (
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <p className="modal__loading"></p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <p className="modal__error">Error: {error}</p>
            </div>
        );
    }

    const { title, image, price } = randomProduct;

    const handleAddToCart = () => {
        const discountedProduct = {
            ...randomProduct,
            discont_price: Number(discountedPrice),
            price: randomProduct.price
        }

        dispatch(addToCart({ ...discountedProduct, quantity: 1 }));
        window.dispatchEvent(new Event("cartUpdated"));
        onClose();
    }
    const isFavorite = favorites.includes(randomProduct.id);

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(randomProduct.id));



        window.dispatchEvent(new Event("favoritesUpdated"));
    };

    const discountedPrice = (price * 0.5).toFixed(2);

    return (
        <div className='modal' onClick={(e) => e.stopPropagation()}>
            <div className='modal__title'>
                <div className='modal__title-description'>
                    <p>50% discount on</p>
                    <p>product of the day!</p>
                </div>
                <div className='modal__close-button' onClick={onClose}>
                    <img src={IcxImage} alt="exit" />
                </div>
            </div>

            <div className='modal__content'>
                <div className='modal__content-image'>
                    <img src={`${apiUrl}${image}`} alt={title} />
                </div>
                <div className='modal__content-discont'>-50%</div>
                <button
                    className={`modal__content-favorite favorite ${isFavorite ? "active" : ""}`}
                    onClick={handleToggleFavorite}
                ></button>
                <div className='modal__content-info'>
                    <div className='modal__content-name'>
                        <p>{title}</p>
                    </div>
                    <div className='modal__content-price'>
                        <p className='modal__content-price-new'>${discountedPrice}</p>
                        <p className='modal__content-price-old'>${price}</p>
                    </div>
                </div>
            </div>
            <div className='modal__button'>
                <button onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    )
}
export default ModalDiscount