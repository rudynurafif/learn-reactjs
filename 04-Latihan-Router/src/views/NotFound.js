import React from 'react'
import MainLayout from '../layouts/MainLayout'

export default function NotFound() {
  return (
    <MainLayout>
      <div style={container}>
        <h1 style={h1}>404 Not Found</h1>
      </div>
    </MainLayout>
  )
}

const container = {
 padding: '0 6rem' 
}

const h1 = {
  fontSize: '5 rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}