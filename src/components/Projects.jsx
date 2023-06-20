import React from "react";
import { Link } from 'react-router-dom';


const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    algorithm: "Algorithm used for Project 1",
    results: "Analysis of results for Project 1",
  },
  // Add more project data as needed
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
          {/* Add a link to the respective project on the Test page */}
          <Link to={`/test/house-prediction/${project.id}`}>Test Project</Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;

