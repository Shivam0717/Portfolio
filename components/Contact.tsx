import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content fade-in">
          <h2 className="contact-title">Let's Build Something Great</h2>
          <p className="contact-description">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out.
          </p>
          <div className="contact-links">
            <a href="mailto:shivam.ss1887@gmail.com" className="contact-link">
              <span>📧</span>
              <span>shivam.ss1887@gmail.com</span>
            </a>
            <a href="tel:+918360044936" className="contact-link">
              <span>📱</span>
              <span>+91 8360044936</span>
            </a>
            <a
              href="https://linkedin.com/in/shivam-sharma-1155891a2"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>💼</span>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
