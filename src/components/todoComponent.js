import React from 'react';

const Todo = ({ onClick, isCompleted, content }) => (
  <div class="item" style={{width: 300}}>
    <div class="content">
      <div class="header item"
      onClick={onClick}
      style={{
        textDecoration: isCompleted ? 'line-through' : 'none',
        color: isCompleted ? 'red' : 'black',
      }}
      >{content}</div>
    </div>
  </div>
);

export default Todo;