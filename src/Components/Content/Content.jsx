import React from "react";
import "./content.css";
const Content = ({ data }) => {
  return (
    <div className="content-container">
      <div className="content-text">
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
      <div className="content-image" style={{ order: data.ordernum }}>
        <img src={data.img} alt="TV Image" />
      </div>
    </div>
  );
};

export default Content;
