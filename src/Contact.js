import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
    alert(`Thank you, ${formData.name}! Your message has been submitted.`);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          I'd love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hello, feel free to reach out.
        </p>
      </div>

      <div className="contact-content-container">
        {/* Form Section */}
        <div className="contact-form-section">
          <h2>Send me a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me more about your project or inquiry..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="contact-info-section">
          <h2>Let's connect</h2>
          <p>
            I'm currently open to new opportunities and interesting projects.
            Whether you're a fellow student, a potential employer, or someone
            with an exciting idea, I'd love to hear from you.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <strong>Email</strong>
              <p>lishanaik11@email.com</p>
            </div>
            <div className="detail-item">
              <strong>Phone</strong>
              <p>+91-76660433311</p>
            </div>
            <div className="detail-item">
              <strong>Location</strong>
              <p>Navi Mumbai , Maharashtra</p>
            </div>
          </div>

          <div className="availability-section">
            <strong>Current Availability</strong>
            <p>
              I'm currently available for internships, part-time projects, and
              collaborative opportunities. Response time is typically within
              24-48 hours.
            </p>
          </div>

          <div className="bio-section">
            <span className="name-and-title">
              <strong>Lisha Naik</strong>
              <br />
              Passionate student creating meaningful digital experiences
            </span>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>© 2025 Lisha Naik. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Contact;