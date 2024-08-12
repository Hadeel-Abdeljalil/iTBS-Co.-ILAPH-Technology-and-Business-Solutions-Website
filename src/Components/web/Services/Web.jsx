import React from "react";
import { Link } from "react-router-dom";
import Side from "./Side";

export default function Web() {
  return (
    <div className="">
      <div className="transparent-black-background w-100 pt-5 d-flex align-items-center">
        <div className="mt-2 p-1"></div>
      </div>
      <div className="container">
        <h2 className="my-5">Web Development</h2>
        <div className="row">
          <div className="col-lg-8">
            <p>
              Our web development services leverage cutting-edge technologies
              like React.js and Vite to create fast, responsive, and scalable
              web applications. Whether you're building a single-page
              application (SPA) or a complex web platform, our expertise in
              modern web development ensures top-tier performance and user
              experience.
            </p>

            <div className="d-flex justify-content-center">
              <img
                src="Images/web.png"
                className="py-5 mb-5 w-50"
                alt="Web Development with React.js and Vite"
              />
            </div>
          </div>
          <Side />
        </div>
      </div>
    </div>
  );
}
