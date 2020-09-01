import React from 'react';
import classes from './FinishQuiz.module.css';

const FinishQuiz = props => {
    return (
        <div className={classes.FinishQuiz}>
            <ul>
                <li>
                    <strong>1.</strong>
                    <i className={classes.FinishQuiz} />

                </li>
            </ul>

            <p>Right 1 from 4</p>

            <button>Repeat</button>
        </div>
    )
}

export default FinishQuiz;
