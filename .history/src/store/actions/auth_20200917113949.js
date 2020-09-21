import axios from 'axios';
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
            localStorage.setItem('token', response.data);

        } catch (error) {
            console.error('Auth error:', console.error());
        }
    }

}