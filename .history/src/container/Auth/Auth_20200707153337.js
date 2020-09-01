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

    validateControl(value, validation) {
        if (!validation) {
            return true;
        }
        return true;
    }

    onChangeHandler = (event, controlName) => {
        console.log(controlName + ': ' + event.target.value);

        const formControls = { ...this.state.formControls };
        console.log('formControls: ' + formControls);


        const control = { ...this.state.formControls[controlName] };
        console.log('control: ' + event.target.value);
        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);
        formControls[controlName] = control;


        this.setState({
            formControls
        })

    }

    renderInput = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    value={control.value}
                    type={control.type}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    valid={control.valid}
                    touched={control.touched}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        });
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Login</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        {this.renderInput()}
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