import React from 'react';
import classes from "./Auth.module.css"

export default class Auth extends React.Component {

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Auth</h1>

                    <form>
                        <input type="text" />
                        <input type="text" />
                    </form>
                </div>

            </div>
        );
    }
}