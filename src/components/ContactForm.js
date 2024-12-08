import React, { useState } from "react";
import "../ContactForm.css"; // Importera CSS-filen

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Hantera inmatning
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Rensa fel för fältet
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      
      <form
        action="https://formsubmit.co/amanibanani85@gmail.com"
        method="POST"
        className="contact-form"
      >
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
          />
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <button type="submit" className="form-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
