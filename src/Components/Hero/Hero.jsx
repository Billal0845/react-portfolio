import React from "react";
import "./Hero.css";
import my_img from "../../assets/office_suit.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={my_img} alt="" />
      <h1>
        <span>Hello I am Billal,</span> Fullstack developer based in Bangladesh.
      </h1>
      <p>
        I am a fullstack developer with 2 years of experience in DaduCoding, Demandhat
        and Teesta
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
