import React from "react";
import "./About.css";

export default function AboutUs() {
  return (
    <div className=" py-5 mb-5 vh-100" id="AboutUs">
      <div className="container">
        <div className="p-5">
          <h2 className="text-center  mb-4 fw-bold">About Us</h2>
          <p>
            Ilaph Technology and Business Solutions is a distinguished Private
            Shareholding company, proudly headquartered in Palestine, and
            managed by a team of exceptionally skilled professionals. Our firm
            is a leader in the IT solutions sector, specializing in delivering
            top-tier services and comprehensive solutions with a primary focus
            on Oracle technologies. Our expertise spans a broad spectrum of
            high-end technologies and products, including Oracle Database,
            Middleware, Security, Disaster Recovery, and Virtualization. In
            addition to these core areas, we are deeply committed to software
            development, ensuring that we provide a holistic approach to IT
            solutions that meet the diverse needs of our clients.
          </p>
          <div className="row ">
            <p className="col-lg-7 ">
              With a wealth of in-depth knowledge and years of proven expertise,
              we have cultivated a reputation for excellence in delivering
              value-based services. Our long-standing presence in the industry
              has allowed us to refine our approach and establish a strong
              identity as a trusted provider of superior IT services. At iTBS,
              we view our customers as our most valuable asset, and we are
              dedicated to forging genuine partnerships with all our clients. We
              do this by leveraging our broad spectrum of knowledge and
              expertise to deliver an exceptional customer experience that not
              only meets, but often exceeds, their expectations. Our commitment
              to continuous improvement and innovation ensures that we remain at
              the forefront of technological advancements, providing solutions
              that are both cutting-edge and aligned with the latest industry
              standards.
            </p>
            <div className="col-lg-5 d-flex justify-content-end">
              <img src="/Images/xx.png" className="w-75" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
