export function auth(email, password, isLogin) {
    return async (dispatch) => {
        const authData = {
            email, password,
            returnSecureToken: true
        }
        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC9bn9cl3_alPi5I-wRJkKKBK9xSDI1ACc`, authData);
            console.log('Login:', response);

        } catch (error) {
            console.error('Auth error:', console.error());
        }
    }

}