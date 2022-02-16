import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'
import { add } from '../actions/ListAction'

export default function Form() {
  const [text, setText] = useState('')
  const {dispatch} = useContext(DataContext)
  const change = e => {
    setText(e.target.value)
  }
  const submit = (e) => {
    e.preventDefault()
    dispatch(add(text))
    setText('')
  }
  return (
    <form onSubmit={submit}>
      <input type="text" value={text} placeholder="enter new list" onChange={change} />
      <button>Add</button>
    </form>
  )
}
