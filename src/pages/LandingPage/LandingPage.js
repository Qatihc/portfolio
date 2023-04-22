import { motion } from 'framer-motion';
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./LandingPage.module.css";
import { NeonBorderBottom, NeonBorderTop } from "../../components/NeonBorder";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        {/* La M es el favicon */}
        <title>atias Casali</title>
      </Helmet>
      <div className={styles.pageContainer}>
        <div className={styles.neonContainer}>
          <NeonBorderTop className={styles.neonBorder + " " + styles.topNeonBorder}/>
          <NeonBorderBottom className={styles.neonBorder + " " + styles.bottomNeonBorder}/>
          <div 
            className={styles.textContainer}
          >
            <p><span className={"neon"}>Bienvenido!</span> soy</p>
            <div className={styles.text}>
              <h1 className={styles.title}>Matias<br/>Casali</h1>
              <p><em className="neon">full-stack</em> developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage;