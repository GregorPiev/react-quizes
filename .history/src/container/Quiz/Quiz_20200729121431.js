import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishQuiz from '../../components/FinishQuiz/FinishQuiz';
import Loader from '../../components/UI/Loader/Loader';

import { connect } from 'react-redux';
import { fetchQuizById, quizAnswerClick } from '../../store/actions/quiz';

class Quiz extends React.Component {
    onAnswerClickHandler = (answerId) => {
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
    };

    isQuizFinish() {
        return this.props.activeQuestion + 1 === this.props.quiz.length;
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
        console.log(this.props)
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h2>Do answer to all questions</h2>

                    {this.props.loading || this.props.quiz === null
                        ? <Loader />
                        : this.props.isFinished
                            ? <FinishQuiz
                                results={this.props.results}
                                quiz={this.props.quiz}
                                retryHandler={this.retryHandlerFunc}
                            />
                            : <ActiveQuiz
                                answers={this.props.quiz[this.props.activeQuestion].answers}
                                question={this.props.quiz[this.props.activeQuestion].question}
                                quizLength={this.props.quiz.length}
                                answerNumber={this.props.activeQuestion + 1}
                                state={this.props.answerState}
                                onAnswerClick={this.onAnswerClickHandler}
                            />
                    }
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
        fetchQuizById: (id) => dispatch(fetchQuizById(id)),
        quizAnswerClick: (answerId) => dispatch(quizAnswerClick(answerId))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
