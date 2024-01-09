import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Agrega Link
import { setModalState, openModal } from '../flux/actions';
import logo from '../assets/img/logo.png';
import perfilImage from '../assets/img/perfil.png';
import gastosImage from '../assets/img/gastos.png';
import tareasImage from '../assets/img/tareas.png';
import configuracionImage from '../assets/img/configuracion.png';
import Perfil from '../components/Perfil.jsx';

const HomeAdministrador = () => {
  const { user, modalIsOpen } = useSelector((state) => state);
  const username = user.username;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenPerfilModal = () => {
    dispatch(openModal());
    navigate('/perfil');
  };

  const handleCloseModal = () => {
    dispatch(setModalState(false));
  };

  const handleNavigateToAdminPanel = () => {
    navigate('/administrar-panel');
  };

  return (
    <div className="contenedor mt-4 mb-4 p-4">
      <div className="row">
        {/* Logo */}
        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
          <img src={logo} alt="Logo" className="contenedor-logo img-fluid img-logo" />
          <div className="d-md-flex flex-column align-items-center ms-md-3">
            <p className="bienvenido-texto">Bienvenido,</p>
            <div className="nombre-apellido-container">
              <p className="nombre-apellido-texto nombre-texto">{username}</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-8 text-center fila-imagen-personalizada d-flex flex-wrap">
          {/* Icono "Mi perfil" */}
          <div className="col-6 col-md-6 mb-3" onClick={handleOpenPerfilModal} style={{ cursor: 'pointer' }}>
            <div className="contenedor-imagen contenedor-imagen-debajo contenedor-imagen-primera">
              <img src={perfilImage} alt="Mi perfil" className="img-fluid" />
            </div>
            <p className="texto-debajo-imagen">Mi perfil</p>
          </div>

          {/* Icono "Cuentas pendientes" */}
          <div className="col-6 col-md-4 mb-md-3">
            <div className="contenedor-imagen contenedor-imagen-debajo">
              <img src={gastosImage} alt="Cuentas pendientes" className="img-fluid" />
            </div>
            <p className="texto-debajo-imagen">Cuentas pendientes</p>
          </div>

          {/* Icono "Tareas pendientes" */}
          <div className="col-6 col-md-6 mb-3">
            <div className="contenedor-imagen contenedor-imagen-debajo">
              <img src={tareasImage} alt="Tareas pendientes" className="img-fluid" />
            </div>
            <p className="texto-debajo-imagen">Tareas pendientes</p>
          </div>

          {/* Icono "Administración" sin Link */}
          <div className="col-6 col-md-4 mb-md-3" onClick={handleNavigateToAdminPanel} style={{ cursor: 'pointer' }}>
            <div className="contenedor-imagen contenedor-imagen-debajo">
              <img src={configuracionImage} alt="Administración" className="img-fluid icono-administracion" />
              <p className="texto-debajo-imagen">Administración</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de perfil */}
      <Perfil isOpen={modalIsOpen} onRequestClose={handleCloseModal} perfilModal={true} />
    </div>
  );
};

export default HomeAdministrador;

















