import React from 'react';

const TodoForm = () => (
  <form>
    <input
      type='text'
      autoFocus
      className="new-todo"
      placeholder="What needs to be done?"
    />
  </form>
);

export default TodoForm;
