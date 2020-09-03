import React, { Component } from "react";
import Volleyball from './Volleyball';

class Volleyballs extends Component {
  state = {
    volleyballs: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/volleyballs')
    .then(response => response.json())
    .then(ballsJson => this.updateState(ballsJson))
  }

  updateState = (balls) => {
    this.setState({
      volleyballs: balls
    })
  }

  renderVolleyballs = () => {
    return this.state.volleyballs.map(ball =>
      <Volleyball key={ball.id} size={30} left={ball.left} top={ball.top} increaseScore={this.props.increaseScore}/>
    );
  }

  render() {
    return(
      <div>
        {this.renderVolleyballs()}
      </div>

    )
  }
}

export default Volleyballs