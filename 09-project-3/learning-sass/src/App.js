import React from 'react'
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Learning SASS</h1>
      <div className="card"> 
        <div className="card__image">
          image
        </div>
        <div className="card__heading">
          heading
        </div>
        <div className="card__paragraph--normal">
          paragraph normal
        </div>
        <div className="card__paragraph--italic">
          paragraph italic
        </div>
      </div>
      <button className="btn btn--primary">Primary</button>
      <button className="btn btn--secondary">Secondary</button>
    </div>
  );
}

export default App;
