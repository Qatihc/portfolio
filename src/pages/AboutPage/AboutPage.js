import "./AboutPage.css"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"

const AboutPage = () => {
  return (
    <>
    <Helmet>
      <title>Matias Casali | Acerca de</title>
    </Helmet>
    <motion.div className="about-page-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, translateX: '10%'}}
          animate={{ opacity: 1, translateX: '0%'}}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
          <h2 className="about-title">Sobre mi<span className="accent-text">.</span></h2>
        </motion.div>
        <p className="about-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis feugiat condimentum. Duis in bibendum mauris. Curabitur non dolor eu dolor vestibulum pellentesque id id urna. Vestibulum sed tincidunt metus, in consequat velit. Suspendisse laoreet, velit sit amet volutpat molestie, velit quam convallis magna, et feugiat dui odio id odio. Donec vitae ultrices mauris. Nam molestie libero in ligula molestie, et imperdiet ligula ullamcorper. Etiam molestie libero in convallis aliquet.

Donec facilisis hendrerit orci, eget fringilla urna feugiat sed. Sed commodo nunc sed odio tincidunt ultricies. Donec viverra tempus vehicula. Nullam eu finibus magna, quis scelerisque risus. Fusce sit amet pharetra velit. Duis ut faucibus massa. Nulla ut interdum lorem. Donec congue dui nec mi vehicula, vel efficitur leo semper. Curabitur laoreet diam eros. Nunc rutrum quam lorem, id aliquam felis condimentum ac. Duis commodo rhoncus dignissim. Etiam odio urna, volutpat ut accumsan porta, tempor at neque. Quisque quis augue eu velit varius rhoncus. 
        </p>
      </motion.div>
    </>
  )
}

export default AboutPage;