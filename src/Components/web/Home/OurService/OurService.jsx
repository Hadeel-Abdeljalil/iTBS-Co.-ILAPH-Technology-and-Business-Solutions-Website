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
    },
    {
      path: "/Msql",
      icon: <SiMicrosoftsqlserver />,
      description: "Microsoft SQL server implementation and management.",
    },
    {
      path: "/Solutions",
      icon: <BsDatabaseFillGear />,
      description:
        "High Availability solutions (Active-Active Database solutions, RAC, fail-over).",
    },
    {
      path: "/Data",
      icon: <IoMdCloudUpload />,
      description: "Data Guard Implementations.",
    },
    {
      path: "/Ebusiness",
      icon: <GrOracle />,
      description: "Oracle E-Business Suite Implementation and Support.",
    },
    {
      path: "/Cloud",
      icon: <MdCloud />,
      description: "Oracle Fusion Cloud Implementation.",
    },
    {
      path: "/Security",
      icon: <FaShieldAlt />,
      description: "Oracle Security Solutions.",
    },
    {
      path: "/Software",
      icon: <FaCode />,
      description: "Software Development.",
    },
    {
      path: "/web",
      icon: <FaCode/>,
      description: "Web Development.",
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
              <div className="icon-wrapper pb-3">{service.icon}</div>
              <p className=" ">{service.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
