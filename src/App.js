import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Test from "./components/Test";
import Projects from "./components/Projects";
import HousePredictionPage from "./components/HousePredictionPage";
// Import other project components as needed

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/test" element={<Test />} />
          <Route
            path="/test/house-prediction"
            element={<HousePredictionPage />}
          />
          {/* Add routes for other projects */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
