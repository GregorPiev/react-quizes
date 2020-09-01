import { Create_Quiz_Question } from '../actions/actionTypes';
const initialState = {
    quiz: []
}
export default function createReducer(state = initialState, action) {
    switch (action.type) {
        case Create_Quiz_Question:
            return {
                ...state,
                quiz: [...state.quiz, action.item]
            }
        default:
            return state;
    }
}