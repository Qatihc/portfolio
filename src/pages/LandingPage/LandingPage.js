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
          <h1>Masdasd asnklCas</h1>
          <p><span className="accent-text">Fasdull-stqack</span> develwaeoper</p>
        </div>
        <Link to="projects"><button class="accent-btn">Proyectos →</button></Link>
      </motion.div>
    </div>
  )
}

export default LandingPage;