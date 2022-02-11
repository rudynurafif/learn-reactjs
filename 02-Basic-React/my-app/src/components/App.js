import React from "react";
import '../styles/App.css'

const App = () => {
  return(
    <div className="box" >
      <h1 style={myStyle}>Hello World</h1>
    </div>
  )
}

const myStyle = {
  color: "yellow",
  fontSize: '50px'
}

export default App;
