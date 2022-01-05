import './Button.css'

const Button = ({ children }) => {
  return (
    <button class="accent-btn">{children}</button>
  )
}

export default Button;