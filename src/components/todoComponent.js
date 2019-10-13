import React from 'react';

const Todo = ({ onClick, isCompleted, content, daysSelected }) => (
  
  <div className="item" style={{width: 300}}>
    <div className="content">
      <div className="header item"
      onClick={onClick}
      style={{
        textDecoration: isCompleted ? 'line-through' : 'none',
        color: isCompleted ? 'red' : 'black',
      }}
      >{content}</div>
    </div>
    <div>
    <div className="ui menu" style={{width: 700}}>
      <i className={"blue item " + (daysSelected.Monday ? 'active' : '')}>Monday</i>
      <i className={"blue item " + (daysSelected.Tuesday ? 'active' : '')}>Tuesday</i>
      <i className={"blue item " + (daysSelected.Wednesday ? 'active' : '')}>Wednesday</i>
      <i className={"blue item " + (daysSelected.Thursday ? 'active' : '')}>Thursday</i>
      <i className={"blue item " + (daysSelected.Friday ? 'active' : '')}>Friday</i>
      <i className={"blue item " + (daysSelected.Saturday ? 'active' : '')}>Saturday</i>
      <i className={"blue item " + (daysSelected.Sunday ? 'active' : '')}>Sunday</i>
    </div>
  </div>
  </div>
);

export default Todo;