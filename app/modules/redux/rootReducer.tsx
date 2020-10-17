import { combineReducers } from 'redux';
import { notesData } from '../redux/notes/reducer';

const rootReducer = combineReducers({
    notesData,
});

export default rootReducer;