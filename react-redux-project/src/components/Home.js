import React, { Component } from "react";
import {Link} from "react-router-dom";

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <h1>Game Title Here</h1>
        <Link to="/play"><h3>CLICK HERE TO PLAY!</h3></Link>
      </div>
    )
  }
}

export default Home