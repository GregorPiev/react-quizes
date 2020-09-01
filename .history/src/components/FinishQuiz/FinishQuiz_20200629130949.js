import React from 'react';
import classes from './FinishQuiz.module.css';

const FinishQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1.</strong>
                    <i className={'fa fa-times'} />
                    How are you

                </li>
                <li>
                    <strong>2.</strong>
                    <i className={'fa fa-checks'} />
                    How are you

                </li>
            </ul>

            <p>Right 1 from 4</p>

            <button>Repeat</button>
        </div>
    )
}

export default FinishQuiz;
