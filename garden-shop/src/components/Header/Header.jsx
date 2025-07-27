import React, { useState } from "react";
import ThemeToggle from "./SwitchThemeToggle/SwitchThemeToggle";
import Navbar from "./Navbar/Navbar";
import HeaderIcons from "./HeaderIcons/HeaderIcons.jsx";
import "./Header.scss";
import logoIcon from "../../assets/Images/logo.svg";
import { Link} from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu.jsx";
import ModalDiscount from "../../components/ModalDiscount/ModalDiscount.jsx";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <HeaderIcons />
        <BurgerMenu onDiscountClick={openModal}/>
      </div>
    </header>
  );
};

export default Header;