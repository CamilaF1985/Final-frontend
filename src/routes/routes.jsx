// En AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App.jsx';
import HomeAdministrador from '../views/HomeAdministrador.jsx';
import HomeInquilino from '../views/HomeInquilino.jsx';
import Perfil from '../components/Perfil.jsx'; // Importa el componente para la ruta "/perfil"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<App showModal={true} loginModal={true} />} />
      <Route path="/contacto" element={<App showModal={true} contactModal={true} />} />
      
      {/* Perfil se integrará directamente en las rutas de HomeAdministrador e HomeInquilino */}
      <Route path="/home-administrador" element={<HomeAdministrador showModal={true} perfilModal={true} />} />
      <Route path="/home-inquilino" element={<HomeInquilino showModal={true} perfilModal={true} />} />
      
      {/* Ruta para el perfil */}
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
};

export default AppRoutes;









