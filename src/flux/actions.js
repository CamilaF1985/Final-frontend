// En actions.js
// Acción para establecer el tipo de usuario en el estado global
export const SET_USER_TYPE = 'SET_USER_TYPE';
export const setUserType = () => {
  // Cargar datos del localStorage
  const storedUserType = localStorage.getItem('userType');
  const storedUsername = localStorage.getItem('username');

  return {
    type: SET_USER_TYPE,
    payload: { userType: storedUserType, username: storedUsername },
  };
};

// Creador de acciones para establecer el tipo de usuario
export const SET_USER_ON_MODAL_OPEN = 'SET_USER_ON_MODAL_OPEN';
export const setUserOnModalOpen = (user) => ({
  type: SET_USER_ON_MODAL_OPEN,
  payload: user,
});

// Nueva acción para limpiar el estado del usuario sin borrar los datos en localStorage
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
export const clearUserData = () => ({
  type: CLEAR_USER_DATA,
});

// Acción para abrir el modal
export const OPEN_MODAL = 'OPEN_MODAL';
export const openModal = () => ({
  type: OPEN_MODAL,
});

// Acción para cerrar el modal
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = () => ({
  type: CLOSE_MODAL,
});

// Acción para cerrar el modal y redirigir a una ruta específica
export const closeModalAndRedirect = (path, navigate) => {
  return (dispatch) => {
    dispatch(closeModal()); // Despacha la acción para cerrar el modal
    navigate(path); // Realiza la redirección a la ruta especificada
  };
};

// Acción para establecer el estado del modal
export const SET_MODAL_STATE = 'SET_MODAL_STATE';
export const setModalState = (modalIsOpen) => ({
  type: SET_MODAL_STATE,
  payload: modalIsOpen,
});

// Acción para guardar los datos del usuario en el estado global
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const saveUserData = (userData) => ({
  type: SAVE_USER_DATA,
  payload: userData,
});

export const loginUser = (formData, navigate, closeModal) => {
  return (dispatch) => {
    const storedUserType = localStorage.getItem('userType');
    const storedUsername = localStorage.getItem('username');

    if (formData.username === 'Administrador' && formData.password === 'Admin') {
      const userData = {
        userType: 'Administrador',
        username: formData.username,
      };

      saveToLocalStorage(userData); // Guardar datos en localStorage

      dispatch(saveUserData(userData)); // Despachar acción para almacenar datos del usuario
      closeModal(); // Cerrar el modal
      dispatch(setModalState(false)); // Agregar esta línea para cerrar el modal
      navigate('/home-administrador'); // Redirigir a la página del administrador
    } else if (formData.username === 'Inquilino' && formData.password === 'Inquilino') {
      const userData = {
        userType: 'Inquilino',
        username: formData.username,
      };

      saveToLocalStorage(userData); // Guardar datos en localStorage

      dispatch(saveUserData(userData)); // Despachar acción para almacenar datos del usuario
      closeModal(); // Cerrar el modal
      dispatch(setModalState(false)); // Agregar esta línea para cerrar el modal
      navigate('/home-inquilino'); // Redirigir a la página del inquilino
    } else if (storedUserType && storedUsername) {
      // Si hay datos almacenados en localStorage, cargarlos
      const userData = {
        userType: storedUserType,
        username: storedUsername,
      };

      dispatch(saveUserData(userData)); // Despachar acción para almacenar datos del usuario
      closeModal(); // Cerrar el modal
      dispatch(setModalState(false)); // Agregar esta línea para cerrar el modal
      navigate(`/home-${storedUserType.toLowerCase()}`); // Redirigir según el tipo de usuario almacenado
    } else {
      // Credenciales incorrectas
      alert('Credenciales incorrectas');
      closeModal(); // Cerrar el modal
      dispatch(setModalState(false)); // Agregar esta línea para cerrar el modal en caso de credenciales incorrectas
    }
  };
};

// Función para almacenar datos en localStorage
const saveToLocalStorage = (userData) => {
  localStorage.setItem('userType', userData.userType);
  localStorage.setItem('username', userData.username);
};








