import React, {Component} from 'react';
import {connect} from 'react-redux';

class Timer extends Component {

  timer = null

  componentDidMount() {
    this.timer = setInterval(() => this.props.tick(), 1000)
    this.props.setTimer(this.timer)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.props.resetTime();
  }

  render() {
    return (
      <div className="Timer">
        Time<br/>
        {this.props.time}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.time.seconds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tick: () => dispatch({type: 'INCREMENT_TIME'}),
    resetTime: () => dispatch({type: 'RESET_TIME'}),
    setTimer: (timer) => dispatch({type: 'SET_TIMER', timer: timer})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Timer)