import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App.jsx';
import HomeAdministrador from '../views/HomeAdministrador.jsx';
import HomeInquilino from '../views/HomeInquilino.jsx';
import Perfil from '../components/Perfil.jsx';  // Importa el componente Perfil

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<App showModal={true} loginModal={true} />} />
        <Route path="/contacto" element={<App showModal={true} contactModal={true} />} />
        <Route
          path="/home-administrador"
          element={
            <>
              <HomeAdministrador />
              <Perfil userType="administrador" /> {/* Renderiza el modal de perfil */}
            </>
          }
        />
        <Route
          path="/home-inquilino"
          element={
            <>
              <HomeInquilino />
              <Perfil userType="inquilino" /> {/* Renderiza el modal de perfil */}
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;




