import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App.jsx';
import HomeAdministrador from '../views/HomeAdministrador.jsx';
import HomeInquilino from '../views/HomeInquilino.jsx';
import Perfil from '../components/Perfil.jsx';
import RegistroForm from '../components/RegistroForm.jsx'; // Importa el componente RegistroForm

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

      {/* Ruta para el formulario de registro */}
      <Route path="/registro" element={<App showModal={true} registroModal={true} />} />
    </Routes>
  );
};

export default AppRoutes;










