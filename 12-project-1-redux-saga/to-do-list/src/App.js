import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth'
import Routes from './routes/Routes'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
