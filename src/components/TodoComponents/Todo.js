import React from "react";
import './Todo.css';

const Todo = props => {
  console.log(props, "help")
  return (
    <div 
      onClick={() => props.handleComplete(props.data.id)}
      className={props.data.completed ? 'strike' : ''}
    >
      {props.data.task}
    </div>);
};

export default Todo;
