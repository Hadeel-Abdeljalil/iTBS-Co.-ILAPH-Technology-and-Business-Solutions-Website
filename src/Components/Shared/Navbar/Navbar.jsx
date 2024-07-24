import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
  const [navbar,setNavbar] =useState(false);
  const changeBackground =()=>{
   if(window.scrollY>30){
     setNavbar(true);
   }else{
     setNavbar(false);
   }
  }
  useEffect(() => {
   window.addEventListener('scroll', changeBackground);
   return () => {
     window.removeEventListener('scroll', changeBackground);
   };
 }, []);
  return (
    <div className={`fixed-top ${navbar? `nav`:``}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg d-flex justify-content-between ">
          <a className={`navbar-brand ${navbar? `text-black`:`text-white`}`} href="#">
            <img
              src="/Images/logo.jpg"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt="Ilaph logo"
            />
            ILAPH TECHNOLOGY
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse d-flex justify-content-end me-5 pe-5 " id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class={`nav-link ${navbar? `text-black`:`text-white`}`} >
                  Home 
                </Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${navbar? `text-black`:`text-white`}`} >
                  Our service
                </Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${navbar? `text-black`:`text-white`}`} >
                  About us
                </Link>
              </li>
              
              <li class="nav-item">
                <Link class={`nav-link ${navbar? `text-black`:`text-white`}`} >
                  Contact us
                </Link>
              </li>

            
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
