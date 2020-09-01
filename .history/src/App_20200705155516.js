import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Quiz from './container/Quiz/Quiz';

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
