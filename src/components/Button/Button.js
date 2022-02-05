import styles from './Button.module.css'

const Button = ({ children }) => {
  return (
    <button className={styles.accentBtn}>{children}</button>
  )
}

export default Button;