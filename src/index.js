import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import aos from 'aos';
import "aos/dist/aos.css"

aos.init();
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
