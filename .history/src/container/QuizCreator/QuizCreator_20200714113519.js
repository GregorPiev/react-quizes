import React from 'react';
import classes from './QuizCreator.css';
import Button from '../../components/UI/Button/Button';

export default class QuizCreator extends React.Component {
    submitHandler = event => {
        event.preventDefault();
    }
    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Quiz Creator</h1>
                    <form onSubmit={this.submitHandler}>
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