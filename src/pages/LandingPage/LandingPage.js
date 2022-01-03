import "./LandingPage.css";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <motion.div 
        className="text-container"
        initial={{ opacity: 0, translateY: '20%'}}
        animate={{ opacity: 1, translateY: '0%'}}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <p>Ab! <span className="accent-text">cd</span></p>
        <div className="middle-text">
          <h1 className="landing-title">Rodrigo de,.,,, <br/> la republica</h1>
          <p><span className="accent-text">no soy...</span> asdasdasd</p>
        </div>
        <Link to="projects" className="projects-btn-anchor"><button class="accent-btn">Proyectos →</button></Link>
      </motion.div>
    </div>
  )
}

export default LandingPage;