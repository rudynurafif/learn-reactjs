import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { del } from '../store/actions/lists'

export default function Todos() {
  const todos = useSelector(state => state.lists.todos)
  const dispatch = useDispatch()
  const delData = id => {
    dispatch(del(id))
  }
  return (
    <ul style={myUl}>
      { todos.map(item => 
        <li key={item.id} style={li}>
          { item.title }
          <button onClick={() => delData(item.id)} style={button}>x</button>
        </li>
      ) }
    </ul>
  )
}

const myUl = {
  listStyle: 'none',
}

const li = {
  display: 'flex',
  position: 'relative',
  left: '-24px',
  justifyContent: 'center',
  marginBottom: '.8rem'
}

const button = {
  marginLeft: '.3rem'
}
