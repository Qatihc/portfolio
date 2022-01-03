import "./ProjectsPage.css"
import { projectsData } from "../../consts/";
import { ProjectCard } from "../../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="projects-page-container">
      <div className="projects-header">
        <h2 className="projects-title">Proyectos<span className="accent-text">.</span></h2>
        <p className="projects-subtitle">Algunos de los proyectos en los que trabaje.</p>
      </div>
      <ul className="projects-list">
        {projectsData.map((project) => 
          <li>
            <ProjectCard project={project} />
          </li>
        )}
      </ul>
    </div>
  )
};

export default ProjectsPage;