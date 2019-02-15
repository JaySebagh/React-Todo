import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
    {
      props.todoList.map(todo => <Todo key={todo.id} data={todo} handleComplete={props.handleComplete}/>)
    }
    </div>
  );
};

export default TodoList;
