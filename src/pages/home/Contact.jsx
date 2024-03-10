import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container form-div">
        <h2>Get In Touch</h2>
        <form className="form">
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="tel" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="8"></textarea>
          </div>
          <input type="submit" value="SUBMIT" className="button" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
