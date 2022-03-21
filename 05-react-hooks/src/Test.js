import React, { Component } from 'react'

// contoh class component

export default class Test extends Component {
  state = {
    angka: 0
  }
  add = () => {
    this.setState({
      angka: angka + 1
    })
  }
  minus = () => {
    this.setState({
      angka: angka - 1
    })
  }
  render() {
    return (
      <div>
        <h1>Test</h1>
        {this.state.angka}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Add</button>
      </div>
    )
  }
}
