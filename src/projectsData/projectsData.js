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
import recetasImg from "./images/recetas.png"

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
    shortDescription: 'Implementacion en React de la tecnica Pomodoro, usada para administrar tiempo. Permite ajustar la duracion de los intervalos de descanso y de trabajo, y hace sonar una campana cuando terminan los intervalos seleccionados. Hace uso de React helmet para actualizar el estado actual del temporizador en el titulo de la pestaña. ',
    thumbnailImg: pomodoroImg
  },
  {
    title: 'Buscador recetas',
    tags: ['React', 'Css modules', 'Axios', 'Framer motion'],
    githubUrl: 'https://github.com/Qatihc/buscar_receta_por_ingredientes',
    liveDemoUrl: 'TODO',
    shortDescription: 'Aplicacion sencilla desarrollada con React que haciendo uso de la API de Spoonacular muestra recetas que emplean algunos de los ingredientes que el usuario haya ingresado.',
    thumbnailImg: recetasImg
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
