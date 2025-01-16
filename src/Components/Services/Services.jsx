import React from "react";
import "./Services.css";
import pattern from "../../assets/theme_pattern.svg";
import services_data from "../../assets/services_data";
import arrowIcon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div id="services" className="Services">
      <div className="sevices-title">
        <h1>My Services</h1>
        <img src={pattern} alt="" />
      </div>
      <div className="services-container">
        {services_data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="read-more">
                <p>Reade More </p>
                <img src={arrowIcon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
