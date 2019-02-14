import React from 'react';
import Todos from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{ task: "", id: Date.now(), completed: false }],
      task: ""
    };
  }

  handleTaskChange = e => {
    this.setState({ task: e.target.value });
  };

  handleAddTodoSubmit = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.task, id: Date.now(), completed: false });
    this.setState({ todos: todos, task: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List: MVP</h1>
        <Todos todos={this.state.todos} />
        <TodoForm
          handleAddTodo={this.handleAddTodoSubmit}
          handleTask={this.handleTaskChange}
        />
      </div>
    );
  }
}

export default App;