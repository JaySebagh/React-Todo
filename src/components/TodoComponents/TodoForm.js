import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input placeholder="task" onChange={props.handleTask} />
      <button onClick={props.handleAddTodo}>Add Todo </button>
    </form>
  );
};

export default TodoForm;
