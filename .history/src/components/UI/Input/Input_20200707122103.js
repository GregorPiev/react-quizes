import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    const inputType = props.type || 'text';
    const cls = [classes.Input]
    const htmlFor = `${inputType}-${Math.random()}`;
    return (
        <div>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                className={cls.join(' ')}
                type={inputType}

            />
        </div>
    )
}

export default Input;