import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import OurService from "./OurService/OurService";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import AboutUs from "./About/AboutUs";
import './Home.css'
import ContactUs from "./ContactUs/ContactUs";

export default function Home() {
  return (
    <>
      <Header />
      <OurService />
      <div className="transparent-black-background p-5 ">
        <h2 className="container text-white py-5">
        <FaQuoteLeft className="text-info pe-3" />
          Our IT Solutions Firm specialized in providing professional services
          and integrated solutions mainly in Oracle technologies.
          <FaQuoteRight className="text-info ps-3" />
        </h2> 
      </div>
      <AboutUs/>
      <ContactUs/>
    </>
  );
}
