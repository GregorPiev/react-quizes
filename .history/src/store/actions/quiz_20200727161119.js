import axios from "../../axios/axios-quiz"
export function fetchQuizes() {
    return async dispatch => {
        try {
            const response = await axios.get(`quizes.json`);
            const quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Test N${index + 1}`
                })
            });
            this.setState({
                quizes,
                loading: false
            })

        } catch (error) {
            console.error('Error:', error);
        }
    }
}