import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loginAuth, registerAuth } from '../store/actions/auth'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Auth() {
  const { isAuthenticated, isLoading, errors } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [login, setLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isLogin = () => setLogin(!login)
  const userLogin = async() => {
    const user = { email, password }
    dispatch(loginAuth(user))
    setEmail('')
    setPassword('')
  }
  const userRegister = async() => {
    const user = { name, email, password }
    dispatch(registerAuth(user))
    setName('')
    setEmail('')
    setPassword('')
  }
  if (isAuthenticated) {
    return <Redirect to='/task' />
  }

  return (
    <div style={box}>
      <h2 style={head}>{login ? 'Login': 'Register'}</h2>
      <div>
        {!login && <Input placeholder='name' value={name} type='text' change={(e) => setName(e.target.value)} />}
        <Input type='email' value={email} placeholder='email'  change={(e) => setEmail(e.target.value)} />
        <Input type='password' value={password} placeholder='password'  change={(e) => setPassword(e.target.value)} />
      </div>
      <div style={btn}>
          <div>
            {errors && errors.map((item, index) => <p key={index} style={{ color: 'red', margin: '0.4rem 0' }}>{item.msg}</p>)}
          </div>
        <Button variant="primary" load={isLoading} text={login ? 'Login' : 'Register'} action={login ? userLogin : userRegister} />
      </div>
      {login ? (
        <div style={paragraph}>
          <p>Belum punya akun? Silahkan  <span onClick={isLogin} style={textBtn}>register</span></p>
        </div>
      ) : (
        <div style={paragraph}>
          <p>Sudah punya akun? Silahkan <span onClick={isLogin} style={textBtn}>login</span></p>
        </div>
      )}
    </div>
  )
}

const box = {
  background: '#fff',
  width: '25%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '0.7rem'
}

const head = {
  textAlign: 'center',
  marginBottom: '0.4rem'
}

const btn = {
  textAlign: 'center',
  marginTop: '0.5rem'
}

const paragraph = {
  textAlign: 'center',
  marginTop: '0.5rem',
  fontSize: '14px'
}

const textBtn = {
  color: '#57ae4f',
  fontSize: '15px',
  cursor: 'pointer'
}