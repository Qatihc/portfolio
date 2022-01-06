import "./LandingPage.css";
import { motion } from 'framer-motion';

import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Matias Casali</title>
      </Helmet>
      <div className="landing-page-container">
        <motion.div 
          className="text-container"
          initial={{ opacity: 0, translateY: '-20%'}}
          animate={{ opacity: 1, translateY: '0%'}}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
          <p>Absa</p>
          <div className="middle-text">
            <h1 className="landing-title">Rodrigo de,.,,, <br/> la republica</h1>
            <p><span className="accent-text">no soy...</span> asdasdasd</p>
          </div>
          <Link to="projects" className="projects-btn-anchor"><Button>Proyectos →</Button></Link>
        </motion.div>
      </div>
    </>
  )
}

export default LandingPage;