// En AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App.jsx';
import HomeAdministrador from '../views/HomeAdministrador.jsx';
import HomeInquilino from '../views/HomeInquilino.jsx';
import Perfil from '../components/Perfil.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<App showModal={true} loginModal={true} />} />
        <Route path="/contacto" element={<App showModal={true} contactModal={true} />} />
        <Route path="/home-administrador" element={<HomeWithPerfil userType="administrador" />} />
        <Route path="/home-inquilino" element={<HomeWithPerfil userType="inquilino" />} />

        {/* Agrega una ruta específica para Perfil */}
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
};

const HomeWithPerfil = ({ userType }) => (
  <>
    {userType === 'administrador' ? <HomeAdministrador /> : <HomeInquilino />}
    {/* No incluyas Perfil aquí */}
  </>
);

export default AppRoutes;






