import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/actions/task'
import Button from './Button'
import '../styles/FormInput.css'

const FormInput = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const change = e => {
    setText(e.target.value )
  }

  const submit = (e) => {
    e.preventDefault()
    const data = {
      title: text
    }
    if(text !== '') {
      dispatch(addTask(data))
    }
    setText('')
  }
  return (
    <form action="" style={inputForm} onSubmit={submit}>
      <input
        type="text"
        style={input}
        value={text}
        placeholder="add task"
        onChange={change}
      />
      <Button text="Add" variant="primary" action={submit} />
    </form>
  )
}


const inputForm = {
  background: '#fff',
  color: '#fff',
  display: 'flex',
  alignItems: "center",
  height: '3rem',
  padding: '0 1rem',
  justifyContent: 'space-between',
  margin: '0.5rem 0'
}

const input = {
  width: '60%',
  border: 'none'
}

export default FormInput