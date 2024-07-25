import React from "react";
import "./About.css";

export default function AboutUs() {
  return (
    <div className=" py-5 mb-5 vh-100" id="AboutUs">
      <div className="container">
        <div className="p-5">
          <h2 className="text-center shadow-about mb-4 fw-bold">About us</h2>
          <p>
            Ilaph Technology and Business Solutions is a Private Shareholding
            company, headquartered in Palestine and owned by talented experts.
            Our IT Solutions Firm specialized in providing professional services
            and integrated solutions mainly in Oracle technologies. iTBS is
            focusing on High-Ends technologies and products such as Oracle
            Database, Middleware, Security, Disaster Recovery, Virtualization in
            addition to software development.
          </p>
          <p>
            By a too long and solid experience, we've built our value-based
            services and shaped our identity to serve you with best-inclass IT
            services. Our customers are our main asset, herewith we design real
            partnerships with all clients by maintaining our diversity of
            knowledge and skills that secure outstanding customer experience and
            can go beyond customer expectations.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row">
           <div className="col-lg-3  d-flex justify-content-end">
           <img
              src="/Images/ceo.png"
              alt=""
              className="w-50 text-end shadow-border rounded-circle"
            />
           </div>
            <div className="border-2  ms-5  pt-3 shadow-lg rounded-2 col-lg-8">
              <h3 className="shadow-about">Mohammad Khater</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos aspernatur aliquam consequuntur enim cupiditate nostrum in facere quod repudiandae, eaque harum cum veritatis quae eos perspiciatis natus consectetur eum minus? Dignissimos, minima natus laborum a quasi suscipit expedita assumenda ipsum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
