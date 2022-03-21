import React from 'react'

export default function Footer() {
  return (
    <footer style={footer}>
      <h3>React Router Concept</h3>
    </footer>
  )
}

const footer = {
  display: 'flex',
  background: '#fe024e',
  justifyContent: 'center',
  color: '#fff',
  alignItems: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%'
}
