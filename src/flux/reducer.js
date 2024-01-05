// Estado inicial del reductor para la gestión del modal
const initialState = {
    modalIsOpen: false, // Indica si el modal está abierto o cerrado
};

// Reductor que gestiona el estado del modal en la aplicación
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { ...state, modalIsOpen: true }; // Acción para abrir el modal
        case 'CLOSE_MODAL':
            return { ...state, modalIsOpen: false }; // Acción para cerrar el modal
        default:
            return state;
    }
};

export default modalReducer;

