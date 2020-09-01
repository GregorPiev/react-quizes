import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends React.Component {
    state = {
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        qiuz: [
            {
                id: 1,
                question: 'What color is the sky',
                rightAnswerId: 2,
                answers: [
                    { text: 'Black', id: 1 },
                    { text: 'Blue', id: 2 },
                    { text: 'Red', id: 3 },
                    { text: 'Green', id: 4 },
                ]
            },
            {
                id: 2,
                question: 'What color is the sea',
                rightAnswerId: 2,
                answers: [
                    { text: 'Black', id: 1 },
                    { text: 'Blue', id: 2 },
                    { text: 'Red', id: 3 },
                    { text: 'Green', id: 4 },
                ]
            },
            {
                id: 3,
                question: 'What color is grass',
                rightAnswerId: 4,
                answers: [
                    { text: 'Black', id: 1 },
                    { text: 'Blue', id: 2 },
                    { text: 'Red', id: 3 },
                    { text: 'Green', id: 4 },
                ]
            },
            {
                id: 4,
                question: 'What color is oil',
                rightAnswerId: 1,
                answers: [
                    { text: 'Black', id: 1 },
                    { text: 'Blue', id: 2 },
                    { text: 'Red', id: 3 },
                    { text: 'Green', id: 4 },
                ]
            }
        ]
    }
    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return;
            }
        }


        if (this.state.qiuz[this.state.activeQuestion].rightAnswerId === answerId) {
            this.setState({
                answerState: { [answerId]: 'success' }
            })
            const timeout = setTimeout(() => {
                if (this.isQuizFinish()) {
                    this.setState({
                        activeQuestion: 0,
                        answerState: null,
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                clearTimeout(timeout);
            }, 2000)
        } else {
            this.setState({
                answerState: { [answerId]: 'error' }
            })
            console.log('answerState: ', this.state.answerState)
        }

    }

    isQuizFinish() {
        return (this.state.activeQuestion + 1) === this.state.qiuz.length;
    }
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h2>Do answer to all questions</h2>
                    {
                        this.state.isFinished
                            ? <h3>Finished</h3>
                            : <ActiveQuiz
                                answers={this.state.qiuz[this.state.activeQuestion].answers}
                                question={this.state.qiuz[this.state.activeQuestion].question}
                                quizLength={this.state.qiuz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                                onAnswerClick={this.onAnswerClickHandler}
                            />
                    }

                </div>
            </div>
        )
    }
}