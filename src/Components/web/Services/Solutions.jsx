import React from "react";
import { Link } from "react-router-dom";
import Side from "./Side";

export default function Solutions() {
  return (
    <div className="">
      <div className="transparent-black-background w-100 pt-5 d-flex align-items-center">
        <div className="mt-2 p-1"></div>
      </div>
      <div className="container">
        <h2 className="my-5">High Availability Solutions</h2>
        <div className="row">
          <div className="col-lg-8">
            <p>
              High Availability Solutions ensure that your database systems remain operational and accessible during failures. This includes Active-Active Database Solutions, Real Application Clusters (RAC), and Fail-Over mechanisms to minimize downtime and maintain continuous service.
            </p>



            <div className="d-flex justify-content-center">
              <img
                src="Images/aval.png"
                className="py-5 mb-5 w-25"
                alt="High Availability Solutions"
              />
            </div>
          </div>
          <Side />
        </div>
      </div>
    </div>
  );
}
