import React from 'react';

const AnswerItem = props => {

    return (
        <li>
            {props.index}&bsp;{props.answer}
        </li>
    )
}

export default AnswerItem;