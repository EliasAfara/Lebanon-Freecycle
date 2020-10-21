import React from "react";
import "./FAQ.css";

const FAQComponent = ({ faq, index }) => {
  return (
    <div className={"faq" + (faq.open ? "open" : "")} key={index}>
      <div className="faq-questions">{faq.question}</div>
    </div>
  );
};

export default FAQComponent;
