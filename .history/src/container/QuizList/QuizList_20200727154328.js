import React from 'react';
import classes from './QuizList.module.css';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader';
import axios from '../../axios/axios-quiz';
import { connect } from 'react-redux';

class QuizList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizes: [],
            loading: true
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
            const response = await axios.get(`quizes.json`);
            const quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Test N${index + 1}`
                })
            });
            this.setState({
                quizes,
                loading: false
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
                    {
                        this.state.loading
                            ? <Loader />
                            : <ul>{this.renderQuizes()}</ul>
                    }

                </div>

            </div>
        )
    }
}
function mapStateToProps() {
    return {

    }
}

function mapDispatchToProps() {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizList);