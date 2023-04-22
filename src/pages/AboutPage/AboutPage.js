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
          <h2 className={styles.title}>Sobre mi<span className="light-neon">.</span></h2>
        </motion.div>
        <section className={styles.text}>
        <p className={styles.paragraph}>
          Soy Matias Casali, estudiante de cuarto año en la carrera Ciencias de la Computacion en la UBA. 
          Me encanta la tecnologia y la programacion, trato todos los dias de aprender algo nuevo.
        </p>
        <p className={styles.paragraph}>
          Tengo 1 año y medio de experiencia como full-stack developer, trabajando con metodologias Agile en un contexto cambiante y 
          habiendo implementado soluciones tanto en frontend como en backend.
        </p>
        <p className={styles.paragraph}>
          Dentro del frontend, mis herramientas principales son <em className="light-neon">Typescript y React</em>, 
          pero tambien vuelvo frecuentemente a las bases: HTML, CSS y Javascript.
        </p>
        <p className={styles.paragraph}>
          Para resolver problemas en el backend, suelo usar <em className="light-neon">Java y Node</em>, usualmente en el contexto
          de los frameworks Spring boot y Express. En cuanto a bases de datos, tengo experiencia con <em className="light-neon">Postgresql y MongoDB</em>.
        </p>

        <p>He trabajado tambien con <em className="light-neon">AWS</em>, habiendo usado una gran variedad de sus servicios, entre ellos S3, EC2, Lambda
        y Sagemaker.</p>
        <p className={styles.paragraph}>

        </p>
        <p className={styles.paragraph}>
          Estoy abierto a cualquier tipo de colaboracion o propuesta laboral, asi que no dudes en contactarme!
        </p>
        </section>
      </motion.div>
    </>
  )
}

export default AboutPage;