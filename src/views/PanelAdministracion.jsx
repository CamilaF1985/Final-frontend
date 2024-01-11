import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegistroInquilino from '../components/RegistroInquilino.jsx';
import EliminarInquilino from '../components/EliminarInquilino.jsx';
import { setModalState, openModal } from '../flux/modalActions';
import { useNavigate } from 'react-router-dom';
import configuracionIcon from '../assets/img/configuracion.png';
import gastosIcon from '../assets/img/administracion-gastos.png';
import tareasIcon from '../assets/img/administracion-tareas.png';
import perfilImage from '../assets/img/perfil.png';

const PanelAdministracion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { modalIsOpen } = useSelector((state) => state);

  const handleOpenRegistroInquilinoModal = () => {
    dispatch(openModal());
    navigate('/registro-inquilino');
  };

  const handleOpenEliminarInquilinoModal = () => {
    dispatch(openModal());
    navigate('/eliminar-inquilino');
  };

  const handleCloseModal = () => {
    dispatch(setModalState(false));
  };

  const handleVolverAlHome = () => {
    navigate('/home-inquilino');
  };

  // Función para determinar qué componente de modal renderizar según la ruta actual
  const renderInquilinoModal = () => {
    const currentPath = window.location.pathname;

    if (currentPath === '/registro-inquilino') {
      return <RegistroInquilino isOpen={modalIsOpen} onRequestClose={handleCloseModal} RegistroInquilinoModal={true} />;
    } else if (currentPath === '/eliminar-inquilino') {
      return <EliminarInquilino isOpen={modalIsOpen} onRequestClose={handleCloseModal} EliminarInquilinoModal={true} />;
    } else {
      return null; // Puedes devolver null si no estás en ninguna de las rutas relevantes
    }
  };

  return (
    <div className="contenedor mt-4 mb-4 p-4">
      <div className="row">
        {/* Icono de configuración */}
        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
          <img src={configuracionIcon} alt="Panel de configuración" className="contenedor-logo img-fluid img-logo" />
          <div className="d-md-flex flex-column align-items-center ms-md-3">
            <p className="bienvenido-texto">Panel de configuración</p>
          </div>
        </div>

        {/* Iconos de administración */}
        <div className="col-12 col-md-8 text-center fila-imagen-personalizada d-flex flex-wrap">
          {/* Icono "Administrar gastos" */}
          <div className="col-6 col-md-4 mb-md-3" style={{ cursor: 'pointer' }}>
            <div className="contenedor-imagen contenedor-imagen-debajo">
              <img src={gastosIcon} alt="Administrar gastos" className="img-fluid" />
            </div>
            <p className="texto-debajo-imagen">Administrar gastos</p>
            <p className="texto-debajo-imagen-sub">Agregar factura</p>
            <p className="texto-debajo-imagen-sub">Eliminar factura</p>
          </div>

          {/* Icono "Administrar tareas" */}
          <div className="col-6 col-md-4 mb-md-3" style={{ cursor: 'pointer' }}>
            <div className="contenedor-imagen contenedor-imagen-debajo">
              <img src={tareasIcon} alt="Administrar tareas" className="img-fluid" />
            </div>
            <p className="texto-debajo-imagen">Administrar tareas</p>
            <p className="texto-debajo-imagen-sub">Agregar tarea</p>
            <p className="texto-debajo-imagen-sub">Eliminar tarea</p>
          </div>

          {/* Texto "Agregar Inquilino" para abrir el modal de RegistroInquilino */}
          <div className="col-6 col-md-4 mb-md-3">
            <div className="contenedor-imagen contenedor-imagen-debajo">
              <img src={perfilImage} alt="Administrar Inquilinos" className="img-fluid" />
            </div>
            <p className="texto-debajo-imagen">Administrar Inquilinos</p>
            <p className="texto-debajo-imagen-sub" onClick={handleOpenRegistroInquilinoModal} style={{ cursor: 'pointer' }}>
              Agregar Inquilino
            </p>
            <p className="texto-debajo-imagen-sub" onClick={handleOpenEliminarInquilinoModal} style={{ cursor: 'pointer' }}>
              Eliminar Inquilino</p>
          </div>
        </div>
      </div>

      {/* Botón "Volver al Home" */}
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-primary" onClick={handleVolverAlHome}>
          Volver al Home
        </button>
      </div>

      {/* Renderizar el componente de modal según la ruta */}
      {renderInquilinoModal()}
    </div>
  );
};

export default PanelAdministracion;
