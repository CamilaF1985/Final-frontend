import React from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalAndRedirect } from '../flux/actions';
import { useNavigate } from 'react-router-dom';
import '../assets/css/App.css';
import perfilImage from '../assets/img/perfil.png';
import logoutIcon from '../assets/img/logout.png';

const Perfil = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modalIsOpen);
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    const handleCloseModal = () => {
        const path = user.userType === 'Administrador' ? '/home-administrador' : '/home-inquilino';
        dispatch(closeModalAndRedirect(path, navigate));
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Perfil Modal"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <div className="modal-header d-flex justify-content-end mb-2">
                <button className="btn btn-danger" onClick={handleCloseModal}>
                    X
                </button>
            </div>

            <div className="modal-body">
                <div className="perfil-container row">
                    <div className="col-md-4 mb-3 text-center">
                        <img src={perfilImage} alt="Perfil" className="img-fluid img-perfil" />
                    </div>

                    <div className="col-md-8 mb-3">
                        <div className="row">
                            <label htmlFor="username" className="form-label col-md-3">
                                Nombre de usuario:
                            </label>
                            <div className="col-md-9">
                                <p className="form-text">{user.username}</p>
                            </div>
                        </div>

                        {/* RUT */}
                        <div className="row">
                            <label htmlFor="rut" className="form-label col-md-3">RUT:</label>
                            <div className="col-md-9">
                                <p className="form-text">123456789</p>
                            </div>
                        </div>

                        {/* Correo electrónico */}
                        <div className="row">
                            <label htmlFor="email" className="form-label col-md-3">Correo electrónico:</label>
                            <div className="col-md-9 d-flex justify-content-between align-items-center">
                                <p className="form-text">correo@example.com</p>
                                <button className="btn btn-secondary" type="button">Editar</button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-9 offset-md-3 d-flex justify-content-end">
                                <button className="btn btn-primary" type="button">Cambiar contraseña</button>
                            </div>
                        </div>

                        {/* Icono de cerrar sesión y texto */}
                        <div className="mt-3 d-flex justify-content-end">
                            <img src={logoutIcon} alt="Cerrar sesión" className="img-fluid" style={{ width: '30px', height: '30px' }} />
                            <p className="form-text">Cerrar sesión</p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Perfil;








