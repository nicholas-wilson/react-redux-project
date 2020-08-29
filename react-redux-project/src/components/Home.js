import React, { Component } from "react";
import {Link} from "react-router-dom";

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <h1>Super Volleyball Spike</h1>
        <Link to="/play"><div><h3>CLICK HERE TO PLAY!</h3></div></Link>
      </div>
    )
  }
}

export default Home