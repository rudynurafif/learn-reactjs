import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/actions/lists'

export default function Form() {
  
  const [ text, setText ] = useState("")
  const dispatch = useDispatch()
  const handleChange = e => {
    setText(e.target.value)
  }
  const submit = (e) => {
    e.preventDefault()
    dispatch(add(text))
    setText("")
  }

  return (
    <form onSubmit={submit}>
      <input type="text" value={text} onChange={handleChange} placeholder='Enter new task..' style={{ marginRight: '.4rem' }} />
      <button>Add</button>
    </form>
  )

}
