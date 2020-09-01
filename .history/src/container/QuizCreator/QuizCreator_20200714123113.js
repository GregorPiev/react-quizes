import React from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import { createControl } from '../../form/formFramework';
function createOptionControl(number) {
    return createControl(
        {
            label: `Option ${number}`,
            errorMessage: 'Must be value'
        },
        { required: true }),
   )
}

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
                option1: createControl(1),
                option2: createControl(2),
                option3: createControl(3),
                option4: createControl(4)

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