import "./NavBar.css"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li className="navbar-item"><NavLink to="/">Inicio</NavLink></li>
        <li className="navbar-item"><NavLink to="/projects">Proyectos</NavLink></li>
        <li className="navbar-item"><NavLink to="/about">Sobre mi</NavLink></li>
        <li className="navbar-item"><NavLink to="/contact">Contacto</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;