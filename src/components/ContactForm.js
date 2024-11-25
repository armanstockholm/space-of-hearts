import React, { useState } from "react";
import "../ContactForm.css"; // Importera CSS-filen

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Hantera inmatning
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Rensa fel för fältet
  };

  // Validering
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  // Hantera formulärinlämning
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Formulär är korrekt ifyllt  
      fetch("https://formsubmit.co/f5b846d9c2e939952e334b9364ab1ce9", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => {
        if (response.ok) {
            setSuccessMessage("Your message has been sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        } else{
            setSuccessMessage("Something went wrong. Please try again.")
        }
      })
      .catch((error)=>{
        console.error("Error:", error);
        setSuccessMessage("Something went wrong. Please try again.");
      })

    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="contact-form">
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