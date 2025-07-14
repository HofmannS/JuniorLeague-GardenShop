import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.scss";
import { Sling as Hamburger } from "hamburger-react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="burger">
      <div className="burger__icon">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={30}
          direction="right"
        />
      </div>
      {isOpen && <div className="burger__backdrop" onClick={closeMenu}/>}
      <div className={`burger__overlay ${isOpen ? "open" : ""}`}>
        <div className="burger__overlay-close">
          <Hamburger
          
            toggled={isOpen}
            toggle={setIsOpen}
            size={30}
            direction="right"
          />
        </div>
        <ul className="burger__overlay-nav">
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Main Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" onClick={closeMenu}>
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={closeMenu}>
              All products
            </NavLink>
          </li>
          <li>
            <NavLink to="/discount" onClick={closeMenu}>
              All sales
            </NavLink>
          </li>
          <button className="burger__overlay-nav-discount">1 day discount!</button>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
