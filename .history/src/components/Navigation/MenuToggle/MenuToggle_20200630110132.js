import React from 'react';
import classes from './MenuToggle.module.css';

const MenuToggle = (props) => {
    const cls = [
        classes.MenuToggle,
        'fa'
    ];
    return (
        <i
            className={cls.join(' ')}
        />
    )
}

export default MenuToggle;