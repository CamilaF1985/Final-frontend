// AppRoutes.jsx
import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import App from '../App.jsx';
import HomeAdministrador from '../views/HomeAdministrador.jsx';
import HomeInquilino from '../views/HomeInquilino.jsx';
import Perfil from '../components/Perfil.jsx';
import PanelAdministracion from '../views/PanelAdministracion.jsx'; 
import RegistroInquilino from '../components/RegistroInquilino.jsx';

const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      if (storedUserType.toLowerCase() === 'administrador') {
        if (window.location.pathname.includes('/administrar-panel')) {
          return;
        }
        navigate(`/home-${storedUserType.toLowerCase()}`, { replace: true });
      } else {
        navigate(`/home-${storedUserType.toLowerCase()}`, { replace: true });
      }
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<App showModal={true} loginModal={true} />} />
      <Route path="/login" element={<App showModal={true} loginModal={true} />} />
      <Route path="/contacto" element={<App showModal={true} contactModal={true} />} />

      <Route path="/home-administrador" element={<HomeAdministrador />} />
      <Route path="/home-inquilino" element={<HomeInquilino />} />
      <Route path="/perfil" element={<Perfil />} />

      <Route path="/administrar-panel" element={<PanelAdministracion />} /> 
      <Route path="/registro-inquilino" element={<RegistroInquilino />} />

      <Route path="/logout" element={<Navigate to="/" replace={true} state={{ from: '/' }} />} />
      <Route path="/registro" element={<App showModal={true} registroModal={true} />} />
    </Routes>
  );
};

export default AppRoutes;













































