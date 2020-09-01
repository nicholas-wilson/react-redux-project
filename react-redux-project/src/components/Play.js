import React, {Component} from 'react';
import VolleyBallNet from './VolleyballNet';
import Timer from './Timer';
import Score from './Score';
import Volleyball from './Volleyball';
import {incrementScore} from '../actions';
import { connect } from "react-redux";

class Play extends Component {


  render() {

    return (
      <div className="Play">
        <div className="ScoreTimeContainer">
          <Timer/>
          <Score score="0"/>
        </div>
        <Volleyball size="30" increaseScore={this.props.increaseScore}/>
        {/*props for volleyball xPos={} yPos={} size={} */}
        <VolleyBallNet/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    increaseScore: () => dispatch(incrementScore)
  }
}

export default connect(null, mapDispatchToProps)(Play)