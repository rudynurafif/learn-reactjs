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
    <ul>
      { todos.map(item => 
        <li key={ item.id }>
          { item.title }
          <button onClick={() => delData(item.id)}>X</button>
        </li>
      ) }
    </ul>
  )
}
