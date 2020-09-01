import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends React.Component {
    state = {
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
            }
        ]
    }
    onAnswerClickHandler = answerId => {
        console.log('Answer Id:', answerId);
    }
    render() {
        return (
            <div className={classes.Quiz}>


                <div className={classes.QuizWrapper}>
                    <h2>Do answer to all questions</h2>
                    <ActiveQuiz
                        answers={this.state.qiuz[0].answers}
                        question={this.state.qiuz[0].question}
                    />
                </div>
            </div>
        )
    }
}