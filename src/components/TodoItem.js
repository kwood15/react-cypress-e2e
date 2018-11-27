import React from 'react';

const TodoItem = ({ name }) => (
  <li>
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>{name}</label>
      <button className="destroy" />
    </div>
  </li>
);

export default TodoItem;
