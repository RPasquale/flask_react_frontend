import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import TestPage from "./components/Test";
import Projects from "./components/Projects";
import HousePredictionPage from "./components/HousePredictionPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/test" element={<TestPage />} />
          <Route
            path="/test/house-prediction/:id"
            element={<HousePredictionPage />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
