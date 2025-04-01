// Em src/index.js ou src/App.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'; // SEU CSS CUSTOMIZADO DEVE VIR DEPOIS DO BOOTSTRAP

// *** IMPORTANTE: BOOTSTRAP JS BUNDLE ***
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // <-- Adicione/Confirme esta linha

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);