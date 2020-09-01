import { Create_Quiz_Question, Reset_Quiz_Creation } from './actionTypes';
import axios from '../../axios/axios-quiz';

export function createQuizQuestion(item) {
    return {
        type: Create_Quiz_Question,
        item
    }
}

export function finishCreateQuiz() {
    return async (dispatch, getState) => {
        await axios.post(`/quizes.json`, getState().create.quiz);
    }
}

export function resetQuizCreation() {
    return {
        type: Reset_Quiz_Creation
    }
}