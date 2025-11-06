import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const bar = {
    backgroundColor: "#102a43",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };
  const brand = { color: "white", fontWeight: 700, textDecoration: "none", marginRight: "12px" };
  const link = ({ isActive }) => ({
    color: isActive ? "#ffe066" : "white",
    textDecoration: "none",
    fontWeight: isActive ? 700 : 500,
  });

  return (
    <nav style={bar}>
      <Link to="/" style={brand}>My Company</Link>
      <NavLink to="/" style={link} end>Home</NavLink>
      <NavLink to="/about" style={link}>About</NavLink>
      <NavLink to="/services" style={link}>Services</NavLink>
      <NavLink to="/contact" style={link}>Contact</NavLink>
    </nav>
  );
}
