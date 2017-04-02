import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import PageWrapper from './components/PageWrapper';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={PageWrapper}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    );
  }
}

export default App;
