import React from "react";
import "./Header.css";

export default function Header() {
 

  return (
    <div className="position-relative">
      <img
        src="/Images/header5.jpg"
        alt=""
        className="vh-100 vw-100 img-fluid img-header"
      />
      <div className="container ">
        <div className="position-absolute top-50 header-animation">
          <h1 className=" text-white text-shadow ">
            ILAPH TECHNOLOGY & <span className="d-block">
            BUSSINES SOLUTIONS.
            </span>
          </h1>
          <p className="header-animation-2 pe-3 text-info text-end">Achieving goals is what makes a difference</p>
        </div>
      </div>
    </div>
  );
}
