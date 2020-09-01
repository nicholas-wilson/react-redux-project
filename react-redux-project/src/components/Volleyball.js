import React, { Component } from "react";
import volleyball from "../images/volleyball.png";

class Volleyball extends Component {

  render() {
    return(
      <img src={volleyball} alt="Volleyball" width={this.props.size} height={this.props.size}/>
    )
  }
}

export default Volleyball