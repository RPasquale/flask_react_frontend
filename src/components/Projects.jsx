import React from "react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    algorithm: "Algorithm used for Project 1",
    results: "Analysis of results for Project 1",
  },
  {
    id: 2,
    title: "New Project",
    description: "Description of New Project",
    algorithm: "Algorithm used for New Project",
    results: "Analysis of results for New Project",
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
            <Link to={`/test/house-prediction/${project.id}`}>Test Project</Link>
          ) : (
            // Diabetes Prediction Link
            <Link to={`/test/diabetes-prediction/${project.id}`}>Test Project</Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;


