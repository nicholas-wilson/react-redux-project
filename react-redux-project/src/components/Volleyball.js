import React, { Component } from "react";
import volleyball from "../images/volleyball.png";

class Volleyball extends Component {
  state = {
    top: this.props.top,
    left: this.props.left,
  }

  interval = null

  animateBall = ()=> {  
    
    if (this.state.top > 1000) {
      clearInterval(this.interval);
    } else {
      this.setState(prevState => ({top: prevState.top + 1, left: prevState.left + 1}))
    }
  }

  componentDidMount() {
    // this.interval = setInterval(this.animateBall, 1000)
  }

  render() {
    return(
      <div id="volleyball" style={{position: 'fixed', top: `${this.state.top}px`, left: `${this.state.left}px`}}>
        <img 
          src={volleyball} alt="Volleyball"
          width={this.props.size} height={this.props.size}
          onClick={this.props.increaseScore}
        />
      </div>
    )
  }
}

export default Volleyball