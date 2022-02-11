import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

export default class Home extends Component {
  state = {
   skills: [
     {
       id: 1,
       name: 'JavaScript',
       description: 'JavaScript description',
       image: require("../images/js.png")
     },
     {
       id: 2,
       name: 'React',
       description: 'JavaScript description',
       image: require("../images/react.png")
     },
     {
       id: 3,
       name: 'Vue',
       description: 'JavaScript description',
       image: require("../images/vuejs.jpeg")
     },
     {
       id: 4,
       name: 'Svelte',
       description: 'JavaScript description',
       image: require("../images/sveltejs.png")
     }
   ]
  }
  render() {
    const {skills} = this.state
    return (
      <MainLayout>
        <h1 style={{ paddingLeft: "6rem" }}>Home Page</h1>
        <div style={container}>
          { skills.map(item => 
            <div key={item.id} style={card}>
              <Link to={`/detail/${item.id}`}>
                <img src={item.image} alt={item.name} style={img} />
                <h3>{item.name}</h3>
              </Link>
            </div>
            ) }
        </div>
      </MainLayout>
    )
  }
}

const container = {
  display: 'flex',
  padding: '0 6rem',
  justifyContent: 'space-between'
}

const card = {
  width: '20%',
  height: '15rem'
}

const img = {
  width: '100%',
  height: '100%'
}