import { projectsData } from "../../projectsData/";
import { ProjectCard } from "../../components/ProjectCard";
import { boolAlternate } from "../../utils";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import styles from "./ProjectsPage.module.css"

const ProjectsPage = () => {
  return (
    <>
    <Helmet>
      <title>atias Casali | Proyectos  </title>
    </Helmet>
      <div className={styles.pageContainer}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, translateX: "10%"}}
          animate={{ opacity: 1, translateX: "0%"}}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <h2 className={styles.title}>Proyectos<span className="accent">.</span></h2>
          <p className={styles.subtitle}>Algunos de los proyectos en los que trabaje.</p>
        </motion.div>
        <ul>
          {projectsData.map((project) => {
            const reverse = boolAlternate();
            return (
            <li
              key={project.title}
              data-aos= {reverse ? "fade-right" : "fade-left"}
              data-aos-duration="500"
            >
              <section>
                <ProjectCard
                  title={project.title}
                  tags={project.tags}
                  githubUrl={project.githubUrl}
                  liveDemoUrl={project.liveDemoUrl}
                  shortDescription={project.shortDescription}
                  thumbnailImg={project.thumbnailImg}
                  reverse={reverse}
                />
              </section>
            </li>
            )}
          )}
        </ul>
      </div>
    </>
  )
};

export default ProjectsPage;