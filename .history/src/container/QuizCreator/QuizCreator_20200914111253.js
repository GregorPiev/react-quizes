import React from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import { createControl, validate, validateForm } from '../../form/formFramework';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import { connect } from 'react-redux'
import { createQuizQuestion, finishCreateQuiz } from '../../store/actions/create';

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

class QuizCreator extends React.Component {
    state = {
        rightAnswerId: 1,
        isFormValid: false,
        formControls: createFormControls()
    }


    submitHandler = event => {
        event.preventDefault();
    }

    addQuestionHandle = event => {
        event.preventDefault();
        const { question, option1, option2, option3, option4 } = this.state.formControls;
        const newId = this.props.quiz.length + 1;
        console.log('new id: ', newId);
        const questionItem = {
            question: question.value,
            id: newId,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                { text: option1.value, id: option1.id },
                { text: option2.value, id: option2.id },
                { text: option3.value, id: option3.id },
                { text: option4.value, id: option4.id },
            ]
        }
        this.props.createQuizQuestion(questionItem);
        this.setState({
            rightAnswerId: 1,
            isFormValid: false,
            formControls: createFormControls()
        })
    }

    createQuizHandler = event => {
        event.preventDefault()

        this.setState({
            rightAnswerId: 1,
            isFormValid: false,
            formControls: createFormControls()
        })
        this.props.finishCreateQuiz();
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
                            disabled={this.props.quiz.length === 0}
                        >
                            Create Quiz
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        quiz: state.create.quiz,
        quizes: state.quizes.quizes
    }
}
function mapDispatchToProps(dispatch) {
    return {
        createQuizQuestion: item => dispatch(createQuizQuestion(item)),
        finishCreateQuiz: () => dispatch(finishCreateQuiz())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator);