import React from 'react';
import logo from '../assets/img/configuracion.png';
import gastosImage from '../assets/img/administracion-gastos.png';
import tareasImage from '../assets/img/administracion-tareas.png';
import perfilImage from '../assets/img/perfil.png';

const PanelAdministracion = () => {
  return (
    <div className="contenedor mt-4 mb-4 p-4">
      <div className="row">
        {/* Logo */}
        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
          <img src={logo} alt="Panel de configuración" className="contenedor-logo img-fluid img-logo" />
          <div className="d-md-flex flex-column align-items-center ms-md-3">
            <p className="bienvenido-texto">Panel de configuración</p>
          </div>
        </div>

        {/* Iconos de administración */}
        <div className="col-12 col-md-8 text-center fila-imagen-personalizada d-flex flex-wrap">
          {/* Icono "Administrar gastos" */}
          <div className="col-6 col-md-4 mb-md-3" style={{ cursor: 'pointer' }}>
            <div className="contenedor-imagen contenedor-imagen-debajo">
              <img src={gastosImage} alt="Administrar gastos" className="img-fluid" />
            </div>
            <p className="texto-debajo-imagen">Administrar gastos</p>
          </div>

          {/* Icono "Administrar tareas" */}
          <div className="col-6 col-md-4 mb-md-3" style={{ cursor: 'pointer' }}>
            <div className="contenedor-imagen contenedor-imagen-debajo">
              <img src={tareasImage} alt="Administrar tareas" className="img-fluid" />
            </div>
            <p className="texto-debajo-imagen">Administrar tareas</p>
          </div>

          {/* Icono "Administrar inquilinos" */}
          <div className="col-6 col-md-4 mb-md-3" style={{ cursor: 'pointer' }}>
            <div className="contenedor-imagen contenedor-imagen-debajo">
              <img src={perfilImage} alt="Administrar Inquilinos" className="img-fluid" />
            </div>
            <p className="texto-debajo-imagen">Administrar Inquilinos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelAdministracion;
