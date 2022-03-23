import React, { useState, useContext } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { DataContext } from '../context/store'
import '../sass/Card.scss'
import 'boxicons'

export default function Card({ item, id, index }) {
  const { cardDelete, cardEdit } = useContext(DataContext)
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState(item.title)
  const isEdit = () => setEdit(true)
  const handleChange = (e) => setText(e.target.value)
  const closeInput = () => {
    cardEdit(id, item.id, index, text)
    setEdit(false)
  }
  const deleteCard = () => {
    cardDelete(id, item.id)
  }

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='card-list'
        >
          {edit ? (
            <form onSubmit={closeInput}>
              <input
                type='text'
                autoFocus
                onBlur={closeInput}
                value={text}
                onChange={handleChange}
              />
            </form>
          ) : (
            <div className='card-list__text'>
              <p onClick={isEdit}>{item.title}</p>
              <box-icon
                name='trash-alt'
                type='solid'
                onClick={deleteCard}
              ></box-icon>
            </div>
          )}
        </div>
      )}
    </Draggable>
  )
}
