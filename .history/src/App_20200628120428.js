import React from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from './container/Quiz/Quiz'

function App() {
  return (
    <Layout>
      <div style={{ width: 400, border: '1px solid black' }}>
        <h1>Layout works. Walla Gregory</h1>
      </div>
      <Quiz />
    </Layout>
  );
}

export default App;
