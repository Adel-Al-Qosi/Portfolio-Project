import { projectsData } from '../data/projectsData'
import '../styles/Projects.css'

function Projects() {
  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.name} />
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
