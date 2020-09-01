import React from 'react';
import classes from './Select.module.css';

const Select = props => {
    const htmlFor = `${props.label} + ${Math.random()}`;
    return (
        <React.Fragment className={classes.Select}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <select
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            >
                {
                    props.option.map((option, index) => {
                        return (
                            <option
                                key={option.value + index}
                                value={option.value} >
                                {option.text}
                            </option>
                        )
                    })
                }
            </select>
        </React.Fragment>
    )
}

export default Select;