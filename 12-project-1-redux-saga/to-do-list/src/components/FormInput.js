import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import axios from 'axios'
import Button from './Button'
import '../styles/FormInput.css'
import { addTask } from '../store/actions/task'

// const baseUrl = 'https://my-udemy-api.herokuapp.com/api/v1/todo'

const FormInput = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const change = (e) => {
    setText(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    const data = {
      title: text,
    }
    if (text !== '') {
      dispatch(addTask(data))
    }
    setText('')
  }

  return (
    <form style={inputForm} onSubmit={submit}>
      <input
        style={input}
        type='text'
        placeholder='Add task'
        onChange={change}
        value={text}
        autoFocus
      />
      <Button text='Add' variant='primary' action={submit} />
    </form>
  )
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
