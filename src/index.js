import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes/routes.jsx';
import ReactModal from 'react-modal';
import { Provider } from 'react-redux';
import store from './flux/store.js';

// Configuración de React Modal
ReactModal.setAppElement('#root'); // Establece el elemento raíz de la aplicación para React Modal

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Envuelve la aplicación con el componente Provider de Redux para proporcionar el store */}
      <AppRoutes />
      {/* Componente principal que contiene las rutas de la aplicación */}
    </Provider>
  </React.StrictMode>
);



