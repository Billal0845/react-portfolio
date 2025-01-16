import React from "react";
import "./Contact.css";
import pattern from "../../assets/theme_pattern.svg";
import mail from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";
import location from "../../assets/location_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2b7932e9-3694-4a75-8cc9-0b4fa8672103");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={pattern} alt="" />
      </div>
      <div className="contact-containers">
        <div className="contact-left">
          <h2>Let's talk</h2>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" />
              <p>greatstackdev@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call} alt="" />
              <p>+772-825-524</p>
            </div>

            <div className="contact-detail">
              <img src={location} alt="" />
              <p>CA, United States</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" required placeholder="Enter Your Name" />

          <label htmlFor="email">Your Email</label>
          <input type="email" required placeholder="Enter Your Email" />

          <label htmlFor="message">Write Your Message</label>
          <textarea
            name="message"
            id=""
            placeholder="Enter Your Message"
            rows={8}
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
