import React from "react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "KNN Regressor For House Price Prediction",
    description: "In this project we implement K-nearest neighbours algorithm to predict the price of a house based on several different factors. ",
    algorithm: "K Nearest Neighbours",
    results: "Test Error and Test Accuracy is: ",
  },
  {
    id: 2,
    title: "Linear, Ridge and Lasso Regression For Predicting Diabetes",
    description: "In this project we test A linear Regression model (without regularization), a Ridge Regression, and a Lasso Regression model to predict a quantitative measure of disease progression one year after baseline.",
    algorithm: "Linear Regression, Ridge Regression, Lasso Regression",
    results: "Test Error and Test Accuracy",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {projectsData.map((project) => (
        <div key={project.id} className="border p-4">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p>{project.description}</p>
          <p>{project.algorithm}</p>
          <p>{project.results}</p>
          {project.id === 1 ? (
            // House Prediction Link
            <Link to={`/test/house-prediction/${project.id}`}>Test KNN for House Prediction</Link>
          ) : (
            // Diabetes Prediction Link
            <Link to={`/test/diabetes-prediction/${project.id}`}>Test Linear Models With Regularization </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;


