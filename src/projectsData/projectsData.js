/* Contiene la informacion de los proyectos que voy a mostrar. */
/* 
  A continuacion explico que contiene cada campo. 
  Los que se encuentran entre parentesis son opcionales.

  title: titulo del proyecto.
  tags: tecnologias usadas en el proyecto.
  (githubUrl): enlace al repositorio de github donde se encuentra el proyecto.
  (liveDemoUrl): enlace a la demo del proyecto.
  shortDescription: descripcion corta del proyecto que se mostrara en la pagina de proyectos.
  thumbnailImg: imagen del proyecto que se mostrara en la pagina de proyectos.
*/

import img from "./images/imagen_3.png"
import pomodoroImg from "./images/pomodoro.png"

const projectsData = [
  {
    title: 'Cripto-Portfolio',
    tags: ['Node', 'Express', 'MongoDb', 'Mongoose', 'React', 'Redux', 'Sass'],
    githubUrl: 'git',
    liveDemoUrl: 'livedemo',
    shortDescription: 'Aplicacion full stack CRUD desarrollada para guardar registro de las transacciones realizadas con criptomonedas. Actualiza los precios periodicamente con la ayuda de la API de Coingecko. Permite registrar nuevos usuarios, agregar, modificar y eliminar transacciones, y calcular retornos diarios, semanales y mensuales.',
    thumbnailImg: img
  },
  {
    title: 'Pomodoro',
    tags: ['React','React helmet', 'CSS modules', 'Webpack'],
    githubUrl: 'https://github.com/Qatihc/pomodoro',
    liveDemoUrl: 'https://qatihc.github.io/pomodoro/',
    shortDescription: 'Implementacion pomodoro ... TODO ...',
    thumbnailImg: pomodoroImg
  },
  {
    title: 'proyecto 1332',
    tags: ['js', 'java', 'script', 'ks y javascr'],
    githubUrl: 'git',
    liveDemoUrl: 'livedemo',
    shortDescription: 'nlaskdfknsafklnas flknaskl nfasl kn fank lsfn kalsflknas fknlas nklfk nlas fnlkasf nklasnklf alnksf lnk',
    thumbnailImg: img
  },
  {
    title: 'Este portfolio!',
    tags: ['React', 'React-router', 'Framer motion', 'Mucho CSS'],
    githubUrl: 'git',
    liveDemoUrl: 'livedemo',
    shortDescription: 'El portfolio es este portfolio que es este portfol;io es el portfolio este este este protfoililon and portoflio the port is the port of port usb',
    thumbnailImg: img
  }
]

export default projectsData;
