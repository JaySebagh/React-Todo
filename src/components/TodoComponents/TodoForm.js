import React from "react";

const TodoForm = props => {
  console.log(props, "test");
  return (
    <form>
      <input placeholder="task" onChange={props.handleTask} />
      <button onClick={props.handleAddTodo}>Add Todo </button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
