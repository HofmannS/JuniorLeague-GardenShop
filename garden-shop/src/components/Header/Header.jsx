import React, { useEffect, useState } from "react";
import { SlHandbag, SlHeart } from "react-icons/sl";
import ThemeToggle from "./SwitchThemeToggle/SwitchThemeToggle";
import Navbar from "./Navbar/Navbar";
import "./Header.scss";
import logoIcon from "../../assets/Images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";

const Header = () => {

    const [favoritesCount, setFavoritesCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const updateCounts = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setFavoritesCount(favorites.length);
    setCartCount(cart.length);
  };

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
        <header className="header">
            <div className="container header__inner">
                <div className="header__left">
                    <div className="header__logo">
                        <Link to="/"><img src={logoIcon} alt="Логотип" /> </Link>
                    </div>
                    <ThemeToggle />
                </div>
                <Navbar />
                <div className="header__icons">
                    <div className="header__icons-wrapper">
                        <NavLink to="/favorites"><SlHeart size={38} />
                        {favoritesCount > 0 && (
                            <span className="header__icons-badge">
                                {favoritesCount}
                            </span>
                        )}
                        </NavLink>
                    </div>
                    <div className="header__icons-wrapper">
                        <NavLink to="/cart"> 
                        <SlHandbag size={38} />
                        {cartCount > 0 && (
                            <span className="header__icons-badge">
                                {cartCount}
                            </span>
                        )}
                        </NavLink>
                    </div>
                </div>
                <BurgerMenu />
            </div>
        </header>
    );
};

export default Header;
