import React from "react";
import { Link } from "react-router-dom";
import Side from "./Side";

export default function Security() {
  return (
    <div className="">
      <div className="transparent-black-background w-100 pt-5 d-flex align-items-center">
        <div className="mt-2 p-1"></div>
      </div>
      <div className="container">
        <h2 className="my-5">Oracle Security Solutions</h2>
        <div className="row">
          <div className="col-lg-8">
            <p>
              Oracle Security Solutions provide a comprehensive suite of tools and technologies designed to protect Oracle databases and applications from various security threats. These solutions include measures for data encryption, access control, auditing, and threat detection to ensure data integrity and compliance.
            </p>

            <h4>Key Oracle Security Solutions</h4>
            <ul>
              <li>
                <strong>Data Encryption:</strong> Protecting sensitive data at rest and in transit using encryption technologies to prevent unauthorized access and data breaches.
              </li>
              <li>
                <strong>Access Control:</strong> Implementing fine-grained access controls to ensure that only authorized users can access and modify data, based on their roles and permissions.
              </li>
              <li>
                <strong>Auditing and Compliance:</strong> Monitoring and recording database activities to ensure compliance with regulatory requirements and internal policies. This includes tracking changes, access patterns, and security events.
              </li>
              <li>
                <strong>Database Firewall:</strong> Deploying a database firewall to protect against SQL injection attacks and other malicious activities by filtering and blocking harmful database traffic.
              </li>
              <li>
                <strong>Threat Detection:</strong> Using advanced threat detection mechanisms to identify and respond to potential security threats, including real-time monitoring and anomaly detection.
              </li>
              <li>
                <strong>Identity and Access Management:</strong> Managing user identities and their access privileges to ensure secure and efficient authentication and authorization processes.
              </li>
              <li>
                <strong>Backup and Recovery Security:</strong> Ensuring that backup data is protected against unauthorized access and corruption, and that recovery processes are secure and reliable.
              </li>
            </ul>

            <div className="d-flex justify-content-center">
              <img
                src="Images/SecuritySolutions.png"
                className="py-5 mb-5"
                alt="Oracle Security Solutions"
              />
            </div>
          </div>
          <Side />
        </div>
      </div>
    </div>
  );
}
