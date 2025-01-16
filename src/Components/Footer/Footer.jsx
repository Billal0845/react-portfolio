import React from "react";
import "./Footer.css";
import pattern from "../../assets/bb.png";
import email_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-top">
        <div className="Footer-top-left">
          <img src={pattern} alt=""  className="ftr"/>
          <p>
            I am a frontend developer from, USA with 10 years of experience in
            companies like Microsoft, Tesla and Apple.
          </p>
        </div>
        <div className="Footer-top-right">
          <div className="footer-top-right-email">
            <img src={email_icon} alt="" />
            <input type="text" placeholder="Enter Your Email" />
          </div>
          <div className="Footer-subsribe">Subscribe</div>
        </div>
      </div>

      <hr />

      <div className="Footer-bottom">
        <div className="Footer-bottom-left">
          <p>© 2023 Billal Hosen. All rights reserved.</p>
        </div>
        <div className="Footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
