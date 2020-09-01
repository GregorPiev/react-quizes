import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = props => {
    const cls = [classes.AnswerItem];
    console.log('Props:', props)
    if (props.state) {
        cls.push(classes[props.state]);
        console.log(cls.join(' '))
    }

    return (
        <li
            onClick={() => props.onAnswerClick(props.answer.id)}
            className={cls.join(' ')}>
            {props.answer.text}
        </li>
    )


}

export default AnswerItem;