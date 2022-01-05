import "./ProjectCard.css"

import { Button } from "../Button";

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
      <div className="project-card-information">
        <div className="project-card-main-information">
          <h2 className="project-card-title">{title}</h2>
          <ul className="project-card-tag-list">
            {tags && tags.map(tag => 
              <li className="project-card-tag">{tag}</li>
            )}
          </ul>
          <p className="project-card-short-description">{shortDescription}</p>
        </div>
        <nav className="project-card-links">
          {liveDemoUrl && <a href={liveDemoUrl}><Button>Live Demo</Button></a>}
          {githubUrl && <a href={githubUrl}><img src="github.svg" alt="github logo " class="project-card-github-logo"/></a>}
{/*         {hasDetailsPage && <a href={githubUrl}>detalles</a>} */}
        </nav>
      </div>
    </div>
  )
}

export default ProjectCard;

