import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes/routes.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ReactModal from 'react-modal';

// Configuración de React Modal
ReactModal.setAppElement('#root');

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

