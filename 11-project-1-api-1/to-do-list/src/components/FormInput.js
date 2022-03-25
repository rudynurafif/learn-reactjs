import React, { Component } from 'react'
import axios from 'axios'
import Button from './Button'
import '../styles/FormInput.css'

const baseUrl = 'https://my-udemy-api.herokuapp.com/api/v1/todo'

class FormInput extends Component {
  state = {
    text: '',
  }

  change = (e) => {
    this.setState({ text: e.target.value })
  }

  submit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    if (this.state.text !== '') {
      const newTodo = {
        title: this.state.text
      }
      const res = await axios.post(`${baseUrl}`, newTodo, {
        headers: {
          "Authorization": token
        }
      })
      this.props.add(res.data.todo)
    } else {
      alert('New list cannot be empty!')
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
