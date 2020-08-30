import React, {Component} from 'react';
import VolleyBallNet from './VolleyballNet';
import Timer from './Timer';

class Play extends Component {

  render() {

    return (
      <div className="Play">
        <h1>This is the Play Component page!!</h1>
        {/* I need a volleyball that will be moved around */}
        <Timer/>
        <VolleyBallNet/>
      </div>
    )
  }
}

export default Play