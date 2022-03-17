import React, { Component } from 'react'
import Button from './Button'
import '../styles/FormInput.css'

class FormInput extends Component {
  state = {
    text: '',
  }

  change = (e) => {
    this.setState({ text: e.target.value })
  }

  submit = e => {
    e.preventDefault()
    if (this.state !== '') {
      this.props.add(this.state.text)
    }
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form style={inputForm} onSubmit={this.submit}>
        <input
          style={input}
          type='text'
          placeholder='Add task'
          onChange={this.change}
          value={this.state.text}
          autoFocus
        />
        <Button text='Add' variant='primary' action={this.submit} />
      </form>
    )
  }
}

const inputForm = {
  background: '#fff',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  height: '3rem',
  padding: '0 1rem',
  justifyContent: 'space-between',
  margin: '0.5rem 0',
}

const input = {
  width: '70%',
  border: 'none',
}

export default FormInput
