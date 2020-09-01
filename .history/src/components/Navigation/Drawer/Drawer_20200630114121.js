import React from 'react';
import classes from './Drawer.module.css';

export default class Drawer extends React.Component {

    renderLinks() {
        return this.Links.map((link, index) => {
            return (
                <li key={index}>Link {link}</li>
            )
        })
    }
    render() {
        return (
            <nav className={classes.Drawer}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}