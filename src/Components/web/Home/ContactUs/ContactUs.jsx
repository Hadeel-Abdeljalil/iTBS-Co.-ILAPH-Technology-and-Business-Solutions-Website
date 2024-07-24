import React from "react";
import { FaEnvelope, FaFax, FaMailBulk, FaPhone } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className=" py-5 mt-5">
      <div className="container">
        <div className="location">
          <div className="maps row ">
            <div className="map-text pt-5 col-lg-6">
              <h2 className="map-h2">Our place </h2>
              <p className="map-p">
              Albiereh - Qattoum Building 3ed floor, Ramallah, Palestine
              </p>
             <div className="pt-4">
                 <h4 className="map-p">Our contact details:</h4>
              <div className="map-icone">
                <ul className="list-unstyled">
                  <li className="icon-map-list">
                    <FaPhone className="me-3" style={{ color: "#1f6b8d" }}/>
                    <span>+972 592 199 002</span>
                  </li>
                  <li className="icon-map-list">
                    <FaFax className="me-3" style={{ color: "#1f6b8d" }}/>
                    <span>Tele/Fax: +970 224 219 04</span>
                  </li>
                  <li className="icon-map-list">
                    <FaEnvelope className="me-3" style={{ color: "#1f6b8d" }}/>
                    <span>mailto:info@itbs.ps</span>
                  </li>
                  <li className="icon-map-list">
                    <FaMailBulk className="me-3" style={{ color: "#1f6b8d" }}/>
                    <span>P.O. box: Ramallah P600</span>
                  </li>
                </ul>
              </div>
            </div>
             </div>
            <div className="map-iframe col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13547.119122536107!2d35.23201675078826!3d31.9125802991717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cd55d8aad2f91%3A0x94071f835d2893a4!2z2KfZhNio2YrYsdip!5e0!3m2!1sar!2s!4v1721841626856!5m2!1sar!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
