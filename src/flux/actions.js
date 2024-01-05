// Acción para abrir el modal
export const openModal = () => {
    return {
      type: 'OPEN_MODAL',
    };
};

// Acción para cerrar el modal
export const closeModal = () => {
    return {
      type: 'CLOSE_MODAL',
    };
};

// Acción para cerrar el modal y redirigir a una ruta específica
export const closeModalAndRedirect = (path, navigate) => {
    return (dispatch) => {
      dispatch(closeModal()); // Despacha la acción para cerrar el modal
      navigate(path); // Realiza la redirección a la ruta especificada
    };
};

  
