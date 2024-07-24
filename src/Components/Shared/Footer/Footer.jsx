import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#1f6b8d" }}>
      <div className="container py-3 text-white text-center">
        <div className="mb-3">
          <Link to="https://www.facebook.com/IlaphTech" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white" size="3em" style={{ marginRight: "10px" }} />
          </Link>
          <Link to="https://wa.me/972592199002" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-white" size="3em" />
          </Link>
        </div>
        <p>
          Copyright © 2022 ILAPH Technology. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
