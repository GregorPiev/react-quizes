import { FETCH_QUIZES_START } from '../actions/actionTypes';
const initialState = {
    quizes: [],
    loading: false
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUIZES_START:
            return {
                ...state, loading: true
            }

        default:
            return state
    }
}