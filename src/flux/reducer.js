import {
  SET_USER_TYPE,
  SAVE_USER_DATA,
  CLEAR_USER_DATA,
} from './userActions.js';

import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_MODAL_STATE,
} from './modalActions.js';

const initialState = {
  modalIsOpen: false,
  user: {
    userType: localStorage.getItem('userType') || null,
    username: localStorage.getItem('username') || null,
    rut: null,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state,  modalIsOpen: true };
    case CLOSE_MODAL:
      return { ...state, modalIsOpen: false };
    case SET_USER_TYPE:
      return { ...state, user: { ...state.user, userType: action.payload } };
    case SAVE_USER_DATA:
      return { ...state, user: { ...state.user, ...action.payload } };
    case CLEAR_USER_DATA:
      return { ...state, user: { userType: null, username: null, rut: null } };
    case SET_MODAL_STATE:
      return { ...state, modalIsOpen: action.payload };
    default:
      return state;
  }
};

export default rootReducer;















