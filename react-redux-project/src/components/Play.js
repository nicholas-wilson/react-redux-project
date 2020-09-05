import React, {Component} from 'react';
import VolleyBallNet from './VolleyballNet';
import Timer from './Timer';
import Score from './Score';
import Volleyballs from './Volleyballs';
import HiscoreInput from './HiscoreInput';
import {submitScore} from '../actions/index';
import { connect } from "react-redux";

class Play extends Component {

  componentDidMount() {
    setTimeout(this.props.showHiscoreInput, 35 * 1000)
  }

  componentWillUnmount() {
    this.props.resetScore();
    this.props.hideHiscoreInput();
  }

  render() {

    return (
      <div className="Play">
        <div className="ScoreTimeContainer">
          <Timer/>
          <Score score={this.props.score}/>
        </div>
        <Volleyballs timer={this.props.timer} increaseScore={this.props.increaseScore}/>
        <VolleyBallNet />
        <div className={this.props.inputVisible}>
          <HiscoreInput time={this.props.time} score={this.props.score} submitScore={submitScore}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    increaseScore: () => dispatch({type: 'INCREMENT_SCORE'}),
    resetScore: () => dispatch({type: "RESET_SCORE"}),
    showHiscoreInput: () => dispatch({type: 'SHOW_HISCORE_INPUT'}),
    hideHiscoreInput: () => dispatch({type: 'HIDE_HISCORE_INPUT'})
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
    timer: state.time.timer,
    time: state.time.seconds,
    inputVisible: state.hiscoreInput
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play)