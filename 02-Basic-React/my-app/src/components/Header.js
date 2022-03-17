import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div style={container}>
        <h1>Header Component</h1>
      </div>
    )
  }
}

const container = {
  width: '100%',
  height: '50px',
  backgroundColor: 'green'
}



export default Header