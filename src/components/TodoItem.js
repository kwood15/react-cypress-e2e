import React from 'react'

const TodoItem = () => (
<li>
    <div className="view">
    <input className="toggle" type="checkbox" />
    <label>
        Do Stuff
    </label>
    <button className="destroy" />
    </div>
</li>
);

export default TodoItem;
  