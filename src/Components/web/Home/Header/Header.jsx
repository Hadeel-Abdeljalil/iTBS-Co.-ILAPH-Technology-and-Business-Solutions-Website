import React from "react";
import "./Header.css";

export default function Header() {
 

  return (
    <div className="position-relative img-header">
      <div className="container vh-100 ">
        <div className="position-absolute top-50 header-animation">
          <h1 className=" text-white text-shadow ">
            ILAPH TECHNOLOGY & <span className="d-block ps-5">
            BUSINESS SOLUTIONS.
            </span>
          </h1>
          <p className="header-animation-2 pe-5  text-end text-info" >Managing Your Data, Empowering Your Business.</p>
        </div>
      </div>
    </div>
  );
}
