import React from "react";
import "./ContactInfo.css"; 

const ContactInfo = ({ title, description, contactDetails }) => {
  return (
    <div className="contact-info-container">
      <div className="contact-info-header">
        <h2 className="contact-info-title">{title}</h2>
        <p className="contact-info-description">{description}</p>
      </div>

      <div className="contact-info-grid">
        {contactDetails.map((detail, index) => (
          <div key={index} className="contact-info-item">
            <div className="contact-info-icon">{detail.icon}</div>
            <div>
              <h3 className="contact-info-detail-title">{detail.title}</h3>
              <p className="contact-info-detail-content">{detail.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
