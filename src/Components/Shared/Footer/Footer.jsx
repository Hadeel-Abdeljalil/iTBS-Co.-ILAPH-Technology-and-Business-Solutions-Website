import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css'; // تأكد من إضافة ملف CSS

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <Link to="https://www.facebook.com/IlaphTech" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          <Link to="https://wa.me/972592199002" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </Link>
        </div>
        <p className="footer-text">
          Copyright © 2022 ILAPH Technology. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
