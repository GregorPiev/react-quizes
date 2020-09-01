import React from 'react';
import classes from './FinishQuiz.css';

const FinishQuiz = props => {
    return (
        <div className={classes.FinishQuiz}>
            <ul>
                <li>
                    <strong>1.</strong>
                    <i className={''} />

                </li>
            </ul>

            <p>Right 1 from 4</p>

            <button>Repeat</button>
        </div>
    )
}

export default FinishQuiz;
