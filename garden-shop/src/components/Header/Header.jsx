import React from "react";
import { SlHandbag, SlHeart } from "react-icons/sl";
import ThemeToggle from "./SwitchThemeToggle/SwitchThemeToggle";
import Navbar from "./Navbar/Navbar";
import "./Header.scss";
import logoIcon from "../../assets/Images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__left">
          <div div className="header__logo">
            <img src={logoIcon} alt="Логотип" />
          </div>
          <ThemeToggle />
        </div>
        <Navbar />
        <div className="header__icons">
          <button className="header__icons-favorite">
            <SlHeart size={38} />
          </button>
          <button className="header__icons-cart">
            <SlHandbag size={38} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
