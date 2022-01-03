import "./ProjectCard.css"

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card-container">
      {project.title}
    </div>
  )
}

export default ProjectCard;