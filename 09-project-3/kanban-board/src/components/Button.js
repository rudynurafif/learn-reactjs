import React, { useState, useContext } from 'react'
import { DataContext } from '../context/store'
import Textarea from 'react-textarea-autosize'
import '../sass/Button.scss'

export default function Button({ id, list }) {
  const { cardAdd, listAdd } = useContext(DataContext)
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const openForm = () => setOpen(true)
  const closeForm = () => setOpen(false)
  const handleChange = e => setText(e.target.value)
  const addCard = () => {
    if (text) {
    cardAdd(id, text)
    }
  setText('')
  }
  const addList = () => {
    if (text) {
    listAdd(text)
    }
  setText('')
  }
  const showForm = () => {
    const textButton = list ? "Add board" : "Add list"
    const placeholder = list ? "Enter board title" : "Enter list title"
    return (
      <div className='form-box'>
        <Textarea
          className='text-area'
          placeholder={placeholder}
          autoFocus
          onBlur={closeForm}
          value={text}
          onChange={handleChange}
        />
        <button className='add' onMouseDown={list ? addList : addCard}>{textButton}</button>
        <button className='close' onClick={closeForm}>
          Cancel
        </button>
      </div>
    )
  }
  const showButton = () => {
    const textButton = list ? "Add another board" : "Add new list"
    const opacityButton = list ? 1 : 0.5
    const colorButton = list ? 'white' : 'inherit'
    const backgroundButton = list ? 'rgba(0, 0, 0, 0.25)' : 'inherit'
    return (
      <div
        className='add-button'
        onClick={openForm}
        style={{ 
          opacity: opacityButton,
          color: colorButton,
          background: backgroundButton
         }}
      >
      + {textButton}
      </div>
    )
  }
  return open ? showForm() : showButton()
}
