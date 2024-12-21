import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { faqData } from "./FAQ";
import "./FAQ.css"; 

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="faq-section">
      <div>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div
              className="faq-header"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h2 className="faq-question">{item.question}</h2>
              {openIndex === index ? (
                <IoCloseCircleSharp className="faq-icon" />
              ) : (
                <CiCirclePlus className="faq-icon" />
              )}
            </div>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
