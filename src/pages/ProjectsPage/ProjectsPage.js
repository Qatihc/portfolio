import "./ProjectsPage.css"
import { projectsData } from "../../projectsData/";
import { ProjectCard } from "../../components/ProjectCard";
import { boolAlternate } from "../../utils";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <div className="projects-page-container">
      <motion.div 
        className="projects-header"
        initial={{ opacity: 0, translateX: '10%'}}
        animate={{ opacity: 1, translateX: '0%'}}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <h2 className="projects-title">Proyectos<span className="accent-text">.</span></h2>
        <p className="projects-subtitle">Algunos de los proyectos en los que trabaje.</p>
      </motion.div>
      <ul className="projects-list">
        {projectsData.map((project) => {
          const reverse = boolAlternate();
          return (
          <li 
            data-aos= {reverse ? "fade-right" : 'fade-left'}
            data-aos-duration="500"
            data-aos-anchor-placement="top-top"
          >
            <ProjectCard
              title={project.title}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveDemoUrl={project.liveDemoUrl}
              shortDescription={project.shortDescription}
              thumbnailImg={project.thumbnailImg}
              reverse={reverse}
            />
          </li>
          )}
        )}
      </ul>
    </div>
  )
};

export default ProjectsPage;