import "./ProjectCard.css"

import { Link } from "react-router-dom";

const ProjectCard = ({ 
  title,
  tags,
  githubUrl,
  liveDemoUrl,
  shortDescription,
  thumbnailImg 
}) => {
  return (
    <div className="project-card-container">
      <div className="project-thumbnail-container">
        <img className="project-thumbnail" src={thumbnailImg}></img>
      </div>
      <div className="project-card-description">
        <h2 className="project-card-title">{title}</h2>
        <ul className="project-card-tag-list">
          {tags && tags.map(tag => 
            <li className="project-card-tag">{tag}</li>
          )}
        </ul>
        <p className="project-card-short-description">{shortDescription}</p>
        <nav className="project-card-links">
          {githubUrl && <a href={githubUrl}>github</a>}
          {liveDemoUrl && <a href={liveDemoUrl}>Live Demo</a>}
          
        </nav>
      </div>
    </div>
  )
}

export default ProjectCard;