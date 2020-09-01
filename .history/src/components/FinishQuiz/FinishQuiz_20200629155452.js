import React from 'react';
import classes from './FinishQuiz.module.css';

const FinishQuiz = props => {
    const successResult = Object.keys(props.results)
        .reduce((total, key) => { if (props.result[key] === 'success') { total++; } return total; }, 0);
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

            <button>Repeat</button>
        </div >
    )
}

export default FinishQuiz;
