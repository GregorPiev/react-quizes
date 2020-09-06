import React from 'react';
import classes from './FinishQuiz.module.css';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom'

const FinishQuiz = props => {
    console.log('Props Source:', props)
    const successResult = Object.keys(props.results)
        .reduce((total, key) => {
            if (props.results[key] === 'success') {
                total++;
            }
            return total;
        }, 0);

    return (
        <div className={classes.FinishedQuiz}>
            {console.log(props)}
            {console.log(!!props.quizes)}
            <ul>
                {
                    props.quizes !== undefined
                        ? props.quizes.map((quizItem, index) => {
                            console.log('quizItem:', quizItem);
                            const cls = [
                                'fa',
                                props.results[quizItem.id] === ''
                                    ? 'fa-square-o'
                                    : props.results[quizItem.id] === 'error'
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

                        }) : null
                }
            </ul>

            <p>Right {successResult} from {props.quizes.length}</p>
            <Button
                type={'primary'}
                onClick={props.retryHandler}
            >
                Repeat
            </Button>

            <Link to="/">
                <Button type={'success'}>Go to the test list</Button>
            </Link>

        </div >
    )
}

export default FinishQuiz;
