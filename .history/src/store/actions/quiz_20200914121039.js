import axios from '../../axios/axios-quiz';
import { useHistory } from "react-router-dom";
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
            const quizItems = [];
            Object.keys(response.data).forEach((key, index) => {
                console.log('Item: ', response.data[key])
                quizes.push({
                    id: key,
                    name: `Test N${index + 1}`,
                });
                quizItems.push(response.data[key][0])
            });
            console.log('quizItems: ', quizItems)
            dispatch(fetchQuizesSuccess(quizes, quizItems));
        } catch (error) {
            dispatch(fetchQuizesError(error));
        }
    };
}

export function fetchQuizById(quizId) {
    return async (dispatch, getState) => {
        dispatch(fetchQuizesStart());
        try {
            const response = await axios.get(`/quizes/${quizId}.json`);
            const quizes = response.data;
            dispatch(fetchQuizSuccess(quizes));
        } catch (error) {
            const history = useHistory();
            history.push('/');
            dispatch(fetchQuizesError(error));
        }
    };
}

export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START,
    };
}

export function fetchQuizesSuccess(quizes, quiz) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes,
        quiz
    };
}

export function fetchQuizesError(er) {
    return {
        type: FETCH_QUIZES_ERROR,
        error: er,
    };
}

export function fetchQuizSuccess(quizes) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quizes
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

export function quizNextQuestions(number) {
    return {
        type: QUIZ_NEXT_QUESTIONS,
        number
    }
}

export function quizAnswerClick(answerId) {
    return (dispatch, getState) => {
        const state = getState().quizes;
        if (state.answerState) {
            const key = Object.keys(state.answerState)[0];
            if (state.answerState[key] === 'success') {
                return;
            }
        }

        const results = state.results;
        const question = state.quiz[state.activeQuestion];
        if (question.rightAnswerId === answerId) {
            if (!results[state.quizes[state.activeQuestion].id]) {
                results[state.quizes[state.activeQuestion].id] = 'success';
            }
            dispatch(quizSetState({ [answerId]: 'success' }, results));
        } else {
            results[state.quizes[state.activeQuestion].id] = 'error';
            dispatch(quizSetState({ [answerId]: 'error' }, results));
        }

        const timeout = setTimeout(() => {

            if (isQuizFinished(state)) {
                dispatch(finishQuiz());
            } else {
                // dispatch(fetchQuizesStart());

                const nextActiveQuestion = state.activeQuestion + 1;
                dispatch(quizNextQuestions(nextActiveQuestion));

                /* const nextQiuz = state.quizes[nextActiveQuestion];
                getNextQuizValue(nextQiuz.id).then(quiz => {
                    dispatch(quizNextQuestions(nextActiveQuestion, quiz));
                }); */
            }
            clearTimeout(timeout);
        }, 1000);
    };
}

function isQuizFinished(state) {
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
