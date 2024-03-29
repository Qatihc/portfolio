import styles from "./ProjectCard.module.css"
import { Button } from "../Button";
import { IconContainer } from "../IconContainer";

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
    <div className={styles.cardContainer}>
      <div className={
        (reverse ? `${styles.reverse} ` : "") + styles.thumbnailContainer
      }>
        <img className={styles.thumbnail + " neon-box"} src={thumbnailImg}></img>
      </div>
      <div className={styles.cardDetails}>
        <div className={''}>
          <h2 className={styles.title}>{title}</h2>
          <ul className={styles.tagsList}>
            {tags && tags.map(tag => 
              <li className={styles.tags}>{tag}</li>
            )}
          </ul>
          <p className={styles.description}>{shortDescription}</p>
        </div>
        <nav className={styles.linkList}>
          {liveDemoUrl && 
            <a href={liveDemoUrl}>
              <Button>Live Demo</Button>
            </a>
          }
          {githubUrl && 
            <a href={githubUrl}> 
              <IconContainer>
                <img src="github.svg" alt="github logo" className={styles.githubIcon}/>
              </IconContainer>
            </a>
          }
        </nav>
      </div>
    </div>
  )
}

export default ProjectCard;

