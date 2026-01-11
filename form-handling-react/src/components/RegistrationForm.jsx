import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus("Please fix the errors above.");
      return;
    }

    // If no errors
    setStatus("Registration successful ✅ (Controlled Form)");
    console.log({ username, email, password });

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <div className="form-wrapper">
      <h2>Controlled Registration Form</h2>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
