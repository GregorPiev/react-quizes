import React from 'react';
import classes from './Quiz.module.css';

export default class Quiz extends React.Component {
    state = {
        qiuz: []
    }
    render() {
        return (
            <div className={classes.Quiz}>
                <h2>Quiz</h2>
            </div>
        )
    }
}