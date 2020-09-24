import React from 'react';
import classes from './Drawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { NavLink } from 'react-router-dom';
/* export const Links = [
    { to: '/', label: 'List', exact: true },
    { to: '/auth', label: 'Login', exact: false },
    { to: '/quiz-creator', label: 'Create test', exact: false },


]; */
export default class Drawer extends React.Component {
    clickHandler = () => {
        this.props.onClose();
    }
    renderLinks(Links) {
        return Links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer];
        if (!this.props.isOpen) {
            cls.push(classes.close);
        }
        const links = [
            { to: '/', label: 'List', exact: true }
        ];

        if (this.props.isAuthenticated) {
            links.push({ to: '/quiz-creator', label: 'Create test', exact: false })
            links.push({ to: '/logout', label: 'Logout', exact: false })
        } else {
            links.push({ to: '/auth', label: 'Login', exact: false })
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen
                    ? <Backdrop onClick={this.props.onClose} />
                    : null
                }
            </React.Fragment>
        );
    }
}