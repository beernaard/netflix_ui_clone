import React from "react";
import "./homepage.css";
import ContactUs from "../ContactUs/ContactUs";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-h3">
        <h3>Unlimited movies, TV, shows, and more.</h3>
      </div>
      <div className="homepage-p">
        <p>Watch anywhere. Cancel anytime.</p>
      </div>
      <div className="homepage-component">
        <ContactUs />
      </div>
    </div>
  );
};

export default HomePage;
