import React from "react";
import { Link } from "react-router-dom";
import Side from "./Side";

export default function Data() {
  return (
    <div className="">
      <div className="transparent-black-background w-100 pt-5 d-flex align-items-center">
        <div className="mt-2 p-1"></div>
      </div>
      <div className="container">
        <h2 className="my-5">Data Guard Implementations</h2>
        <div className="row">
          <div className="col-lg-8">
            <p>
              Oracle Data Guard is a robust solution designed to ensure high availability, data protection, and disaster recovery for Oracle databases. Our Data Guard implementation services help maintain your database's continuity and reliability by providing seamless failover and recovery capabilities.
            </p>

            <h4>Our Services Include:</h4>
            <ul>
              <li>
                <strong>High Availability:</strong> Implementing solutions to ensure your database remains available even during unexpected failures.
              </li>
              <li>
                <strong>Disaster Recovery:</strong> Setting up Data Guard to protect your data and enable quick recovery in case of a disaster.
              </li>
              <li>
                <strong>Data Protection:</strong> Ensuring continuous data synchronization between primary and standby databases to safeguard against data loss.
              </li>
              <li>
                <strong>Performance Optimization:</strong> Enhancing the performance of your Data Guard environment for better efficiency and reliability.
              </li>
            </ul>
          </div>
          <Side />
        </div>
      </div>
    </div>
  );
}
