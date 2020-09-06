import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchHiscores} from '../actions/index';
import Hiscore from './Hiscore';

class Hiscores extends Component {

  componentDidMount() {
    this.props.fetchHiscores();
  }

  renderHiscores = () => {
    return this.props.hiscores.map( (hiscore, index) => <Hiscore key={index} score={hiscore.score} time={hiscore.time} name={hiscore.name}/>)
  }

  render() {
    return (
      <div>
        <h1>HISCORES</h1>
        <ol>{this.renderHiscores() || "Loading Scores"}</ol>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hiscores: state.hiscores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHiscores: () => dispatch(fetchHiscores())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hiscores)