import { combineReducers } from "redux";

// Reducers Individuales
import app from './app';
import security from './security';
import notes from './Notas';

const rootReducer = combineReducers({
    app,
    security,
    notes
});

export default rootReducer;