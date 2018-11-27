import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';

class TodoApp extends Component {
  baseUrl = 'http://localhost:3030/api';

  constructor(props) {
    super(props);
    this.state = {
      currentTodo: '',
      todos: [],
      error: false
    }
  }

  handleChange = event => {
    this.setState({
      currentTodo: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const newTodo = {
      name: this.state.currentTodo,
      isComplete: false
    };
    axios.post(`${this.baseUrl}/todos`, { newTodo })
      .then(response => {
        this.setState({
          todos: this.state.todos.concat(response.data),
          currentTodo: ''
        })
      })
      .catch(error => console.log(error));
  }

  render () {
    const { currentTodo, todos } = this.state;
    return (
      <Router>
        <div>
          <header className="header">
            <h1>Todos</h1>
            <TodoForm
              currentTodo={currentTodo}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </header>
          <section className="main">
            <TodoList todos={todos} />
          </section>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default TodoApp;
