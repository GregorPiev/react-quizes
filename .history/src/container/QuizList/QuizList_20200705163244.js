import React from 'react';
import classes from './QuizList.module.css';

export default class QuizList extends React.Component {

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