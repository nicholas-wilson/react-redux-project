import React, { Component } from "react";
import volleyball from "../images/volleyball.png";

class Volleyball extends Component {
  state = {
    top: this.props.top,
    left: this.props.left,
    size: this.props.size
  }

  interval = null

  animateBall = ()=> {  
    
    if (this.state.size > 80) {
      clearInterval(this.interval);
    } else {
      this.setState(prevState => ({top: prevState.top + 10, left: prevState.left + 5, size: prevState.size + 5}))
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.animateBall, 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div id="volleyball" style={{position: 'fixed', top: `${this.state.top}px`, left: `${this.state.left}px`}}>
        <img 
          src={volleyball} alt="Volleyball"
          width={this.state.size} height={this.state.size}
          onClick={this.props.increaseScore}
        />
      </div>
    )
  }
}

export default Volleyball