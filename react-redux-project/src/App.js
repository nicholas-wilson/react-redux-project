import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Play from './components/Play';
import Hiscores from './components/Hiscores';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/play">
          <Play/>
        </Route>

        <Route path="/hiscores">
          <Hiscores />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
