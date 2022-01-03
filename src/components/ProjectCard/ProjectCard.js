import "./ProjectCard.css"

import { Link } from "react-router-dom";

const ProjectCard = ({ 
  title,
  tags,
  githubUrl,
  liveDemoUrl,
  shortDescription,
  thumbnailImg,
  reverse
}) => {
  return (
    <div className="project-card-container">
      <div className={"project-thumbnail-container" + (reverse ? " reverse" : "")}>
        <img className="project-card-thumbnail" src={thumbnailImg}></img>
      </div>
      <div className="project-card-description">
        <h2 className="project-card-title">{title}</h2>
        <p className="project-card-short-description">{shortDescription}</p>
        <ul className="project-card-tag-list">
          {tags && tags.map(tag => 
            <li className="project-card-tag">{tag}</li>
          )}
        </ul>
        <nav className="project-card-links">
          {githubUrl && <a href={githubUrl}>github</a>}
          {liveDemoUrl && <a href={liveDemoUrl}>Live Demo</a>}
          
        </nav>
      </div>
    </div>
  )
}

export default ProjectCard;