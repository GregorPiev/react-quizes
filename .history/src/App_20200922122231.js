import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Quiz from './container/Quiz/Quiz';
import QuizList from './container/QuizList/QuizList';
import QuizCreator from './container/QuizCreator/QuizCreator';
import Auth from './container/Auth/Auth';
import { connect } from 'react-redux';
import Logout from './components/Logout/Logout';

class App extends React.Component {
  render() {
    let routes = (
      this.props.isAuthenticated
        ? <Switch>
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />
          <Redirect to="/" />
          <Route path="/logout" component={Logout} />
        </Switch>
        : <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />
          <Redirect to="/" />
        </Switch>
    );

    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}
function mapDispatchToProps(dispatch) {
  authLogin: () => dispatch(authLogin())
}
export default withRouter(connect(mapStateToProps, null)(App));
