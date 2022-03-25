import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/auth'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Button from '../components/Button'
import Input from '../components/Input'

const baseUrl = 'https://my-udemy-api.herokuapp.com/api/v1'

const Auth = () => {
  const { isAuthenticated, loginSuccess, loginFailed } = useContext(AuthContext)
  const [login, setLogin] = useState(true)
  const [error, setError] = useState('')
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const isLogin = () => setLogin(!login) // toggle set state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = async () => {
    setIsLoading(true)
    const user = {
      email,
      password,
    }
    try {
      const res = await axios.post(`${baseUrl}/user/signin`, user)
      localStorage.setItem('token', res.data.token)
      setEmail('')
      setPassword('')
      setIsLoading(false)
      loginSuccess()
    } catch (err) {
      setIsError(true)
      setError(err.response.data.errors)
      setIsLoading(false)
      setEmail('')
      setPassword('')
      setTimeout(() => {
        setIsError(false)
        setError('')
        loginFailed()
      }, 3000)
    }
  }

  const userRegister = async () => {
    setIsLoading(true)
    const user = {
      name,
      email,
      password,
    }
    try {
      const res = await axios.post(`${baseUrl}/user/signup`, user)
      localStorage.setItem('token', res.data.token)
      setName('')
      setEmail('')
      setPassword('')
      setIsLoading(false)
      loginSuccess()
    } catch (err) {
      setIsError(true)
      setError(err.response.data.errors)
      setIsLoading(false)
      setName('')
      setEmail('')
      setPassword('')
      setTimeout(() => {
        setIsError(false)
        setError('')
        loginFailed()
      }, 3000)
    }
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
        {isError && (
          <div>
            {error &&
              error.map((item, index) => (
                <p
                  key={index}
                  style={{ color: 'red', marginBottom: '0.34rem' }}
                >
                  {item.msg}
                </p>
              ))}
          </div>
        )}
        <Button
          variant='primary'
          text={login ? 'Login' : 'Register'}
          action={login ? userLogin : userRegister}
          load={isLoading}
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
  width: '25%',
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
