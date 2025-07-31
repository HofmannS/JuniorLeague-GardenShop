import React, { useEffect, useState } from "react";
import "./HeaderIcons.scss";
import { NavLink } from "react-router-dom";
import handbagIconDark from "@/assets/images/icons/basket=empty.png";
import favoriteIconDark from "@/assets/images/icons/basket=heartempty.png";
import handbagIconLight from "@/assets/images/icons/bag-white.png";
import favoriteIconLight from "@/assets/images/icons/heart-white.png";

const HeaderIcons = () => {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const updateCounts = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setFavoritesCount(favorites.length);
    setCartCount(cart.length);
  };

  useEffect(() => {
    const checkTheme = () => {
      const dark = document.documentElement.classList.contains("dark_theme");
      setIsDarkMode(dark);
    };

    checkTheme(); 

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    updateCounts();

    window.addEventListener("favoritesUpdated", updateCounts);
    window.addEventListener("cartUpdated", updateCounts);

    return () => {
      window.removeEventListener("favoritesUpdated", updateCounts);
      window.removeEventListener("cartUpdated", updateCounts);
    };
  }, []);

  return (
    <div className="header-icons">
      <div className="header-icons__item">
        <NavLink to="/favorites">
          <img
            src={isDarkMode ? favoriteIconLight : favoriteIconDark}
            alt="Favorite"
            className="header-icons__image"
          />
          {favoritesCount > 0 && (
            <span className="header-icons__badge">{favoritesCount}</span>
          )}
        </NavLink>
      </div>
      <div className="header-icons__item">
        <NavLink to="/cart">
          <img src={isDarkMode ? handbagIconLight : handbagIconDark} 
          alt="Cart" 
          className="header-icons__image" />
          {cartCount > 0 && (
            <span className="header-icons__badge">{cartCount}</span>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderIcons;
