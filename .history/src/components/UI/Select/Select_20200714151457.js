import React from 'react';

const Select = props => {
    const htmlFor = `${props.label} + ${Math.random()}`;
    return (
        <label htmlFor={htmlFor}></label>
        <select
            id={htmlFor}>
        </select>
    )
}

export default Select;