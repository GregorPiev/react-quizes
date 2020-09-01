import { Create_Quiz_Question, Finish_Create_Quiz } from '../actions/actionTypes';
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
        case Finish_Create_Quiz:
            return {
                ...state,
                quiz: []
            }
        default:
            return state;
    }
}