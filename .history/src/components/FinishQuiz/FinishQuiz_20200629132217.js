import React from 'react';
import classes from './FinishQuiz.module.css';

const FinishQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1.</strong>
                    How are you
                    <i className={'fa fa-times ' + classes.error} />


                </li>
                <li>
                    <strong>2.</strong> How are you
                    <i className={'fa fa-check ' + classes.success} />


                </li>
            </ul>

            <p>Right 1 from 4</p>

            <button>Repeat</button>
        </div>
    )
}

export default FinishQuiz;
