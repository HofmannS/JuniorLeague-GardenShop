import React from "react";
import { SlHandbag, SlHeart } from "react-icons/sl";
import ThemeToggle from "./SwitchThemeToggle/SwitchThemeToggle";
import Navbar from "./Navbar/Navbar";
import "./Header.scss";
import logoIcon from "../../assets/Images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";

const Header = () => {
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
                    <div className="header__icons-favorite">
                        <NavLink to="/favorites"><SlHeart size={38} />
                        </NavLink>
                    </div>
                    <div className="header__icons-cart">
                        <NavLink to="/cart"> 
                        <SlHandbag size={38} />
                        </NavLink>
                    </div>
                </div>
                <BurgerMenu />
            </div>
        </header>
    );
};

export default Header;
