import React from 'react';
import classes from './Drawer.module.css';

export default class Drawer extends React.Component {
    const Links = ['Link1', 'Link2', 'Link3'];
    renderLinks() {
        return this.Links.map((link, index) => {
            return (
                <li key={index}>
                    <a>Link {link}</a>
                </li>
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