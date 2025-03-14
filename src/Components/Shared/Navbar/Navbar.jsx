import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleClickOutside = (event) => {
    if (menuOpen && !event.target.closest(".navbar")) {
      setMenuOpen(false);
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", changeBackground);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden"; // Prevent scrolling when menu is open
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${navbar ? "nav" : ""} ${
        menuOpen ? "bg-active" : ""
      }`}
    >
      <div className="container h-100">
        <span className="navbar-brand mb-0 mt-2 h1 font-style">
          <a
            className={`navbar-brand d-flex justify-content-center ${
              navbar ? "text-black" : "text-white"
            }`}
            href="/"
          >
            <img
              src="/Images/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top me-2 mt-2 "
              alt="Ilaph logo"
            />
            <div className="d-flex">
            <span className="text-center d-flex align-items-center ps-1 pb-3">
              ILAPH TECHNOLOGY
            </span>
            <img src= {navbar?"/Images/o-prtnr-blk-rgb.png": "/Images/o-prtnr-wht-rgb.png"}            
              className="d-inline-block align-top mb-3"
              width="120"   
              height="40"
              alt=""
             />
            </div>
          </a>
        
        </span>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={menuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav w-100 d-flex justify-content-end">
            <li className="nav-item me-2 nav-content">
              <HashLink
                className={`nav-link border-nav ${
                  navbar ? "text-black" : "text-white"
                }`}
                activeClassName="active"
                smooth
                to="/#"
              >
                Home
              </HashLink>
            </li>
            <li className="nav-item me-2 nav-content">
              <HashLink
                className={`nav-link border-nav ${
                  navbar ? "text-black" : "text-white"
                }`}
                activeClassName="active"
                smooth
                to="/#OurService"
              >
                Our Service
              </HashLink>
            </li>
            <li className="nav-item me-2 nav-content">
              <HashLink
                className={`nav-link border-nav ${
                  navbar ? "text-black" : "text-white"
                }`}
                activeClassName="active"
                smooth
                to="/#AboutUs"
              >
                About us
              </HashLink>
            </li>
            <li className="nav-item me-2 nav-content">
              <HashLink
                className={`nav-link border-nav ${
                  navbar ? "text-black" : "text-white"
                }`}
                activeClassName="active"
                smooth
                to="/#ContactUs"
              >
                Contact us
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
