import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { store } from './App/store'; // Asegúrate de que la ruta es correcta

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
