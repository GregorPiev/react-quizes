import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Quiz from './container/Quiz/Quiz';
import QuizList from './container/QuizList/QuizList';
import QuizCreator from './container/QuizCreator/QuizCreator';
import Auth from './container/Auth/Auth';
import { connect } from 'react-redux';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz-creator" component={QuizCreator} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" component={QuizList} />
      </Switch>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    token: state.auth.token
  }
}
export default connect(mapStateToProps, null)(App);
