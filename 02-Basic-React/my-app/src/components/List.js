import React from 'react'

class List extends React.Component {
  render() {
    return (
      <div>
        <h3>{ this.props.film }</h3>
        <h4>{ this.props.author }</h4>
      </div>
    )
  }
}

export default List