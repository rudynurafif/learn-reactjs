import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Learn HTML & CSS'
      },
      {
        id: 2,
        title: 'Learn JavaScript'
      },
    ]
  }

  deleteTask = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    })
  }

  addTask = data => {
    const id = this.state.todos.length
    const newData = {
      id: id + 1,
      title: data
    }
    this.setState({
      todos: [...this.state.todos, newData]
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Todo List</h3>
        </div>
        <div className='list'>
          {todos.map(item =>
            <TodoItem key={item.id} todo={item} del={this.deleteTask} />
          )}
        </div>
        <FormInput add={this.addTask} />
      </div>
    );
  }
}

export default App;
