import React from 'react';
import classes from './Layout.module.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';

export default class Layout extends React.Component {
    state = {
        menu: false
    }
    toggleMenuHandler = () => {

    }
    render() {
        return (
            <div className={classes.Layout}>
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}