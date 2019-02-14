import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [{ task: "", id: Date.now(), completed: false }],
      task: ""
    };
  }

  handleTaskChange = e => {
    this.setState({ task: e.target.value });
  };

  handleAddTodoSubmit = e => {
    e.preventDefault();
    const todoList = this.state.todoList.slice();
    todoList.push({ task: this.state.task, id: Date.now(), completed: false });
    this.setState({ todoList: todoList, task: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List: MVP</h1>
        <TodoList todoList={this.state.todoList} />
        <TodoForm
          handleAddTodo={this.handleAddTodoSubmit}
          handleTask={this.handleTaskChange}
        />
      </div>
    );
  }
}

export default App;