import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FaBriefcase, FaCogs, FaProjectDiagram, FaShieldAlt, FaCode } from 'react-icons/fa';
import { MdCloud, MdManageAccounts } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";
import './OurService.css'
import { DiMsqlServer } from "react-icons/di";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { BsDatabaseFillGear } from "react-icons/bs";
import { GrOracle } from "react-icons/gr";
import { Link } from "react-router-dom";
import Oracle from "../../Services/Oracle";

export default function OurService() {
  return (
    <div className="container vh-100 pt-5" id="OurService">
      <div className="text-center p-4">
        <h2 className="mb-5  fw-bold">Our Service</h2>
        <p>
          With solid experience and time-based project management, Ilaph
          Technology and Business Solutions is consistently providing the
          following Services.
        </p>
      </div>
      <div className="card-container">
        <Link className="card text-decoration-none" to="Oracle">
        <div className="icon-wrapper">
            <FontAwesomeIcon icon={faDatabase} />
          </div>
          <p className="card-description">Oracle RDBMS implementation and support.</p>
        </Link>
        <Link className="card text-decoration-none" to="Msql">
          <div className="icon-wrapper">
            <SiMicrosoftsqlserver />
          </div>
          <p className="card-description">Microsoft SQL server implementation and management.</p>
        </Link>
        <Link className="card text-decoration-none" to="Solutions">
        <div className="icon-wrapper">
            <BsDatabaseFillGear />
          </div>
          <p className="card-description">High Availability solutions (Active-Active Database solutions, RAC, fail-over).</p>
        </Link>
        <Link className="card text-decoration-none" to="Data">
          <div className="icon-wrapper">
            <IoMdCloudUpload />
          </div>
          <p className="card-description">Data Guard Implementations.</p>
        </Link>
        <Link className="card text-decoration-none" to="Ebusiness">
          <div className="icon-wrapper">
            <GrOracle />
          </div>
          <p className="card-description">Oracle E-Business Suite Implementation and Support.</p>
        </Link>
        <Link className="card text-decoration-none" to="Cloud">
          <div className="icon-wrapper">
            <MdCloud />
          </div>
          <p className="card-description">Oracle Fusion Cloud Implementation.</p>
        </Link>
        <Link className="card text-decoration-none" to="Security">
          <div className="icon-wrapper">
            <FaShieldAlt />
          </div>
          <p className="card-description">Oracle Security Solutions.</p>
        </Link>
        <Link className="card text-decoration-none" to="Software">
          <div className="icon-wrapper">
            <FaCode />
          </div>
          <p className="card-description">Software Development.</p>
        </Link>
        <Link className="card text-decoration-none" to="Web">
          <div className="icon-wrapper">
            <FaCode />
          </div>
          <p className="card-description">Web Development.</p>
        </Link>
      </div>
    </div>
  );
}