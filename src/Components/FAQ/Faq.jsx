import React, { useState } from "react";
import "./faq.css";
import data from "./faqdata.js";
import ContactUs from "../ContactUs/ContactUs.jsx";
const Faq = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelected, setEnableMultiSelection] = useState(true);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (currentid) => {
    setSelected(currentid === selected ? null : currentid);
  };
  const handleMultipleSelection = (id) => {
    let copy = [...multiple];
    const indexOfCurrentId = copy.indexOf(id);
    console.log(indexOfCurrentId);
    if (indexOfCurrentId === -1) copy.push(id);
    else copy.splice(indexOfCurrentId, 1);
    setMultiple(copy);
  };
  return (
    <div className="faq-container">
      <div className="faq-header">
        <h3>Frequently Asked Questions</h3>
      </div>
      {data && data.length > 0 ? (
        data.map((item) => {
          return (
            <div className="faq-content">
              <div
                className="faq-question"
                key={item.id}
                onClick={
                  enableMultiSelected
                    ? () => handleMultipleSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <p>{item.question}</p>
                <span>+</span>
              </div>
              {enableMultiSelected
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="faq-answer">{item.answers}</div>
                  )
                : selected === item.id && (
                    <div className="faq-answer">{item.answers}</div>
                  )}
              {/* {selected === item.id ? (
                <div className="faq-answer">{item.answers}</div>
              ) : null} */}
            </div>
          );
        })
      ) : (
        <div>
          <p>No Data found</p>
        </div>
      )}
      <div className="faq-component">
        <ContactUs />
      </div>
    </div>
  );
};

export default Faq;
