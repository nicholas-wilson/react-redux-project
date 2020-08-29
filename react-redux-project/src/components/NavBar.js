import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <div className="NavBar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/play">
            <li>Play</li>
          </Link>
          <Link to="/hiscores">
            <li>Hiscores</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default NavBar