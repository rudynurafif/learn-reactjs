import React from 'react'
import Header from './Header'
import List from './List'
import Button from './Button'
import '../styles/App.css'

const App = () => {
  // state = {
  //   name: 'Rudy Nurafif',
  //   age: 23,
  //   position: 'Junior Web Developer',
  // }
  return (
    <>
      <Header />
      <div className='box'>
        <h1 style={myStyle}>Hello World</h1>
      </div>
      <Button />
      <List film='Batman' author='Sule' />
    </>
  )
}

const myStyle = {
  marginTop: '2rem',
  color: 'yellow',
  fontSize: '50px',
}

export default App
