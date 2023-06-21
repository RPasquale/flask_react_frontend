import React from "react";
import { Link, useParams } from "react-router-dom";

const TestPage = () => {
  const { id } = useParams();

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200">
        <h2 className="text-xl font-bold px-4 py-3">Test Algorithms:</h2>
        <ul className="px-4 py-2">
          <li>
            <Link
              to={`/test/house-prediction/${id}`} // Use the id from useParams()
              className="text-blue-600 hover:text-blue-800"
            >
              House Prediction
            </Link>
          </li>
          <li>
            <Link
              to={`/test/diabetes-prediction/${id}`} // Use the id from useParams()
              className="text-blue-600 hover:text-blue-800"
            >
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

