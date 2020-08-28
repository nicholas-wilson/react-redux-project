import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Play from './components/Play';
import Hiscores from './components/Hiscores';

function App() {
  return (
    <Router>
      <NavBar/>
      {/* <Switch> */}
        <Route path="/" /> {/* add exact after path */}
        <Route path="/play" component={Play}/>
        <Route path="/hiscores" component={Hiscores}/>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
