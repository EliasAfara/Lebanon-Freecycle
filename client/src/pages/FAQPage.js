import React, { useState, useEffect } from "react";
import FAQ from "../components/FAQComponent/FAQComponent";
import { faq } from "../sharedData/FAQsData";
import FAQDesigner from "../components/unDrawComponents/FAQDesigner";
import { Link } from "react-router-dom";
import FooterCopyright from "../components/FooterComponent/FooterCopyright";

const FAQPage = () => {
  const screenWidth = window.innerWidth;
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    if (window.innerWidth >= 1444) {
      setWidth("350");
      setHeight("350");
    } else if (window.innerWidth === 320) {
      setWidth("280");
      setHeight("300");
    } else if (window.innerWidth < 768) {
      setWidth("300");
      setHeight("320");
    }
  }, [screenWidth]);

  return (
    <div className="faqs">
      <div className="row faqs__row" style={{ margin: "auto" }}>
        <div className="col faqs__info">
          <h1 className="faqs__info--title">Frequently Asked Questions</h1>
          <div className="faqs__info--description">
            These are the most common questions we get asked - please have a
            look and see if this is what you need. If not, feel free to{" "}
            <Link to="/contact-us">ask your question</Link>, and we will answer
            it as well.
            <br />
            Click on a question to expand the answer.
          </div>
        </div>
        <div className="col faqs__svg">
          <FAQDesigner width={width} height={height} />
        </div>
      </div>

      {faq.map((item) => (
        <FAQ key={item.id} title={item.title} content={item.content} />
      ))}
      <FooterCopyright />
    </div>
  );
};

export default FAQPage;
