import React from "react";
import Todo from "./Todo";

const Todos = props => {
  return (
    <div>{props.todos.map(todo => <Todo key={todo.id} data={todo} />)}</div>
  );
};

export default Todos;
