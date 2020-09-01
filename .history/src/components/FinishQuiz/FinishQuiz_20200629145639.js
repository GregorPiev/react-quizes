import React from 'react';
import classes from './FinishQuiz.module.css';

const FinishQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {

                        return (
                            <li>
                                <strong>{index + 1}</strong>.
                                {quizItem.question}
                                <i className={''} />
                            </li>
                        )

                    })
                }
            </ul>

            <p>Right 1 from 4</p>

            <button>Repeat</button>
        </div>
    )
}

export default FinishQuiz;
