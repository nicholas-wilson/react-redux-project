import React, { Component } from "react";
import Volleyball from './Volleyball';

class Volleyballs extends Component {
  state = {
    volleyballs: [],
    activeBalls: []
  }

  launchInterval = null;
  currentBall = 0;

  componentDidMount() {
    fetch('http://localhost:3000/volleyballs')
    .then(response => response.json())
    .then(ballsJson => this.updateState(ballsJson))
  }

  updateState = (balls) => {
    this.setState({
      volleyballs: balls
    })
    this.startLaunching()
  }

  startLaunching = () => {
    this.launchInterval = setInterval(this.activateVolleyball, 1000)
  }

  activateVolleyball = () => {
    this.setState(prevState => {
      return {
        activeBalls: [
          ...prevState.activeBalls,
            <Volleyball
              key={prevState.volleyballs[this.currentBall].id}
              size={30}
              left={prevState.volleyballs[this.currentBall].left}
              top={prevState.volleyballs[this.currentBall].top}
              increaseScore={this.props.increaseScore}
            />
          ]
      }
    });
    this.currentBall++;
    if (this.currentBall === 20) {
      clearInterval(this.launchInterval)
    }
  }

  componentWillUnmount() {
    clearInterval(this.launchInterval)
  }

  render() {
    return(
      <div>
        {this.state.activeBalls || null}
      </div>

    )
  }
}

export default Volleyballs