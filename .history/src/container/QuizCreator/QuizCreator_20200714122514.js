import React from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import { createControl } from '../../form/formFramework';

export default class QuizCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quiz: [],
            formControls: {
                question: createControl(
                    {
                        label: 'Enter Question',
                        errorMessage: 'Must be value'
                    },
                    { required: true }),
                option1: createControl(
                    {
                        label: 'Option 1',
                        errorMessage: 'Must be value'
                    }
                ),
                option2: createControl(
                    {
                        label: 'Option 2',
                        errorMessage: 'Must be value'
                    }
                ),
                option3: createControl(
                    {
                        label: 'Option 3',
                        errorMessage: 'Must be value'
                    }
                ),
                option4: createControl(
                    {
                        label: 'Option 4',
                        errorMessage: 'Must be value'
                    }
                ),

            }
        }
    }

    submitHandler = event => {
        event.preventDefault();
    }

    addQuestionHandle = () => {

    }

    createQuizHandler = () => {

    }
    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Quiz Creator</h1>
                    <form onSubmit={this.submitHandler}>
                        <input type="text" />
                        <hr />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <select></select>

                        <Button
                            type="primary"
                            click={this.addQuestionHandle}
                        >
                            Add question
                        </Button>
                        <Button
                            type="success"
                            click={this.createQuizHandler}
                        >

                            Create Quiz
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}