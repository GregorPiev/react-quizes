import axios from '../../axios/axios-quiz';
import {
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZ_SUCCESS
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

export function quizAnswerClick(answerId) {
    return (dispatch, getState) => {
        if (this.props.answerState) {
            const key = Object.keys(this.props.answerState)[0];
            if (this.props.answerState[key] === 'success') {
                return;
            }
        }

        const results = this.props.results;
        const question = this.props.quiz[this.props.activeQuestion];
        if (question.rightAnswerId === answerId) {
            // if (!results[answerId]) {
            results[question.id] = 'success';
            // }
            this.setState({
                answerState: { [answerId]: 'success' },
                results,
            });
        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: { [answerId]: 'error' },
                results: results,
            });
        }

        const timeout = setTimeout(() => {
            if (this.isQuizFinish()) {
                this.setState({ isFinished: true });
            } else {
                this.setState({
                    activeQuestion: this.state.activeQuestion + 1,
                    answerState: null,
                });
            }
            clearTimeout(timeout);
        }, 1000);
    }
}
