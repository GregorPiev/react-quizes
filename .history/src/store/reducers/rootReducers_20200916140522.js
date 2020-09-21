import { combineReducers } from 'redux';
import quizReducer from './quiz';
import createReducer from './create';
import auth from './auth';


export default combineReducers({
    quizes: quizReducer,
    create: createReducer,
    auth: auth
});
