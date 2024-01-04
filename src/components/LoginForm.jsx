import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import '../assets/css/App.css';

// Componente de formulario de inicio de sesión
const LoginForm = ({ closeModalAndRedirect }) => {
    // Hook de navegación de React Router
    const navigate = useNavigate();

    // Estado local para almacenar datos del formulario (nombre de usuario y contraseña)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    // Función para manejar cambios en los campos del formulario
    const handleInputChange = (e) => {
        // Actualiza el estado con los nuevos valores del formulario
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    // Función para manejar el inicio de sesión
    const handleLogin = () => {
        // Verificar las credenciales
        if (formData.username === 'Administrador' && formData.password === 'Admin') {
            // Credenciales correctas, redirigir a /home-administrador
            navigate('/home-administrador');
        } else {
            // Credenciales incorrectas, mostrar alerta
            alert('Credenciales incorrectas');
            closeModalAndRedirect(); // Cerrar el modal y volver al home
        }
    };

    const handleCloseModal = () => {
        // Cerrar el modal y volver al home
        closeModalAndRedirect();
    };

    return (
        // Componente Modal de la biblioteca react-modal
        <Modal
            isOpen={true}  // Propiedad para determinar si el modal está abierto
            onRequestClose={handleCloseModal}  // Función llamada al intentar cerrar el modal
            contentLabel="LoginForm Modal"  // Etiqueta de accesibilidad para el modal
            className="modal-content"  // Clases de estilo para el contenido del modal
            overlayClassName="modal-overlay"  // Clases de estilo para la capa que cubre el fondo (overlay)
        >
            <div className="modal-header d-flex justify-content-end mb-2">
                {/* Botón para cerrar el modal */}
                <button className="btn btn-danger" onClick={handleCloseModal}>X</button>
            </div>

            <div className="modal-body">
                <div className="form-container">
                    {/* Encabezado del formulario */}
                    <h2 className="form-titulo">Ingresa a tu cuenta</h2>

                    {/* Formulario con clases de Bootstrap para la responsividad */}
                    <form className="row g-3 needs-validation" noValidate onSubmit={handleLogin}>
                        {/* Fila para el campo de nombre de usuario */}
                        <div className="col-md-12 mb-3">
                            <label htmlFor="username" className="form-label">Nombre de usuario:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Ingresa tu nombre de usuario"
                                required
                                onChange={handleInputChange}
                            />
                            <div className="invalid-feedback">
                                Por favor, ingresa tu nombre de usuario.
                            </div>
                        </div>

                        {/* Fila para el campo de contraseña */}
                        <div className="col-md-12 mb-3">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Ingresa tu contraseña"
                                required
                                onChange={handleInputChange}
                            />
                            <div className="invalid-feedback">
                                Por favor, ingresa tu contraseña.
                            </div>
                        </div>

                        {/* Botón "Ingresar" */}
                        <div className="col-md-12 d-flex justify-content-end">
                            <button className="btn btn-primary" type="submit">Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default LoginForm;

















