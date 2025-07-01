import React from 'react'
import '@Footer.scss'
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer container">
      <h2>Contact</h2>
      <div className="footer__grid">
            <div className="footer__card">
                <p className="footer__label">Phone</p>
                <p className="footer__info">+49 999 999 99 99</p>
            </div>
            <div className="footer__card">
                <p className="footer__label">Socials</p>
                <div className="footer__icons">
            <AiFillInstagram size={43} color='var(--color-txt-black)' />
            <RiWhatsappFill size={43} color='var(--color-txt-black)' />
          </div>
            </div>
            <div className="footer__card">
                <p className="footer__label">Address</p>
                <p className="footer__info">Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
            </div>
            <div className="footer__card">
                <p className="footer__label">Working Hours</p>
                <p className="footer__info">24 hours a day</p>
            </div>
        </div>
      <div className="footer__map">
        <iframe
          src="https://www.google.com/maps?q=Linkstraße+2,+10785+Berlin,+Germany&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer
