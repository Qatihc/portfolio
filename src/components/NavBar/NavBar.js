import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

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

  const navbarOpenClass = (navbarOpen ? styles.open : '')

  return (
    <header className={`${styles.navbarContainer} ${navbarOpenClass}`}>
      <nav className={`${styles.listContainer} ${navbarOpenClass}`}>
        <ul className={`${styles.list} ${navbarOpenClass}`}>
          <li className={styles.item} onClick={handleNavbarClose}>
            <NavLink className={styles.link} to="/">Inicio</NavLink>
          </li>
          <li className={styles.item} onClick={handleNavbarClose}>
            <NavLink className={styles.link} to="/projects">Proyectos</NavLink>
          </li>
          <li className={styles.item} onClick={handleNavbarClose}>
            <NavLink className={styles.link} to="/about">Sobre mi</NavLink>
          </li>
          <li className={styles.item} onClick={handleNavbarClose}>
            <a className={styles.link} onClick={scrollToBottom}>Contacto</a>
          </li>
        </ul>
      </nav>
      <div className={`${styles.openBtn} ${navbarOpenClass}`} onClick={handleNavbarToggle}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </header>
  )
}

export default NavBar;