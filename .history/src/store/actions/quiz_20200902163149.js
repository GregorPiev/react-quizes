import axios from '../../axios/axios-quiz';
import {
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZ_SUCCESS,
    QUIZ_SET_STATE,
    FINISH_QUIZ,
    QUIZ_NEXT_QUESTIONS,
    Retry_Quiz
} from './actionTypes';

export function fetchQuizes() {
    return async (dispatch) => {
        dispatch(fetchQuizesStart());
        try {
            const response = await axios.get(`quizes.json`);
            const quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Test N${index + 1}`,
                });
            });
            dispatch(fetchQuizesSuccess(quizes));
        } catch (error) {
            dispatch(fetchQuizesError(error));
        }
    };
}

export function fetchQuizById(quizId) {
    return async (dispatch) => {
        dispatch(fetchQuizesStart());
        try {
            const response = await axios.get(`/quizes/${quizId}.json`);
            const quiz = response.data;
            dispatch(fetchQuizSuccess(quiz));
        } catch (error) {
            dispatch(fetchQuizesError(error));
        }
    };
}

export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START,
    };
}

export function fetchQuizesSuccess(quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes,
    };
}

export function fetchQuizesError(er) {
    return {
        type: FETCH_QUIZES_ERROR,
        error: er,
    };
}

export function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz,
    };
}

export function quizSetState(answerState, results) {
    return {
        type: QUIZ_SET_STATE,
        answerState,
        results,
    };
}
export function finishQuiz() {
    return {
        type: FINISH_QUIZ
    }
}

export function quizNextQuestions(number, quiz) {
    return {
        type: QUIZ_NEXT_QUESTIONS,
        number, quiz
    }
}

export function quizAnswerClick(answerId) {
    return (dispatch, getState) => {
        const state = getState().quizes;
        console.log('State: ', state)
        if (state.answerState) {
            const key = Object.keys(state.answerState)[0];
            if (state.answerState[key] === 'success') {
                return;
            }
        }

        const results = state.results;
        const question = state.quiz[state.activeQuestion];
        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success';
            }
            dispatch(quizSetState({ [answerId]: 'success' }, results));
        } else {
            results[question.id] = 'error';
            dispatch(quizSetState({ [answerId]: 'error' }, results));
        }

        const timeout = setTimeout(() => {

            if (isQuizFinished(state)) {
                dispatch(finishQuiz());
            } else {
                dispatch(fetchQuizesStart());
                console.log(`Next Question: `, state.activeQuestion + 1)
                const nextActiveQuestion = state.activeQuestion + 1;
                const nextQiuz = state.quizes[nextActiveQuestion];
                getNextQuizValue(nextQiuz.id).then(quiz => {
                    dispatch(quizNextQuestions(nextActiveQuestion, quiz));
                });
            }
            clearTimeout(timeout);
        }, 1000);
    };
}

function isQuizFinished(state) {
    console.log('length:', state.quizes.length);
    console.log('activeQuestion: ', state.activeQuestion)
    return state.activeQuestion + 1 === state.quizes.length;
}

async function getNextQuizValue(quizId, nextActiveQuestion) {

    try {
        const response = await axios.get(`/quizes/${quizId}.json`);
        return response.data;
    } catch (error) {
        console.log(error);
    }

}

export function retryQuiz() {
    return {
        type: Retry_Quiz
    }
}
