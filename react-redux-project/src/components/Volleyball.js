import React, { Component } from "react";
import volleyball from "../images/volleyball.png";

class Volleyball extends Component {
  state = {
    top: this.props.top,
    left: this.props.left,
    size: this.props.size,
    movingForward: true,
    class: '',
  }

  interval = null

  animateBall = ()=> {  
    
    if (this.state.size > 100 || this.state.size < 5) {
      clearInterval(this.interval);
      this.setState({class: "hidden"})
    } else {
      this.setState(prevState => (this.getAnimationObject(prevState)))
    }
  }

  getAnimationObject = (prevState) => {
    if (this.state.movingForward){
      if (this.props.top === 200 && this.props.left <= 700) { // balls moving right and down
       return {top: prevState.top + 10, left: prevState.left + 5, size: prevState.size + 5}
      } else if (this.props.top === 200) {  // balls moving right and down
        return {top: prevState.top + 10, left: prevState.left - 5, size: prevState.size + 5}
      } else { // balls moving up
       return {top: prevState.top -10, left: prevState.left + 5, size: prevState.size + 5}
      }
    } else {
      return {top: prevState.top + 15, left: prevState.left - 1, size: prevState.size - 10}
    }
  }

  handleClick = () => {
    if (this.state.size > 75) {
      this.props.increaseScore()
      this.setState({
        movingForward: false
      })
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
      <div className={this.state.class} id="volleyball" style={{position: 'fixed', top: `${this.state.top}px`, left: `${this.state.left}px`}}>
        <img 
          src={volleyball} alt="Volleyball"
          width={this.state.size} height={this.state.size}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

export default Volleyball