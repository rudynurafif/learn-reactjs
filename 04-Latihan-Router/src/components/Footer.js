import React from 'react'

export default function Footer() {
  return (
    <div style={footer}>
      <h3>React Router Concept</h3>
    </div>
  )
}

const footer = {
  display: 'flex',
  background: '#fe024e',
  justifyContent: 'center',
  color: '#fff',
  alignItems: 'center',
  position: 'absolute',
  bottom: '0',
  width: '100%'
}
