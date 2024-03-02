import React from "react";
import "./contactus.css";
import { IoIosArrowForward } from "react-icons/io";
const ContactUs = () => {
  return (
    <div className="contactus-container">
      <div className="contactus-p">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="contactus-function">
        <div className="contactus-input">
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="contactus-btn">
          <button>
            <p>GET STARTED</p>
            <IoIosArrowForward className="contactus-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
