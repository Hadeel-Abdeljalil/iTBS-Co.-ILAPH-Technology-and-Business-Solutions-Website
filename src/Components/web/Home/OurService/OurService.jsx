import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FaShieldAlt, FaCode } from "react-icons/fa";
import { MdCloud } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { BsDatabaseFillGear } from "react-icons/bs";
import { GrOracle } from "react-icons/gr";
import "./OurService.css";
import { Link } from "react-router-dom";

export default function OurService() {
  const services = [
    {
      path: "/Oracle",
      icon: <FontAwesomeIcon icon={faDatabase} />,
      description: "Oracle RDBMS implementation and support.",
      details: [
        "Comprehensive Oracle RDBMS solutions.",
        "Installation and configuration.",
        "Ongoing support and optimization."
      ]
    },
    {
      path: "/Msql",
      icon: <SiMicrosoftsqlserver />,
      description: "Microsoft SQL server implementation and management.",
      details: [
        "Setup and management of Microsoft SQL Server.",
        "Performance tuning and optimization.",
        "Backup and recovery solutions."
      ]
    },
    {
      path: "/Solutions",
      icon: <BsDatabaseFillGear />,
      description: "High Availability solutions (Active-Active Database solutions, RAC, fail-over).",
      details: [
        "Active-Active database solutions.",
        "RAC configurations.",
        "Fail-over strategies."
      ]
    },
    {
      path: "/Data",
      icon: <IoMdCloudUpload />,
      description: "Data Guard Implementations.",
      details: [
        "Deployment of Data Guard solutions.",
        "Disaster recovery planning.",
        "Data protection strategies."
      ]
    },
    {
      path: "/Ebusiness",
      icon: <GrOracle />,
      description: "Oracle E-Business Suite Implementation and Support.",
      details: [
        "Implementation of Oracle E-Business Suite.",
        "Ongoing support and maintenance.",
        "Customization and integration."
      ]
    },
    {
      path: "/Cloud",
      icon: <MdCloud />,
      description: "Oracle Fusion Cloud Implementation.",
      details: [
        "Oracle Fusion Cloud deployment.",
        "Cloud integration solutions.",
        "Cost optimization and management."
      ]
    },
    {
      path: "/Security",
      icon: <FaShieldAlt />,
      description: "Oracle Security Solutions.",
      details: [
        "Robust security measures for Oracle environments.",
        "Risk assessment and mitigation.",
        "Compliance and auditing solutions."
      ]
    },
    {
      path: "/Software",
      icon: <FaCode />,
      description: "Software Development.",
      details: [
        "Custom software development.",
        "Application design and architecture.",
        "Quality assurance and testing."
      ]
    },
    {
      path: "/web",
      icon: <FaCode />,
      description: "Web Development.",
      details: [
        "Responsive web design.",
        "Front-end and back-end development.",
        "SEO and performance optimization."
      ]
    },
  ];

  return (
    <div className="service-section py-5" id="OurService">
      <h2 className="text-center mb-4 fw-bold">Our Services</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {services.map((service, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <Link
              to={service.path}
              className="text-decoration-none timeline-content p-3 rounded-3"
            >
              <div className="d-flex align-items-center pb-3">
                <div className="icon-wrapper ">{service.icon}</div>
                <div className="text-dark text-start ps-2 fw-bold pt-2">{service.description}</div>
              </div>
              <ul>
                {service.details.map((detail, idx) => (
                  <li key={idx} className="text-start">{detail}</li>
                ))}
              </ul>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
