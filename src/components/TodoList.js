import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
  </ul>
);

export default TodoList;
