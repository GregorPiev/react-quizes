import React from 'react';

const Select = props => {
    const htmlFor = `${props.label} + ${Math.random()}`;
    return (
        <React.Fragment>
            <label htmlFor={htmlFor}>{props.label}</label>
            <select
                id={htmlFor}>
            </select>
        </React.Fragment>
    )
}

export default Select;