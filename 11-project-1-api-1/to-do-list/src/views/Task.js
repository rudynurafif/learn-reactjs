import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../context/auth'
import axios from 'axios'
import logo from '../logo.svg'
import FormInput from '../components/FormInput'
import TodoItem from '../components/TodoItem'
import EditModal from '../components/EditModal'
import Button from '../components/Button'
import '../App.css'

const baseUrl = 'https://my-udemy-api.herokuapp.com/api/v1'

const Task = () => {
  const { logout } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [todos, setTodos] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [editData, setEditData] = useState({
    id: '',
    title: '',
  })

  const update = () => {
    const { id, title } = editData
    const newData = { id, title }
    const newTodos = this.state.todos
    newTodos.splice(id - 1, 1, newData)
    setTodos(newTodos)
    setIsEdit(false)
    setEditData({ id: '', title: '' })
  }

  const setTitle = (e) => {
    setEditData({
      ...editData,
      title: e.target.value,
    })
  }

  const openModal = (id, data) => {
    setIsEdit(true)
    setEditData({ id, title: data })
  }

  const closeModal = () => {
    setIsEdit(false)
  }

  const deleteTask = async (id) => {
    setLoading(true)
    const token = localStorage.getItem('token')
    await axios.delete(`${baseUrl}/todo/${id}`, {
      headers: {
        "Authorization": token
      }
    })
    setTimeout(() => {
      setLoading(false)
    }, 750);
    setTodos(todos.filter((item) => item._id !== id))
  }

  const addTask = (data) => {
    setTodos([...todos, data])
  }

  const getData = async () => {
    setLoading(true)
    const token = localStorage.getItem('token')
    const res = await axios.get(`${baseUrl}/todo`, {
      headers: {
        "Authorization": token
      }
    })
    setTodos(res.data.todos)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='app'>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <h3 style={{ marginBottom: '1rem' }}>Todo List</h3>
        <Button text='Logout' variant='primary' action={logout} />
      </div>
      <div className='list'>
        {todos.map((item) => (
          <TodoItem
            key={item._id}
            todo={item}
            del={deleteTask}
            open={openModal}
            loading={loading}
          />
        ))}
      </div>
      <div className='input-form'>
        <FormInput add={addTask} />
      </div>
      <EditModal
        edit={isEdit}
        close={closeModal}
        change={setTitle}
        data={editData}
        update={update}
      />
    </div>
  )
}

export default Task
