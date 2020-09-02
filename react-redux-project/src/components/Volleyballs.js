import React, { Component } from "react";
import Volleyball from './Volleyball';

class Volleyballs extends Component {

  renderVolleyballs = () => {
    return (<Volleyball size={30} left={600} top={200} increaseScore={this.props.increaseScore}/>);
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