import axios from '../../axios/axios-quiz';
import {
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZ_SUCCESS,
    QUIZ_SET_STATE,
    FINISH_QUIZ,
    QUIZ_NEXT_QUESTIONS
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

export function quizNextQuestions(number) {
    return {
        type: QUIZ_NEXT_QUESTIONS,
        number
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
            if (this.isQuizFinish()) {
                dispatch(finishQuiz());
            } else {
                dispatch(quizNextQuestions(state.activeQuestion + 1))
                /* this.setState({
                            activeQuestion: this.state.activeQuestion + 1,
                            answerState: null,
                        }); */
            }
            clearTimeout(timeout);
        }, 1000);
    };
}
