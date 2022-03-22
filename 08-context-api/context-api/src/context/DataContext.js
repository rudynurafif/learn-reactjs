import React, { useReducer, createContext } from 'react'
import { ListReducer } from '../reducers/ListReducer'

export const DataContext = createContext()

const initialState = [
  {
    id: 1,
    title: 'The Title 1',
  },
]

export const DataProvider = (props) => {
  const [lists, dispatch] = useReducer(ListReducer, initialState)

  return (
    <DataContext.Provider value={{ lists, dispatch }}>
      {props.children}
    </DataContext.Provider>
  )
}
