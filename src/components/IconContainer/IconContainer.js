import styles from './IconContainer.module.css'

const IconContainer = ({ children, className }) => {
  return (
    <div className={`${styles.iconBorder} ${className}`}>
      {children}
    </div>
  )
}

export default IconContainer;