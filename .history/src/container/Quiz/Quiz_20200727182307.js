import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishQuiz from '../../components/FinishQuiz/FinishQuiz';
import Loader from '../../components/UI/Loader/Loader';
import axios from '../../axios/axios-quiz';
import { connect } from 'react-redux';
import { fetchQuizById } from '../../store/actions/quiz';

class Quiz extends React.Component {
    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return;
            }
        }

        const results = this.state.results;
        const question = this.state.quiz[this.state.activeQuestion];
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
    };

    isQuizFinish() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }
    retryHandlerFunc = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
        });
    };
    async componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id);
    }
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h2>Do answer to all questions</h2>

                    {this.props.loading && this.props.quiz
                        ? (<Loader />)
                        : this.state.isFinished
                            ? (<FinishQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                retryHandler={this.retryHandlerFunc}
                            />)
                            : (
                                <ActiveQuiz
                                    answers={this.state.quiz[this.state.activeQuestion].answers}
                                    question={this.state.quiz[this.state.activeQuestion].question}
                                    quizLength={this.state.quiz.length}
                                    answerNumber={this.state.activeQuestion + 1}
                                    state={this.state.answerState}
                                    onAnswerClick={this.onAnswerClickHandler}
                                />
                            )}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        results: state.quizes.quiz,
        isFinished: state.quizes.isFinished,
        activeQuestion: state.quizes.activeQuestion,
        answerState: state.quizes.answerState,
        quiz: state.quizes.quiz,
        loading: state.quizes.loading,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: (id) => dispatch(fetchQuizById()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);