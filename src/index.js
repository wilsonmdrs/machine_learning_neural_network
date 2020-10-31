import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/index'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import './assets/scss/style.scss'
import 'react-h5-audio-player/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

// Carregando todos os tipo de ícones Free
library.add(fas, far, fab);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
