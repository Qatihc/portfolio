import styles from './IconContainer.module.css'

const IconContainer = ({ children, borderSize }) => {
  return (
    <div className={styles.IconBorder} style={{borderWidth: borderSize}}>
      {children}
    </div>
  )
}

export default IconContainer;