import React, { useContext, useState } from 'react'
import { DataContext } from '../context/store'
import '../sass/BoardTitle.scss'

export default function BoardTitle({ id, title }) {
  const { changeTitle } = useContext(DataContext)
  const [text, setText] = useState(title)
  const [open, setOpen] = useState(false)
  const openInput = () => {
    setOpen(true)
  }
  const closeInput = () => {
    setOpen(false)
    changeTitle(id, text)
  }
  const handleChange = e => {
    setText(e.target.value)
  }
  return (
    <div className='board-title'>
      {open ? (
        <form onSubmit={closeInput}>
          <input
            autoFocus
            type="text"
            value={text}
            onBlur={closeInput}
            onChange={handleChange}
          />
        </form>
      ) : (
      <h3 onClick={openInput}>{title}</h3>
      )}
    </div>
  )
}
