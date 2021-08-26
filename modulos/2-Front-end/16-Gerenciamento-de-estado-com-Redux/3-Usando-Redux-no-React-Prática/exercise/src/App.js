import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FormDisplay from './Pages/FormDisplay';
import PersonalForm from './Pages/PersonalForm';
import ProfessionalForm from './Pages/ProfessionalForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          {(routerProps) => <PersonalForm { ...routerProps } />}
        </Route>
        <Route exact path="/professional">
          {(routerProps) => <ProfessionalForm { ...routerProps } />}
        </Route>
        <Route exact path="/display">
          <FormDisplay />
        </Route>
      </Switch>
    );
  }
}

export default App;
