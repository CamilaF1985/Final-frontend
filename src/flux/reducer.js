// rootReducer.js
import { OPEN_MODAL, CLOSE_MODAL, SET_USER_TYPE, SAVE_USER_DATA, SET_MODAL_STATE, CLEAR_USER_DATA } from './actions.js';

// Estado inicial del reductor para la gestión del modal y datos del usuario
const initialState = {
  modalIsOpen: false, // Indica si el modal está abierto o cerrado
  user: {
    userType: localStorage.getItem('userType') || null, // Estado para almacenar el tipo de usuario
    username: localStorage.getItem('username') || null, // Estado para almacenar el nombre de usuario
  },
};

// Reductor que gestiona el estado del modal y del usuario en la aplicación
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modalIsOpen: true }; // Acción para abrir el modal
    case CLOSE_MODAL:
      return { ...state, modalIsOpen: false }; // Acción para cerrar el modal
    case SET_USER_TYPE:
      return { ...state, user: { ...state.user, userType: action.payload } }; // Acción para establecer el tipo de usuario
    case SAVE_USER_DATA:
      return { ...state, user: { ...action.payload } }; // Acción para guardar datos del usuario
    case CLEAR_USER_DATA:
      return { ...state, user: { userType: null, username: null } };
    case SET_MODAL_STATE:
      return { ...state, modalIsOpen: action.payload }; // Acción para establecer el estado del modal
    default:
      return state;
  }
};

export default rootReducer;






