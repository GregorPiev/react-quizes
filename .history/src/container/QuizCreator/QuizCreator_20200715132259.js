import React from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import { createControl, validate, validateForm } from '../../form/formFramework';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import axios from 'axios';

function createOptionControl(number) {
    return createControl(
        {
            label: `Option ${number}`,
            errorMessage: 'Must be value',
            id: number
        },
        { required: true }
    );
}

function createFormControls() {
    return {
        question: createControl(
            {
                label: 'Enter Question',
                errorMessage: 'Must be value'
            },
            { required: true }),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}

export default class QuizCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quiz: [],
            rightAnswerId: 1,
            isFormValid: false,
            formControls: createFormControls()
        }
    }

    submitHandler = event => {
        event.preventDefault();
    }

    addQuestionHandle = event => {
        event.preventDefault();
        const quiz = this.state.quiz.concat();
        const index = quiz.length + 1;
        const { question, option1, option2, option3, option4 } = this.state.formControls;
        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                { text: option1.value, id: option1.id },
                { text: option2.value, id: option2.id },
                { text: option3.value, id: option3.id },
                { text: option4.value, id: option4.id },
            ]
        }
        quiz.push(questionItem);
        this.setState({
            quiz,
            rightAnswerId: 1,
            isFormValid: false,
            formControls: createFormControls()
        })
    }

    createQuizHandler = async event => {
        event.preventDefault()
        try {
            const response = await axios.post(`https://react-quiz-30c63.firebaseio.com/quizes.json`, this.state.quiz);
            console.log('Response:', response.data);

        } catch (error) {
            console.error('Error Save quiz:', error);
        }
        /* axios.post(`https://react-quiz-30c63.firebaseio.com/quizes.json`, this.state.quiz)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.error('Error Save quiz:', error);
            })
        console.log(this.state.quiz) */

    }

    changeHandler = (value, controlName) => {
        const formControls = { ...this.state.formControls };
        const control = { ...formControls[controlName] };
        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);

        formControls[controlName] = control;
        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }

    selectChangeHandler = event => {
        this.setState({
            rightAnswerId: +event.target.value
        })
    }

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];

            return (
                <Auxillary key={controlName + index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => this.changeHandler(event.target.value, controlName)}
                        onBlur={event => this.changeHandler(event.target.value, controlName)}
                    />
                    {
                        index === 0
                            ? <hr />
                            : null
                    }
                </Auxillary>
            )
        })
    }
    render() {
        const select = <Select
            label="Choose the right answer"
            value={this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
            options={[
                { text: 1, value: 1 },
                { text: 2, value: 2 },
                { text: 3, value: 3 },
                { text: 4, value: 4 }
            ]}
        >
        </Select>
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Quiz Creator</h1>
                    <form onSubmit={this.submitHandler}>
                        {this.renderControls()}
                        {select}
                        <Button
                            type="primary"
                            onClick={this.addQuestionHandle}
                            disabled={!this.state.isFormValid}
                        >
                            Add question
                        </Button>
                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                            disabled={this.state.quiz.length === 0}
                        >
                            Create Quiz
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}