import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

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
    <div className="projects-grid">
      {projectsData.map((project) => (
        <div key={project.id} className="project-card">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <p className="project-algorithm">{project.algorithm}</p>
          <p className="project-results">{project.results}</p>
          {project.id === 1 ? (
            <Link to={`/test/house-prediction/${project.id}`} className="project-button">
              Test KNN for House Prediction
            </Link>
          ) : (
            <Link to={`/test/diabetes-prediction/${project.id}`} className="project-button">
              Test Linear Models With Regularization
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
