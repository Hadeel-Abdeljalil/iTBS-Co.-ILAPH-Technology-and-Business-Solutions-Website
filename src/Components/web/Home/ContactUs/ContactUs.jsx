import React from "react";
import { FaEnvelope, FaFax, FaMailBulk, FaPhone } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className=" py-5 mt-5 pt-5" id="ContactUs">
      <div className="container">
        <div className="location">
          <div className="maps row ">
            <div className="map-text pt-5 col-lg-6">
              <h2 className="shadow-about fw-bold mb-5">Contact Us </h2>

              <h3>Our place </h3>
              <p className="map-p">
                Albiereh - Qattoum Building 3rd floor, Ramallah, Palestine.
              </p>
              <div className="pt-4">
                <h3>Our contact details</h3>
                <div className="d-flex">
                  <ul className="list-unstyled">
                    <li className=" d-flex align-items-center p-2">
                      <div
                        className=" rounded-circle pb-2 px-2 pt-1  "
                        style={{ backgroundColor: "#1f6b8d" }}
                      >
                        <FaPhone className=" text-white" />
                      </div>
                      <span className="ms-2">+972 592 199 002</span>
                    </li>
                    <li className=" d-flex align-items-center p-2">
                      <div
                        className=" rounded-circle pb-2 px-2 pt-1  "
                        style={{ backgroundColor: "#1f6b8d" }}
                      >
                        <FaFax className=" text-white" />
                      </div>
                      <span className="ms-2">Tele/Fax: +970 224 219 04</span>
                    </li>
                  </ul>
                  <ul className="list-unstyled">
                    <li className=" d-flex align-items-center p-2">
                      <div
                        className=" rounded-circle pb-2 px-2 pt-1  "
                        style={{ backgroundColor: "#1f6b8d" }}
                      >
                        <FaEnvelope className=" text-white" />
                      </div>
                      <span className="ms-2">mailto:info@itbs.ps</span>
                    </li>
                    <li className=" d-flex align-items-center p-2">
                      <div
                        className=" rounded-circle pb-2 px-2 pt-1  "
                        style={{ backgroundColor: "#1f6b8d" }}
                      >
                        <FaMailBulk className=" text-white" />
                      </div>
                      <span className="ms-2">P.O. box: Ramallah P600</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="map-iframe col-lg-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13547.12180452607!2d35.211417255678164!3d31.912562084585705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cd55d8aad2f91%3A0x94071f835d2893a4!2sAl-Bireh!5e0!3m2!1sen!2s!4v1721906409276!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
