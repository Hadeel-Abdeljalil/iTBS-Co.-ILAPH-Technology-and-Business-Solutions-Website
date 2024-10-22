import React from "react";
import Header from "./Header/Header";
import Footer from "../../Shared/Footer/Footer";
import OurService from "./OurService/OurService";
import AboutUs from "./About/AboutUs";
import './Home.css'
import ContactUs from "./ContactUs/ContactUs";
import Break from "./Break/Break";
import GetInTouch from "./GetInTouch/GetInTouch";

export default function Home() {
  return (
    <>
      <Header />
      <OurService />
      <Break/>
      <AboutUs/>
      <ContactUs/>
    </>
  );
}
