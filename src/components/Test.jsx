import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Test.css"; // Import the updated TestPage component's CSS file

const TestPage = () => {
  const { id } = useParams();

  return (
    <div className="test-container">
      <div className="sidebar">
        <h2 className="text-xl font-bold px-4 py-3">Test Algorithms:</h2>
        <ul className="px-4 py-2">
          <li>
            <Link to={`/test/house-prediction/${id}`} className="dynamic-button">
              House Prediction
            </Link>
          </li>
          <li>
            <Link to={`/test/diabetes-prediction/${id}`} className="dynamic-button">
              Diabetes Prediction
            </Link>
          </li>
          {/* Add more project options as needed */}
        </ul>
      </div>
      <div className="w-3/4 bg-white">
        {/* Render the selected project content based on the route */}
        {/* You can use React Router to handle the routes for individual projects */}
      </div>
    </div>
  );
};

export default TestPage;

