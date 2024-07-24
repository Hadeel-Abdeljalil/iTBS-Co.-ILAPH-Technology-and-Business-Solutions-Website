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
            ILAPH TECHNOLOGY & <span className="d-block ps-5">
            BUSSINES SOLUTIONS.
            </span>
          </h1>
          <p className="header-animation-2 pe-5 text-info-emphasis text-end">Managing Your Data, Empowering Your Business.</p>
        </div>
      </div>
    </div>
  );
}
