import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/projects" className="navbar__link">
            Projects
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/test" className="navbar__link">
            Test
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" className="navbar__link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
