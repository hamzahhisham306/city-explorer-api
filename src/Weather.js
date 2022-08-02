import React, { Component } from 'react'

 class Weather extends Component {
  render() {
    return (
      <div>
        <p>{this.props.weather.date}</p>
        <p></p>
      </div>
    )
  }
}

export default Weather