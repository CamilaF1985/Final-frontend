// userActions.js

export const SET_USER_TYPE = 'SET_USER_TYPE';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const setUserType = () => {
  const storedUserType = localStorage.getItem('userType');
  const storedUsername = localStorage.getItem('username');

  return {
    type: SET_USER_TYPE,
    payload: { userType: storedUserType, username: storedUsername },
  };
};

export const clearUserData = () => {
  localStorage.removeItem('userType');
  localStorage.removeItem('username');

  return {
    type: CLEAR_USER_DATA,
  };
};

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

      saveToLocalStorage(userData);
      dispatch(saveUserData(userData));
      closeModal();
      navigate('/home-administrador');
    } else if (formData.username === 'Inquilino' && formData.password === 'inquilino') {
      const userData = {
        userType: 'Inquilino',
        username: formData.username,
      };

      saveToLocalStorage(userData);
      dispatch(saveUserData(userData));
      closeModal();
      navigate('/home-inquilino');
    } else if (storedUserType && storedUsername) {
      const userData = {
        userType: storedUserType,
        username: storedUsername,
      };

      saveToLocalStorage(userData);
      dispatch(saveUserData(userData));
      closeModal();
      navigate(`/home-${storedUserType.toLowerCase()}`);
    } else {
      alert('Credenciales incorrectas');
      closeModal();
    }
  };
};

const saveToLocalStorage = (userData) => {
  localStorage.setItem('userType', userData.userType);
  localStorage.setItem('username', userData.username);
};


