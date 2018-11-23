import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => <TodoItem />)}
  </ul>
);

export default TodoList;