import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer.js'; // Importación de rootReducer

// Configuración del store de Redux
const store = configureStore({
  // Reductores combinados que gestionarán el estado global
  reducer: rootReducer, 
});

export default store;



