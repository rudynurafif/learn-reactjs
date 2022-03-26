import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTask, delTask } from '../store/actions/task'
import FormInput from '../components/FormInput'
import TodoItem from '../components/TodoItem'
import EditModal from '../components/EditModal'
import Button from '../components/Button'
import SkeletonLoading from '../components/SkeletonLoading'
import '../App.css'
import logo from '../logo.svg'

// const baseUrl = 'https://my-udemy-api.herokuapp.com/api/v1'
let setTodos, loginFailed

const Task = (props) => {
  const dispatch = useDispatch()
  const { todos, isLoading } = useSelector((state) => state.task)
  const [editData, setEditData] = useState({ id: '', title: '' })
  const [isEdit, setIsEdit] = useState(false)

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

  const deleteTask = (id) => {
    dispatch(delTask(id))
  }

  const addTask = (data) => {
    setTodos([...todos, data])
  }

  useEffect(() => {
    dispatch(getTask())
  }, [dispatch])

  return (
    <div className='app'>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <h3 style={{ marginBottom: '1rem' }}>Todo List</h3>
        <Button text='Logout' variant='primary' onClick={loginFailed} />
      </div>
      <div className='list'>
        {isLoading ? (
          <SkeletonLoading />
        ) : (
          <>
            {todos.map((item) => (
              <TodoItem
                key={item._id}
                todo={item}
                del={deleteTask}
                open={openModal}
              />
            ))}
          </>
        )}
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
