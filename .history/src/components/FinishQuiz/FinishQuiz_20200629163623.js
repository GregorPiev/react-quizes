import React from 'react';
import classes from './FinishQuiz.module.css';
import Button from '../UI/Button/Button'

const FinishQuiz = props => {
    const successResult = Object.keys(props.results)
        .reduce((total, key) => {
            if (props.results[key] === 'success') {
                total++;
            }
            return total;
        }, 0);
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
                            <li key={index}>
                                <strong>{index + 1}</strong>.
                                {quizItem.question}
                                <i className={cls.join('  ')} />
                            </li>
                        )

                    })
                }
            </ul>

            <p>Right {successResult} from {props.quiz.length}</p>
            <Button
                onClick={props.retryHandler}
            >
                Repeat
            </Button>

        </div >
    )
}

export default FinishQuiz;
