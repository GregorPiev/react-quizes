import React from 'react';
import classes from "./Auth.module.css"
import Button from '../../components/UI/Button/Button';

export default class Auth extends React.Component {

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Auth</h1>

                    <form>
                        <input type="text" />
                        <input type="text" />
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >
                            Enter
                        </Button>
                    </form>
                </div>

            </div>
        );
    }
}