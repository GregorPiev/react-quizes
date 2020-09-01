import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = props => {

    return (
        <li
            onClick={() => props.AnswerClick(props.answer.id)}
            className={classes.AnswerItem}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem;