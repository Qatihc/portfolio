import styles from './Button.module.css'

const Button = ({ children }) => {
  return (
    <button class={styles.accentBtn}>{children}</button>
  )
}

export default Button;