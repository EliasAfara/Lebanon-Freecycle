import React, { useState } from "react";
import FAQ from "../components/FAQComponent/FAQComponent";

const FAQPage = () => {
  const [faqs] = useState([
    {
      question: "question 1",
      answer: "answer 1",
      open: true,
    },
    {
      question: "question 2",
      answer: "answer 2",
      open: false,
    },
    {
      question: "question 3",
      answer: "answer 3",
      open: false,
    },
    {
      question: "question 4",
      answer: "answer 4",
      open: false,
    },
  ]);

  return (
    <div className="faqs">
      {faqs.map((faq, i) => (
        <FAQ faq={faq} index={i} />
      ))}
    </div>
  );
};

export default FAQPage;
