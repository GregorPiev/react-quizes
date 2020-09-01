import React from 'react';
import classes from './Drawer.module.css';

export default class Drawer extends React.Component {

    renderLinks() {
        const Links = ['Link1', 'Link2', 'Link3'];


        console.log('Drawer:', this.props)


        return Links.map((link, index) => {
            return (
                <li key={index}>
                    <a>Link {link}</a>
                </li>
            )
        })
    }
    render() {
        const cls = [classes.Drawer];
        if (!this.props.isOpen) {
            console.log('Drawer isOpen:', this.props.isOpen)
            cls.push(classes.close);
        }

        return (
            <nav className={cls.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}