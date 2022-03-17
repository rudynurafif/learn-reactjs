import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

const baseUrl = 'https://my-udemy-api.herokuapp.com/api/v1/todo'

function* get() {
  const token = localStorage.getItem('token')
  try {
    const res = yield axios.get(`${baseUrl}`, {
      headers : {
        'Authorization': token
      }
    })
    const delay = time => new Promise(resolve => setTimeout(resolve, time))
    yield call(delay, 1000)
    yield put({ type: 'GET_SUCCESS', payload: res.data.todos })
  } catch (e) {
    console.log(e);
  }
}

function* del(actions) {
  const { payload } = actions
  const token = localStorage.getItem('token')
  try {
    yield axios.delete(`${baseUrl}/${payload}`, {
      headers : {
        'Authorization': token
      }
    })
    yield put({ type: 'DELETE_SUCCESS', id: payload })
  } catch (e) {
    console.log(e);
  }
}

function* add(actions) {
  const { payload } = actions
  const token = localStorage.getItem('token')
  try {
    const res = yield axios.post(`${baseUrl}`, payload, {
      headers : {
        'Authorization': token
      }
    })
    yield put({ type: 'ADD_SUCCESS', payload: res.data.todo })
  } catch (e) {
    console.log(e);
  }
}

export function* watchGet() {
  yield takeEvery("TASK_REQUEST", get)
}

export function* watchDel() {
  yield takeEvery("DELETE_TASK_REQUEST", del)
}

export function* watchAdd() {
  yield takeEvery("ADD_TASK_REQUEST", add)
}