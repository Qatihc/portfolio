import styles from './Footer.module.css'
import Contact from './Contact';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Contact />
      <div><p className={styles.text}>© 2022 Matias Casali</p></div>
    </footer>
  )
}

export default Footer;