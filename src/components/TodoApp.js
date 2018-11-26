import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodo: '',
      todos: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      currentTodo: event.target.value
    })
  }

  render () {
    const { currentTodo } = this.state;
    return (
      <Router>
        <div>
          <header className="header">
            <h1>Todos</h1>
            <TodoForm
              currentTodo={currentTodo}
              handleChange={this.handleChange}
            />
          </header>
          <section className="main">
            <TodoList todos={this.state.todos} />
          </section>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default TodoApp;
