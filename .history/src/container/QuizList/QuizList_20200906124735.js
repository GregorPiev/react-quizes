import React from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
import { connect } from 'react-redux';
import { fetchQuizes } from '../../store/actions/quiz';

class QuizList extends React.Component {
    renderQuizes() {
        return this.props.quizes.map((quiz, index) => {
            return (
                <li key={quiz.id}>
                    {index}.&nbsp;<NavLink to={'/quiz/' + quiz.id}>{quiz.name}</NavLink>&nbsp;{this.props.activeQuestion}
                </li>
            )
        })
    }

    componentDidMount() {
        this.props.fetchQuizes()
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Tests List</h1>
                    {this.props.loading && this.props.quizes.length !== 0 ? (
                        <Loader />
                    ) : (
                            <ul>{this.renderQuizes()}</ul>
                        )}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        quizes: state.quizes.quizes,
        loading: state.quizes.loading,
        activeQuestion: state.quizes.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizList)
