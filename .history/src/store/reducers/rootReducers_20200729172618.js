import { combineReducers } from 'redux';
import quizReducer from './quiz';
import createReducer from './create';

export default combineReducers({
    quizes: quizReducer,
    create: createReducer,
});
