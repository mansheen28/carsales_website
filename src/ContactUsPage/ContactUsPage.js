import React, { useState } from "react";
import "../css/ContactUsPage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-us-container">
      <h2 className="title-section">Your Questions Matter. Let's Talk!</h2>
      <div className="container-lets-connect">

        <div className="contact-details">
          <iframe className="map-view" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8107562831897!2d145.24205707683262!3d-37.841315971968726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad638d9d70bbbd3%3A0xec29038579d122b6!2sBespoke%20Motors!5e0!3m2!1sen!2sau!4v1733025570629!5m2!1sen!2sau" width="600" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <p>28 Havelock Road, Bayswater, VIC 3153</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <p>03 8555 2004</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>
              <a href="mailto:carsales@bespokehub.com">carsales@bespokehub.com</a>
            </p>
          </div>
          <div className="contact-item">
            <i className="fas fa-clock"></i>
            <div>
              <p>Monday - Saturday: 09:00 AM - 05:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-id-card"></i>
            <div>
              <p>Dealer Licence: 10754, ABN: 96 103 973 459</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your Phone Number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
              />
            </div>

            <button type="submit" className="submit-btn">Send →</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
