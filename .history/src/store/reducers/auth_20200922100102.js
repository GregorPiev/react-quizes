import { AUTH_SUCCESS } from '../actions/actionTypes'
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
        default:
            return state;
    }
}