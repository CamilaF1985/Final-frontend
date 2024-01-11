// modalActions.js

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_MODAL_STATE = 'SET_MODAL_STATE'; 

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const closeModalAndRedirect = (path, navigate) => {
  return (dispatch) => {
    dispatch(closeModal());
    navigate(path);
  };
};

export const setModalState = (modalIsOpen) => ({
    type: SET_MODAL_STATE,
    payload: modalIsOpen,
  });

