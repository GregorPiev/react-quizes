import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends React.Component {
    state = {
        qiuz: [
            {
                question: 'What color is the sky'
                answers: [
                    { text: 'Black' },
                    { text: 'Blue' },
                    { text: 'Red' },
                    { text: 'Green' },
                ]
            }
        ]
    }
    render() {
        return (
            <div className={classes.Quiz}>


                <div className={classes.QuizWrapper}>
                    <h2>Do answer to all questions</h2>
                    <ActiveQuiz
                        answers={this.state.qiuz[0].answers}
                    />
                </div>
            </div>
        )
    }
}