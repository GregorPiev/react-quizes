import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-30c63.firebaseio.com/'
})