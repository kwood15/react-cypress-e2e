import React from 'react';

const TodoForm = ({ currentTodo, handleChange }) => (
  <form>
    <input
      type='text'
      autoFocus
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={handleChange}
      value={currentTodo}
    />
  </form>
);

export default TodoForm;
