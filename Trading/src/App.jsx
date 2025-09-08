import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";


import "./App.css";
import Home from "./Page/LandingPage";

function App() {
  return (
    <Router>
      {/* Dark background section for Navbar + HeroSection */}
      <div className="dark-section">
        <Navbar />
        {/* Hero section only on home page */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      {/* White background for other routes */}
      <div className="white-section">
        <Routes>
          <Route path="/about" element={<h2>About Page</h2>} />
          <Route path="/contact" element={<h2>Contact Page</h2>} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


