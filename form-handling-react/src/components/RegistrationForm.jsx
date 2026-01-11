import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    // If no errors, proceed
    if (Object.keys(newErrors).length === 0) {
      alert("Controlled Form Submitted ✅");
      setUsername("");
      setEmail("");
      setPassword("");
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
        </label>

        <label>
          Email
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
