import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginAuth, registerAuth } from '../store/actions/auth'
import Button from '../components/Button'
import Input from '../components/Input'

const Auth = () => {
  const { isAuthenticated, isLoading, errors } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [login, setLogin] = useState(true)
  const isLogin = () => setLogin(!login) // toggle set state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = async () => {
    const user = { email, password }
    dispatch(loginAuth(user))
    setEmail('')
    setPassword('')
  }

  const userRegister = async () => {
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
      <h3 style={head}>{login ? 'Login' : 'Register'}</h3>
      <div>
        {!login && (
          <Input
            type='text'
            value={name}
            placeholder='Name'
            change={(e) => setName(e.target.value)}
          />
        )}
        <Input
          type='email'
          value={email}
          placeholder='Email'
          change={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          value={password}
          placeholder='Password'
          change={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style={btn}>
          <div>
            {errors &&
              errors.map((item, index) => (
                <p
                  key={index}
                  style={{ color: 'red', marginBottom: '0.34rem' }}
                >
                  {item.msg}
                </p>
              ))}
          </div>
        <Button
          variant='primary'
          text={login ? 'Login' : 'Register'}
          load={isLoading}
          action={login ? userLogin : userRegister}
        />
      </div>
      {login ? (
        <div style={paragraph}>
          <p>
            Belum punya akun? Daftar akun{' '}
            <span style={textBtn} onClick={isLogin}>
              disini
            </span>
          </p>
        </div>
      ) : (
        <div style={paragraph}>
          <p>
            Sudah punya akun? Login{' '}
            <span style={textBtn} onClick={isLogin}>
              disini
            </span>
          </p>
        </div>
      )}
    </div>
  )
}

export default Auth

const box = {
  background: '#fff',
  width: '35%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '1rem',
  borderRadius: '10px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}

const head = {
  textAlign: 'center',
  marginBottom: '0.7rem',
}

const btn = {
  textAlign: 'center',
  marginTop: '0.2rem',
}

const paragraph = {
  textAlign: 'center',
  marginTop: '0.5rem',
  fontSize: '14px',
}

const textBtn = {
  color: '#4fae9e',
  fontSize: '15px',
  fontWeight: 'bold',
  cursor: 'pointer',
}
