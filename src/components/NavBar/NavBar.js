import "./NavBar.css"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  // deshabilita el scroll cuando se abre la navbar.
  useEffect(() => {
    (document.body.style.overflow = navbarOpen ? 'hidden' : 'unset')
  },
  [navbarOpen]);

  const handleNavbarToggle = (e) => {
    setNavbarOpen(!navbarOpen);
  }

  const handleNavbarClose = (e) => {
    setNavbarOpen(false);
  }

  const scrollToBottom = (e) => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  return (
    <header className={"navbar-container " + (navbarOpen ? "navbar-open" : '')}>
      <nav class={"navbar-list-container " + (navbarOpen ? "navbar-open" : '')}>
        <ul className={"navbar-list " + (navbarOpen ? "navbar-open" : '')}>
          <li className="navbar-item" onClick={handleNavbarClose}><NavLink to="/">Inicio</NavLink></li>
          <li className="navbar-item" onClick={handleNavbarClose}><NavLink to="/projects">Proyectos</NavLink></li>
          <li className="navbar-item" onClick={handleNavbarClose}><NavLink to="/about">Sobre mi</NavLink></li>
          <li className="navbar-item" onClick={handleNavbarClose}><a onClick={scrollToBottom}>Contacto</a></li>
        </ul>
      </nav>
      <div className={"navbar-open-btn " + (navbarOpen ? "navbar-open" : '')} onClick={handleNavbarToggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </header>
  )
}

export default NavBar;