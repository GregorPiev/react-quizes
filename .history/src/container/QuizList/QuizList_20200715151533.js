import React from 'react';
import classes from './QuizList.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class QuizList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizes: []
        };
    }
    renderQuizes() {
        return this.state.quizes.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink to={'/quiz/' + quiz.id} >
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }
    async componentDidMount() {
        try {
            const response = await axios.get(`https://react-quiz-30c63.firebaseio.com/quizes.json`);
            const quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Test N${index + 1}`
                })
            });
            this.setState({
                quizes
            })

        } catch (error) {
            console.error('Error:', error);
        }

    }
    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Tests List</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>

            </div>
        )
    }
}