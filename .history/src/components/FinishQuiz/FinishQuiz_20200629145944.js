import React from 'react';
import classes from './FinishQuiz.module.css';

const FinishQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        const cls = [
                            'fa',
                            props.results[quizItem.id] === 'error'
                                ? 'fa-times'
                                : 'fa-check',
                            classes[props.results[quizItem.id]]
                        ]

                        return (
                            <li>
                                <strong>{index + 1}</strong>.
                                {quizItem.question}
                                <i className={cls.join('  ')} />
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
