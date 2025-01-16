import React from "react";
import "./Mywork.css";
import patter from "../../assets/theme_pattern.svg";
import myWork_data from "../../assets/mywork_data";
import arrow from "../../assets/arrow_icon.svg";

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest work</h1>
        <img src={patter} alt="" />
      </div>
      <div className="mywork-images">
        {myWork_data.map((work, index) => {
          return <img src={work.w_img} key={index} className="image" alt="" />;
        })}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Mywork;
