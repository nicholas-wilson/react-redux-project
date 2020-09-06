import React, {Component} from 'react';

class Hiscore extends Component {

  render() {
    return (
      <li>{this.props.name} Score {this.props.score} Time {this.props.time}</li>
    )
  }
}

export default Hiscore