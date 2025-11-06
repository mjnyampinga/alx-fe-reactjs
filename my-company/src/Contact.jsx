import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const field = { display: "block", margin: "10px 0", padding: "8px", width: "100%", maxWidth: 420 };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // no real submit needed for this task
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={field}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          style={field}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          style={{ ...field, height: 120 }}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" style={{ padding: "8px 14px" }}>Send Message</button>
      </form>
    </div>
  );
}
