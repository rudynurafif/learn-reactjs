import React from 'react'

export default function Input({ placeholder, type, value, change }) {
  return (
    <input
      style={myInput}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={change}
    />
  )
}

const myInput = {
  width: '80%',
  border: 'none',
  borderBottom: '1px solid #57ae4f',
  margin: '0 2rem 2rem'
}