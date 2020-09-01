import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends React.Component {
    state = {
        activeQuestion: 0,
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
        console.log('Answer Id:', answerId);
        console.log('rightAnswerId:', this.state.qiuz[this.state.activeQuestion].rightAnswerId)
        if (this.state.qiuz[this.state.activeQuestion].rightAnswerId === answerId) {
            const timeout = setTimeout(() => {
                if (this.isQuizFinish()) {
                    console.log('Finished')
                    this.setState({
                        activeQuestion: 0
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1
                    })
                }
                clearTimeout(timeout);
            }, 5000)
        } else {
            console.log("Else")
        }

    }

    isQuizFinish() {
        console.log('activeQuestion:', this.state.activeQuestion)
        return (this.state.activeQuestion + 1) === this.state.qiuz.length;
    }
    render() {
        return (
            <div className={classes.Quiz}>


                <div className={classes.QuizWrapper}>
                    <h2>Do answer to all questions</h2>
                    <ActiveQuiz
                        answers={this.state.qiuz[this.state.activeQuestion].answers}
                        question={this.state.qiuz[this.state.activeQuestion].question}
                        quizLength={this.state.qiuz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }
}