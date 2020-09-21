import { Create_Quiz_Question, Reset_Quiz_Creation } from '../actions/actionTypes';
const initialState = {
    quiz: [],
    lastId: 0
}
export default function createReducer(state = initialState, action) {
    switch (action.type) {
        case Create_Quiz_Question:
            return {
                ...state,
                quiz: [...state.quiz, action.item],
                lastId: action.lastId
            }
        case Reset_Quiz_Creation:
            return {
                ...state,
                quiz: []
            }
        default:
            return state;
    }
}