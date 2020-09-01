import React from 'react';
import classes from './QuizCreator.css';
import Button from '../../components/UI/Button/Button';

export default class QuizCreator extends React.Component {
    submitHandler = event => {
        event.preventDefault();
    }

    addQuestionHandle = () => {

    }

    createQuizHandler = () => {

    }
    render() {
        return (
            <div style={{ border: 'solid 1px red' }} className={classes.QuizCreator}>
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