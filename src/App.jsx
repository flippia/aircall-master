import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';

import ActivityFeed from './ActivityFeed.jsx';
import ActivityDetail from './ActivityDetail.jsx';
import Header from './Header.jsx';
import Archived from './Archived.jsx';
import Welcome from './Welcome.jsx';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch className="content">
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/active">
            <ActivityFeed />
          </Route>
          <Route exact path="/archived">
            <Archived />
          </Route>
          <Route exact path="/:id">
            <ActivityDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
