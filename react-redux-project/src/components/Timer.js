import React, {Component} from 'react';
import {connect} from 'react-redux';

class Timer extends Component {

  timer = null

  componentDidMount() {
    this.timer = setInterval(() => this.props.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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
    time: state.time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tick: () => dispatch({type: 'INCREMENT_TIME'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Timer)