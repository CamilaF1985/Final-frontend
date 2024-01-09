// Acción para establecer el tipo de usuario en el estado global
export const SET_USER_TYPE = 'SET_USER_TYPE';

// Creador de acciones para establecer el tipo de usuario
export const setUserType = (userType) => ({
  type: SET_USER_TYPE,
  payload: userType,
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
export const closeModalAndRedirect = (path) => {
  return (dispatch, getState, { navigate }) => {
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

// Acción para realizar el inicio de sesión
export const loginUser = (formData, navigate, closeModal) => {
  return (dispatch) => {
    if (formData.username === 'Administrador' && formData.password === 'Admin') {
      // Credenciales correctas para el administrador
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
      // Credenciales correctas para el inquilino
      const userData = {
        userType: 'Inquilino',
        username: formData.username,
      };

      saveToLocalStorage(userData); // Guardar datos en localStorage

      dispatch(saveUserData(userData)); // Despachar acción para almacenar datos del usuario
      closeModal(); // Cerrar el modal
      dispatch(setModalState(false)); // Agregar esta línea para cerrar el modal
      navigate('/home-inquilino'); // Redirigir a la página del inquilino
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





  
