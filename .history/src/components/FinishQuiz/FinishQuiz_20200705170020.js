import React from 'react';
import classes from './FinishQuiz.module.css';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom'

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
                type={'primary'}
                onClick={props.retryHandler}
            >
                Repeat
            </Button>

            <Link>
                <Button type={'success'}>Go to the test list</Button>
            </Link>

        </div >
    )
}

export default FinishQuiz;
