import React from 'react';
import classes from './ActiveQuiz.module.css';
const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p>
                <strong>2</strong> How do you do?
            </p>
            <small> 4 from 12</small>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}
export default ActiveQuiz;
