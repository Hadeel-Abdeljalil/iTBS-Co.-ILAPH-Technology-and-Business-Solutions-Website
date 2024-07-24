import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function OurService() {
  return (
    <div className="container vh-100">
      <div className="text-center p-4  ">
        <h2>Our Service</h2>
        <p>
          With solid experience and time based project management Ilaph
          Technology and Business Solutions is consistently providing the
          following Services.
        </p>
        <p>
          - BUILDING SOFTWARE DEVELOPMENT AROUND CUSTOMER NEEDS.
          <span className="d-block">- IMPLEMENTATION & INTEGRATION:-</span>{" "}
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 text-center">
          <div>
            <FontAwesomeIcon
              icon={faDatabase}
              className="bg-info p-4 rounded-circle "
            />
          </div>
          <p>Oracle RDBMS implementation and support.</p>
        </div>
        <div className="col-lg-4 text-center">
          <div>
            <FontAwesomeIcon
              icon={faDatabase}
              className="bg-info p-4 rounded-circle "
            />
          </div>
          <p>Microsoft SQL server implementation and management.</p>
        </div>{" "}
        <div className="col-lg-4 text-center">
          <div>
            <FontAwesomeIcon
              icon={faDatabase}
              className="bg-info p-4 rounded-circle "
            />
          </div>
          <p>
            High Availability solutions (Active-Active Database solutions, RAC,
            fail-over).
          </p>
        </div>{" "}
        <div className="col-lg-4 text-center">
          <div>
            <FontAwesomeIcon
              icon={faDatabase}
              className="bg-info p-4 rounded-circle "
            />
          </div>
          <p>Data Guard Implementations.</p>
        </div>{" "}
        <div className="col-lg-4 text-center">
          <div>
            <FontAwesomeIcon
              icon={faDatabase}
              className="bg-info p-4 rounded-circle "
            />
          </div>
          <p>Oracle E-Business Suite Implementation and Support. </p>
        </div>{" "}
        <div className="col-lg-4 text-center">
          <div>
            <FontAwesomeIcon
              icon={faDatabase}
              className="bg-info p-4 rounded-circle "
            />
          </div>
          <p>Oracle Fusion Cloud Implementation. </p>
        </div>
        <div className="col-lg-6 text-center">
          <div>
            <FontAwesomeIcon
              icon={faDatabase}
              className="bg-info p-4 rounded-circle "
            />
          </div>
          <p>Oracle Security Solutions. </p>
        </div>
        <div className="col-lg-6 text-center">
          <div>
            <FontAwesomeIcon
              icon={faDatabase}
              className="bg-info p-4 rounded-circle "
            />
          </div>
          <p>Software Developing. </p>
        </div>
       
      </div>
    </div>
  );
}
