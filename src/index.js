import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import aos from 'aos';
import "aos/dist/aos.css"

aos.init();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
