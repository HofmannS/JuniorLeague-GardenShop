import React, { useEffect, useState } from "react";
import ThemeToggle from "./SwitchThemeToggle/SwitchThemeToggle";
import Navbar from "./Navbar/Navbar";
import "./Header.scss";
import logoIcon from "../../assets/Images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu.jsx";
import handbagIcon from "../../assets/Images/icons/basket=card-empty.png";
import favoriteIcon from "../../assets/Images/icons/basket=heartempty.png";
import ModalDiscount from "../../components/ModalDiscount/ModalDiscount.jsx";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            <Link to="/">
              <img src={logoIcon} alt="Логотип" />{" "}
            </Link>
          </div>
          <ThemeToggle />
        </div>
        <Navbar onDiscountClick={openModal} />
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <ModalDiscount onClose={closeModal} />
          </div>
        )}
        <div className="header__icons">
          <div className="header__icons-wrapper">
            <NavLink to="/favorites">
              <img
                src={favoriteIcon}
                alt="Favorite"
                className="header__icons-image"
              />
              {favoritesCount > 0 && (
                <span className="header__icons-badge">{favoritesCount}</span>
              )}
            </NavLink>
          </div>
          <div className="header__icons-wrapper">
            <NavLink to="/cart">
              <img
                src={handbagIcon}
                alt="Cart"
                className="header__icons-image"
              />
              {cartCount > 0 && (
                <span className="header__icons-badge">{cartCount}</span>
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
