import React from 'react';
import classes from './Layout.module.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';

export default class Layout extends React.Component {
    state = {
        menu: false
    }
    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    onCloseHandler = () => {
        this.setState({
            menu: false
        })
    }
    render() {
        return (
            <div className={classes.Layout}>
                <Drawer onClose={this.onCloseHandler} isOpen={this.state.menu} />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}