import React from 'react';
import Modal from 'react-modal';
import '../assets/css/App.css';

// Componente de formulario de contacto
const ContactForm = ({ closeModalAndRedirect }) => {
    return (
        <Modal
            isOpen={true}  // Propiedad para determinar si el modal está abierto
            onRequestClose={closeModalAndRedirect}  // Función llamada al intentar cerrar el modal
            contentLabel="ContactForm Modal"  // Etiqueta de accesibilidad para el modal
            className="modal-content"  // Clases de estilo para el contenido del modal
            overlayClassName="modal-overlay"  // Clases de estilo para la capa que cubre el fondo (overlay)
        >
            {/* Contenido del modal */}
            <div className="modal-header d-flex justify-content-end mb-2">
                {/* Botón para cerrar el modal */}
                <button className="btn btn-danger" onClick={closeModalAndRedirect}>X</button>
            </div>

            <div className="modal-body">
                <div className="form-container">
                    {/* Encabezado del formulario */}
                    <h2 className="form-titulo">Contacto</h2>

                    {/* Formulario con clases de Bootstrap para la responsividad */}
                    <form className="row g-3 needs-validation" noValidate>
                        {/* Fila para el campo de nombre completo */}
                        <div className="col-md-12 mb-3">
                            <label htmlFor="fullName" className="form-label">Nombre completo:</label>
                            <input type="text" className="form-control" id="fullName" placeholder="Ingresa tu nombre completo" required />
                            <div className="invalid-feedback">
                                Por favor, ingresa tu nombre completo.
                            </div>
                        </div>

                        {/* Fila para el campo de correo electrónico */}
                        <div className="col-md-12 mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico:</label>
                            <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" required />
                            <div className="invalid-feedback">
                                Por favor, ingresa un correo electrónico válido.
                            </div>
                        </div>

                        {/* Fila para el campo de mensaje */}
                        <div className="col-md-12 mb-3">
                            <label htmlFor="message" className="form-label">Mensaje:</label>
                            <textarea className="form-control" id="message" placeholder="Escribe tu mensaje aquí" rows="5" required />
                            <div className="invalid-feedback">
                                Por favor, ingresa tu mensaje.
                            </div>
                        </div>

                        {/* Botón "Enviar" */}
                        <div className="col-md-12 d-flex justify-content-end">
                            <button className="btn btn-primary" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default ContactForm;
