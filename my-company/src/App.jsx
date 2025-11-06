import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./components/Contact";


function App() {
  // inline page wrapper style (kept simple to satisfy the “inline CSS” requirement)
  const pageStyle = { padding: "20px" };

  return (
    <>
      <Navbar />
      <div style={pageStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
