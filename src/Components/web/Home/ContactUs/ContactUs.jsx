import {
  FaEnvelope,
  FaFax,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./ContactUs.css";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="container" id="ContactUs">
      <div className="container">
        <div className="mb-5">
          <div className="maps row ">
            <div className="map-text  col-lg-6">
              <h3 className=" ">Contact Us </h3>
              <p className="map-p">
                Albiereh - Qattoum Building 3rd floor, Ramallah, Palestine.
              </p>
              <div className="pt-4">
                <div className="d-flex">
                  <ul className="list-unstyled">
                    <li className=" d-flex align-items-center p-2">
                      <div
                        className=" rounded-circle pb-2 px-2 pt-1  "
                        style={{ backgroundColor: "#1f6b8d" }}
                      >
                        <FaPhone className=" text-white" />
                      </div>
                      <Link
                      className="text-decoration-none text-dark ps-2"
                      to="tel:+46 123 456 789"
                    >
                      +972 592 199 002
                    </Link>                    </li>
                    <li className=" d-flex align-items-center p-2">
                      <div
                        className=" rounded-circle pb-2 px-2 pt-1  "
                        style={{ backgroundColor: "#1f6b8d" }}
                      >
                        <FaFax className=" text-white" />
                      </div>
                      <span className="ms-2">Tele/Fax: +970 224 219 04</span>
                    </li>
                    <li className=" d-flex align-items-center p-2">
                      <div
                        className=" rounded-circle pb-2 px-2 pt-1  "
                        style={{ backgroundColor: "#1f6b8d" }}
                      >
                        <FaEnvelope className=" text-white" />
                      </div>
                      <Link
                      className="text-decoration-none text-dark  ps-2"
                      to="mailto:http://hello@sitename.com"
                    >
                      info@itbs.ps
                    </Link>                    </li>
                    <li className=" d-flex align-items-center p-2">
                      <div
                        className=" rounded-circle pb-2 px-2 pt-1  "
                        style={{ backgroundColor: "#1f6b8d" }}
                      >
                        <FaMailBulk className=" text-white" />
                      </div>
                      <span className="ms-2">P.O. box: Ramallah P613</span>
                    </li>
                  </ul>
                 
                </div>
              </div>
            </div>
            <div className="map-iframe col-lg-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3386.3920738116994!2d35.2144167!3d31.923111100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU1JzIzLjIiTiAzNcKwMTInNTEuOSJF!5e0!3m2!1sen!2s!4v1722347279090!5m2!1sen!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
