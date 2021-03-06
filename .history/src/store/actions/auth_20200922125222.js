import axios from 'axios';
import { AUTH_SUCCESS, AUT_LOGOUT } from './actionTypes'
export function auth(email, password, isLogin) {
    return async (dispatch) => {
        const authData = {
            email, password,
            returnSecureToken: true
        }
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC9bn9cl3_alPi5I-wRJkKKBK9xSDI1ACc`;
        if (isLogin) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC9bn9cl3_alPi5I-wRJkKKBK9xSDI1ACc`;
        }
        try {
            const response = await axios.post(url, authData);
            console.log('Response Data:', response.data);
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);

            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            localStorage.setItem('expirationDate', expirationDate);

            dispatch(authSuccess(response.data.idToken));
            dispatch(autoLogout(response.data.expiresIn));
        } catch (error) {
            console.error('Auth error:', console.error());
        }
    }

}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');

    return {
        type: AUT_LOGOUT
    }
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }

        }
    }
}

