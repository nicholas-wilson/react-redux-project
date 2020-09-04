import React, {Component} from 'react';
import VolleyBallNet from './VolleyballNet';
import Timer from './Timer';
import Score from './Score';
import Volleyballs from './Volleyballs';
import { connect } from "react-redux";

class Play extends Component {


  render() {

    return (
      <div className="Play">
        <div className="ScoreTimeContainer">
          <Timer/>
          <Score score={this.props.score}/>
        </div>
        <Volleyballs timer={this.props.timer} increaseScore={this.props.increaseScore}/>
        <VolleyBallNet />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    increaseScore: () => dispatch({type: 'INCREMENT_SCORE'})
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
    timer: state.time.timer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play)