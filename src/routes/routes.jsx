// AppRoutes.jsx
import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import App from '../App.jsx';
import HomeAdministrador from '../views/HomeAdministrador.jsx';
import HomeInquilino from '../views/HomeInquilino.jsx';
import Perfil from '../components/Perfil.jsx';
import PanelAdministracion from '../views/PanelAdministracion.jsx';
import RegistroInquilino from '../components/RegistroInquilino.jsx';
import EliminarInquilino from '../components/EliminarInquilino.jsx';

const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      const allowedPathsForAdministrador = [
        '/administrar-panel',
        '/registro-inquilino',
        '/eliminar-inquilino',
        '/perfil'
      ];

      if (storedUserType.toLowerCase() === 'administrador') {
        // Permitir el acceso a /registro-inquilino para usuarios administradores
        if (allowedPathsForAdministrador.some(path => window.location.pathname.includes(path))) {
          return;
        }
        navigate(`/home-${storedUserType.toLowerCase()}`, { replace: true });
      } else if (storedUserType.toLowerCase() === 'inquilino') {
        // Permitir el acceso a /perfil para usuarios inquilinos
        if (window.location.pathname.includes('/perfil')) {
          return;
        }
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
      <Route path="/eliminar-inquilino" element={<EliminarInquilino />} />

      <Route path="/logout" element={<Navigate to="/" replace={true} state={{ from: '/' }} />} />
      <Route path="/registro" element={<App showModal={true} registroModal={true} />} />
    </Routes>
  );
};

export default AppRoutes;













































