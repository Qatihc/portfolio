import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import styles from "./AboutPage.module.css"

const AboutPage = () => {
  return (
    <>
    <Helmet>
      <title>atias Casali | Acerca de</title>
    </Helmet>
    <motion.div className={styles.pageContainer}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, translateX: '10%'}}
          animate={{ opacity: 1, translateX: '0%'}}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
          <h2 className={styles.title}>Sobre mi<span className="accent">.</span></h2>
        </motion.div>
        <section className={styles.text}>
        <p className={styles.paragraph}>
          Soy Matias Casali, estudiante de tercer año en la carrera Ciencias de la Computacion de la UBA. <br />
          Me encanta la tecnologia y la programacion, trato todos los dias de aprender algo nuevo.
        </p>
        <p className={styles.paragraph}>
          En este momento estoy centrandome principalmente en mejorar mis habilidades
          como desarrollador web, incluyendo <em className="accent">HTML, JS vanilla, CSS </em>
          y tecnologias como <em className="accent">React, Redux y Styled Components</em>. <br />
        </p>
        <p className={styles.paragraph}>
          Algunos de mis proyectos necesitaron APIs que los soportaran, y las implemente
          usando <em className="accent">NodeJS, Express y MongoDB</em>.
        </p>
        <p className={styles.paragraph}>
          Ademas de la programacion web, me interesa expandir mi conocimiento en los lenguajes de programacion Rust y Go, 
          y entender en mayor detalle como funcionan la criptografia y las criptomonedas.
        </p>
        <p className={styles.paragraph}>
          Estoy abierto a cualquier tipo de colaboracion o propuesta laboral, asi que ante cualquier duda mandame un mail!
        </p>
        </section>
      </motion.div>
    </>
  )
}

export default AboutPage;