import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.username.trim()) newErrors.username = "Username is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!validate()) return;

    try {
      // Mock API request (simulates registration)
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("Registration submitted successfully ✅");
      setForm({ username: "", email: "", password: "" });
      setErrors({});
    } catch (err) {
      setStatus("Something went wrong. Please try again ❌");
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Controlled Registration Form</h2>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Username
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
        </label>

        <label>
          Email
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </label>

        <button type="submit">Register</button>
        {status && <p className="status-text">{status}</p>}
      </form>
    </div>
  );
}
