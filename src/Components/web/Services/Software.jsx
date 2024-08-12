import React from "react";
import { Link } from "react-router-dom";
import Side from "./Side";

export default function SoftwareDevelopment() {
  return (
    <div className="">
      <div className="transparent-black-background w-100 pt-5 d-flex align-items-center">
        <div className="mt-2 p-1"></div>
      </div>
      <div className="container">
        <h2 className="my-5">Software Development</h2>
        <div className="row">
          <div className="col-lg-8">
            <p>
              Software development is a comprehensive process that involves designing, creating, testing, and maintaining software applications and systems. It encompasses various methodologies, tools, and best practices to deliver high-quality software solutions that meet user needs and business objectives. Our development practices include using .NET for building robust and scalable applications, along with SQL and PL/SQL for efficient data management and querying. Additionally, we leverage Oracle Forms and Oracle APEX for building and managing enterprise applications and web applications.
            </p>

            <h4>Technologies Used</h4>
            <ul>
              <li>
                <strong>.NET:</strong> A framework for building and running applications on Windows. It provides a comprehensive and consistent programming model for building applications.
              </li>
              <li>
                <strong>SQL:</strong> A standard language for managing and querying relational databases. It is used to perform operations like querying, updating, and managing data.
              </li>
              <li>
                <strong>PL/SQL:</strong> Oracle's procedural extension for SQL, used to write complex queries and manage the flow of data in Oracle databases.
              </li>
              <li>
                <strong>Oracle Forms:</strong> A development tool for creating data entry forms and interactive applications that interface with Oracle databases.
              </li>
              <li>
                <strong>Oracle APEX:</strong> A low-code application development platform for building web applications quickly and efficiently, with a focus on rapid development and deployment.
              </li>
            </ul>
            <div className="d-flex justify-content-center ">
              <img
                src="Images/software.jpg"
                className="py-5 mb-5 w-75"
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
