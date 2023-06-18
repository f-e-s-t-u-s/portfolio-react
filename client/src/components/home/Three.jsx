import React from "react";
import "./home.css";
import view from "../../images/view.png"
import redirect from "../../images/redirect.png"

function Services() {
  return (
    <div className="three-main">
      <div className="services-text">
        <div className="services-text-main">
        <h1>Services I Offer</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          tempora, unde perferendis nulla modi sit explicabo culpa iure sed a
          nemo, aliquam cumque recusandae magni ipsa nisi voluptatum et porro!
        </p>
        </div>
    <div className="services-img">
        <img src={view} alt="" />
        </div>
      </div>
      <div className="services-links">
        <div className="service-links-content">
        <hr style={{border: "solid black 2px", width: "100%"}} />
            <span> 01/</span>
            <h1>Web Design</h1>
           
            <img src={redirect} alt="" />
            

        </div>
        <div className="service-links-content">
        <hr style={{border: "solid black 2px", width: "100%"}} />            <span> 02/</span>
        <h1>Backend Web Developmnet</h1>
        <img src={redirect} alt="" />
        </div>
        <div className="service-links-content">
            <hr style={{border: "solid black 2px", width: "100%"}} />
            <span> 03/</span>
            <h1>Web App Pentesting</h1>
            <img src={redirect} alt="" />
        </div>

        
      </div>
    </div>
  );
}

export default Services;
