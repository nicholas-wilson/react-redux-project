import React, {Component} from "react"

class HiscoreInput extends Component {
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitScore({
      name: event.target.childNodes[1].value,
      points: this.props.score,
      time: this.props.time
    })
  }

  render() {
    return (
      <div>
        <h3>Submit your score!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your name</label>
          <input type="text"/>
          <br/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default HiscoreInput