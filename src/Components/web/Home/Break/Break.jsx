import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Break() {
  return (
    <div className="transparent-black-background p-5 ">
      <h2 className="container text-white py-5">
        <FaQuoteLeft className="text-info pe-3" />
        Our IT Solutions Firm specialized in providing professional services and
        integrated solutions mainly in Oracle technologies.
        <FaQuoteRight className="text-info ps-3" />
      </h2>
    </div>
  );
}
