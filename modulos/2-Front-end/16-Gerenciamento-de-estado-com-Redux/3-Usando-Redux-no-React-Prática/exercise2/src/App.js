import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import UserList from './Pages/UserList';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
      {(routerProps) => <Home { ...routerProps } />}
      </Route>
      <Route exact path="/signup">
        {(routerProps) => <Register { ...routerProps } />}
      </Route>
      <Route exact path="/userlist">
        <UserList />
      </Route>
    </Switch>
  );
}

export default App;
