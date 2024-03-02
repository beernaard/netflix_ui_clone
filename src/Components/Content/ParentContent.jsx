import React from "react";
import Content from "./Content";
import data from "./data.js";
const ParentContent = () => {
  const mapContent = (mydata) => {
    return mydata.map((item, index) => {
      return (
        <div key={index}>
          <Content data={item} />
        </div>
      );
    });
  };
  return <div>{mapContent(data)}</div>;
};

export default ParentContent;
