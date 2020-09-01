import React from 'react';
import classes from "./Auth.module.css"
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends React.Component {
    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter valid email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Enter valid password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    };

    loginHandler = () => {

    }
    registerHandler = () => {

    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    renderInput = () => {

    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Login</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <Input
                            label="Email"
                            errorMessage="test"
                        />
                        <Input
                            label="Password"
                            errorMessage=""
                        />
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >
                            Enter
                        </Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>

            </div>
        );
    }
}