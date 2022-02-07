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

import pomodoroImg from "./images/pomodoro.png"
import recetasImg from "./images/recetas.png"
import cryptoPortfolioImg from "./images/cryptoPortfolio.png"

const projectsData = [
  {
    title: 'Cripto-Portfolio',
    tags: ['Node', 'Express', 'JWT', 'MongoDb', 'Mongoose', 'Webpack', 'Babel', 'React', 'Redux', 'RTK Query', 'Styled Components', 'Git'],
    githubUrl: 'https://github.com/Qatihc/Crypto-Portfolio',
    liveDemoUrl: 'livedemo',
    shortDescription: 'Aplicacion full stack CRUD desarrollada para guardar registro de transacciones realizadas con criptomonedas. Permite registrar nuevos usuarios, agregar, modificar y eliminar transacciones. Usando la API de coingecko actualizo periodicamente los precios de las monedas que el usuario haya registrado.',
    thumbnailImg: cryptoPortfolioImg,
    lightBackgroundThumbnail: true
  },
  {
    title: 'Pomodoro',
    tags: ['React','React helmet', 'CSS modules', 'Webpack', 'Git'],
    githubUrl: 'https://github.com/Qatihc/pomodoro',
    liveDemoUrl: 'https://qatihc.github.io/pomodoro/',
    shortDescription: 'Implementacion en React de la tecnica Pomodoro, usada para administrar tiempo. Permite ajustar la duracion de los intervalos de descanso y de trabajo, y hace sonar una campana cuando terminan los intervalos seleccionados. Hace uso de React helmet para actualizar el estado actual del temporizador en el titulo de la pestaña. ',
    thumbnailImg: pomodoroImg
  },
  {
    title: 'Buscador recetas',
    tags: ['React', 'Css modules', 'Axios', 'Framer motion', 'Git'],
    githubUrl: 'https://github.com/Qatihc/buscar_receta_por_ingredientes',
    liveDemoUrl: 'TODO',
    shortDescription: 'Aplicacion desarrollada con React que permite al usuario ingresar una lista de ingredientes que tenga a mano, y luego usando la API de Spoonacular muestra una receta que use algunos de los ingredientes elegidos.',
    thumbnailImg: recetasImg
  }
]

export default projectsData;
