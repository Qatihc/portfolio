import { motion } from 'framer-motion';
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        {/* La M es el favicon */}
        <title>atias Casali</title>
      </Helmet>
      <div className={styles.pageContainer}>
        <motion.div 
          className={styles.textContainer}
          initial={{ opacity: 0, translateY: '-20%'}}
          animate={{ opacity: 1, translateY: '0%'}}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
          <p>Hola! soy</p>
          <div className={styles.text}>
            <h1 className={styles.title}>Matias<br/>Casali</h1>
            <p><em className="accent">full-stack</em> developer</p>
          </div>
          <Link to="projects" className={styles.buttonContainer}><Button>Proyectos →</Button></Link>
        </motion.div>
      </div>
    </>
  )
}

export default LandingPage;