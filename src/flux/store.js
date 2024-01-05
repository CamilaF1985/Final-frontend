import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducer.js';

// Configuración del store de Redux
const store = configureStore({
    // Reductores combinados que gestionarán el estado global
    reducer: {
        modal: modalReducer, // Reductor específico para la gestión del estado del modal
    },
});

export default store;


