import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/strict-access">
            <StrictAccess user={{username: 'joao', password: '1234'}} />
          </Route>
          <Route path="/users/:id">
            {(props) => <Users {...props} greetingsMessage="Good Morning" />}
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users/1">Users</Link></li>
          <li><Link to="/strict-access">Strict Access</Link></li>
        </ul>
      </Router>
    );
  }
}

export default App;
