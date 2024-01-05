import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de componentes a renderizar en las rutas
import App from '../App.jsx';
import HomeAdministrador from '../views/HomeAdministrador.jsx';
import HomeInquilino from '../views/HomeInquilino.jsx';  // Importa el componente HomeInquilino

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Ruta para el modal de Login */}
        <Route path="/login" element={<App showModal={true} loginModal={true} />} />
        {/* Ruta para el modal de Contacto */}
        <Route path="/contacto" element={<App showModal={true} contactModal={true} />} />
        {/* Ruta para HomeAdministrador */}
        <Route path="/home-administrador" element={<HomeAdministrador />} />
        {/* Ruta para HomeInquilino */}
        <Route path="/home-inquilino" element={<HomeInquilino />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;



