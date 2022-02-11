import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

export default class Detail extends Component {
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
    ],
    data: ''
  }

  componentDidMount() {
    const id = this.props.match.params.id
    const data = this.state.skills.find(item => item.id === parseInt(id))
    this.setState({ data })
  }

  render() {
    const {data} = this.state
    return (
      <MainLayout>
        <div style={container}>
          <h1>{ data.name }</h1>
          <div style={box}>
            <img style={img} src={data.image} alt={data.image} />
            <div>
              <p>{data.description}</p>
              <Link to='/'>Back to home</Link>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }
}

const container = {
  padding: '0 6rem',
}

const img = {
  width: '15rem',
  height: '20rem',
  marginRight: '2rem'
}

const box = {
  display: 'flex'
}