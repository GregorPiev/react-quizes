import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Quiz from './container/Quiz/Quiz';
import QuizList from './container/QuizList/QuizList';
import Quiz from './container/QuizCreator/QuizCreator';
import Quiz from './container/Auth/Auth';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Quiz} />
        <Route path="/quiz-create" component={Quiz} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" component={Quiz} />
      </Switch>
    </Layout>
  );
}

export default App;
