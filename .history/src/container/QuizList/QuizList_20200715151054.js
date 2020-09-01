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
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li key={index}>
                    <NavLink to={'/quiz/' + quiz} >
                        Test {quiz}
                    </NavLink>
                </li>
            )
        })
    }
    async componentDidMount() {
        try {
            const response = await axios.get(`https://react-quiz-30c63.firebaseio.com/quizes.json`);
            const quizes = [];
            Object.keys(response.data).forEach((res, index) => {

            });
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