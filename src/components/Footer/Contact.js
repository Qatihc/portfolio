import { IconContainer } from '../IconContainer';
import styles from './Contact.module.css'


const Contact = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Tambien me podes encontrar por aca</p>
      <ul className={styles.iconContainer}>
        <li>
          <IconContainer>
            <img alt="github icon" src="github.svg" className={styles.svgIcon} />
          </IconContainer>
        </li>
        <li>
          <IconContainer>
            <img alt="linkedin icon" src="linkedin.svg" className={styles.svgIcon} />
          </IconContainer>
        </li>
        <li>
          <IconContainer>
            <img alt="mail icon" src="mail.svg" className={styles.svgIcon} />
          </IconContainer>
        </li>
      </ul>
    </div>
  )
}

export default Contact;