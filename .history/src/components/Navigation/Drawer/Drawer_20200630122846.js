import React from 'react';
import classes from './Drawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
export const Links = ['Link1', 'Link2', 'Link3'];
export default class Drawer extends React.Component {

    renderLinks() {
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
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen
                    ? <Backdrop />
                    : null
                }
            </React.Fragment>
        );
    }
}