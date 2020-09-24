import { null } from 'is_js';
import { AUTH_SUCCESS, AUT_LOGOUT } from '../actions/actionTypes'
const initialSate = {
    token: null
}

export default function authReducer(state = initialSate, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token
            }
        case AUT_LOGOUT:
            return {
                ...state,
                token: null
            }
        default:
            return state;
    }
}