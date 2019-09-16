import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Home />


      
      <Switch>
        <Route path="/products" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
