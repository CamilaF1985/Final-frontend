import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
import logo from './assets/img/logo.png';
import loginImage from './assets/img/login.png';
import contactoImage from './assets/img/contacto.png';
import Mapa from './components/Mapa.jsx';
import Modal from 'react-modal';
import LoginForm from './components/LoginForm.jsx';
import ContactForm from './components/ContactForm.jsx';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(location.pathname === '/login');

  const redirectToLogin = () => {
    // Abre el modal y redirige a '/login'
    setModalIsOpen(true);
    navigate('/login');
  };

  const redirectToContact = () => {
    // Abre el modal y redirige a '/contacto'
    setModalIsOpen(true);
    navigate('/contacto');
  };

  const closeModalAndRedirect = () => {
    // Cierra el modal y redirige a '/'
    setModalIsOpen(false);
    navigate('/');
  };

  return (
    <div className="contenedor mt-4 mb-4 p-4">
      <div className="row">
        {/* Logo */}
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <img src={logo} alt="Logo" className="contenedor-logo img-fluid img-logo" />
        </div>

        <div className="col-12 col-md-8 text-center fila-imagen-personalizada d-flex flex-wrap">
          <div className="col-6 col-md-6 mb-3">
            {/* Utiliza el hook useNavigate para redirigir a /login */}
            <div
              className="contenedor-imagen contenedor-imagen-debajo contenedor-imagen-primera"
              onClick={redirectToLogin}
              style={{ cursor: 'pointer' }}
            >
              <img src={loginImage} alt="Inicio de sesión" className="img-fluid" />
            </div>
            <p className="texto-debajo-imagen">Iniciar sesión</p>
          </div>

          <div className="col-6 col-md-4 mb-md-3">
            {/* Utiliza el hook useNavigate para redirigir a /contacto */}
            <div
              className="contenedor-imagen contenedor-imagen-debajo"
              onClick={redirectToContact}
              style={{ cursor: 'pointer' }}
            >
              <img src={contactoImage} alt="Contacto" className="img-fluid" />
            </div>
            <p className="texto-debajo-imagen">Contáctanos</p>
          </div>
        </div>

        {/* Contenedor que envuelve "Quiénes somos" y "Nuestra Ubicación" */}
        <div className="row justify-content-center ms-1">
          {/* Contenedor "Quiénes somos" */}
          <div className="col-xs-12 col-md-4 quienes-somos-contenedor text-justify ms-1 me-1">
            <h2 className="quienes-somos-titulo">Quiénes somos</h2>
            <p className="quienes-somos-parrafo">
              Ofrecemos una aplicación amigable, diseñada para distribuir en forma equitativa,
              gastos y tareas domésticos entre copropietarios.
              No dude en contactarnos si desea probar nuestro producto.
            </p>
          </div>

          {/* Contenedor del mapa de Google con encabezado */}
          <div className="col-12 col-md-4 google-maps-contenedor text-justify ms-1 me-1">
            <h2 className="ubicacion-titulo">Nuestra Ubicación</h2>
            <Mapa />
          </div>
        </div>
      </div>

      {/* Modal fuera del contenedor principal usando un portal */}
      {ReactDOM.createPortal(
        <Modal
          isOpen={modalIsOpen}  // Propiedad para determinar si el modal está abierto
          onRequestClose={closeModalAndRedirect}  // Función llamada al intentar cerrar el modal
          contentLabel={location.pathname === '/login' ? "LoginForm Modal" : "ContactForm Modal"}
          // Etiqueta de accesibilidad para el modal basada en la ruta actual
          className="modal-content"  // Clases de estilo para el contenido del modal
          overlayClassName="modal-overlay"  // Clases de estilo para la capa que cubre el fondo (overlay)
        >
          {/* Contenido del modal (formulario de inicio de sesión o de contacto) */}
          {location.pathname === '/login' ? (
            <LoginForm closeModalAndRedirect={closeModalAndRedirect} />
          ) : (
            <ContactForm closeModalAndRedirect={closeModalAndRedirect} />
          )}
        </Modal>,
        document.body
      )}
    </div>
  );
};

export default App;














































