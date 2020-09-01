import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishQuiz from '../../components/FinishQuiz/FinishQuiz';
import Loader from '../../components/UI/Loader/Loader';
import axios from '../../axios/axios-quiz';
import { connect } from 'react-redux';

class Quiz extends React.Component {
    state = {
        results: {} /* {[id], ''} */,
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [],
        loading: true,
    };
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
        try {
            const id = this.props.match.params.id;
            const response = await axios.get(`/quizes/${id}.json`);
            const quiz = response.data;
            this.setState({
                quiz,
                loading: false,
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h2>Do answer to all questions</h2>

                    {this.state.loading ? (
                        <Loader />
                    ) : this.state.isFinished ? (
                        <FinishQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            retryHandler={this.retryHandlerFunc}
                        />
                    ) : (
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
    return {};
}
function mapDispatchToProps(dispatch) {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
