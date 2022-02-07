import { IconContainer } from '../IconContainer';
import styles from './Contact.module.css'


const Contact = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Tambien me podes encontrar por aca</p>
      <ul className={styles.iconContainer}>
        <li>
          <a href="https://github.com/Qatihc">
            <IconContainer>
              <img alt="github icon" src="github.svg" className={styles.svgIcon} />
            </IconContainer>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/matias-c-9ab3981a0/">
            <IconContainer>
              <img alt="linkedin icon" src="linkedin.svg" className={styles.svgIcon} />
            </IconContainer>
          </a>
        </li>
        <li>
          <a>
            <IconContainer>
              <img alt="mail icon" src="mail.svg" className={styles.svgIcon} />
            </IconContainer>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact;