import React from "react";
import { Link } from "react-router-dom";

const TestPage = () => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200">
        <h2 className="text-xl font-bold px-4 py-3">Projects</h2>
        <ul className="px-4 py-2">
          <li>
            <Link
              to="/test/house-prediction"
              className="text-blue-600 hover:text-blue-800"
            >
              House Prediction
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
