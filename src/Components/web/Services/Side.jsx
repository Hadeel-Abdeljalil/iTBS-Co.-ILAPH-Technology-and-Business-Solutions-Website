import React from "react";
import { Link } from "react-router-dom";

export default function Side() {
  return (
    <div className="col-lg-4 mb-5">
      <ul className="border border-2 rounded-3 list-unstyled ">
        <li className="py-3 ps-2 border-bottom">
          <Link
            className="text-decoration-none text-dark linkhover"
            to="/Oracle"
          >
            Oracle RDBMS implementation and support.
          </Link>
        </li>
        <li className="py-3 ps-2 border-bottom">
          <Link className="text-decoration-none text-dark linkhover" to="/Msql">
            Microsoft SQL Server implementation and management.
          </Link>
        </li>
        <li className="py-3 ps-2 border-bottom">
          <Link
            className="text-decoration-none text-dark linkhover"
            to="/Solutions"
          >
            High Availability solutions (Active-Active Database solutions, RAC,
            fail-over).
          </Link>
        </li>
        <li className="py-3 ps-2 border-bottom">
          <Link className="text-decoration-none text-dark linkhover" to="/Data">
            Data Guard Implementations.
          </Link>
        </li>
        <li className="py-3 ps-2 border-bottom">
          <Link
            className="text-decoration-none text-dark linkhover"
            to="/Ebusiness"
          >
            Oracle E-Business Suite Implementation and Support.
          </Link>
        </li>
        <li className="py-3 ps-2 border-bottom">
          <Link
            className="text-decoration-none text-dark linkhover"
            to="/Cloud"
          >
            Oracle Fusion Cloud Implementation.
          </Link>
        </li>
        <li className="py-3 ps-2 border-bottom">
          <Link
            className="text-decoration-none text-dark linkhover"
            to="/Security"
          >
            Oracle Security Solutions.
          </Link>
        </li>
        <li className="py-3 ps-2 border-bottom">
          <Link
            className="text-decoration-none text-dark linkhover"
            to="/Software"
          >
            Software Development.
          </Link>
        </li>
        <li className="py-3 ps-2 border-bottom">
          <Link
            className="text-decoration-none text-dark linkhover"
            to="/Web"
          >
            Web Development.
          </Link>
        </li>
      </ul>
      <div className="bg-dark p-4 rounded-2">
        <div className="">
          <div className="row align-items-center">
            <div className="col">
              <hr className="my-2 text-white" />
            </div>
            <div className="col-auto">
              <span className="text-white text-center text">Call us at</span>
            </div>
            <div className="col">
              <hr className="my-2 text-white" />
            </div>
          </div>
        </div>{" "}
        <Link
          className="text-decoration-none text-white ps-1"
          to="tel:+46 123 456 789"
        >
          +972 592 199 002
        </Link>
      </div>
    </div>
  );
}
