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
    const todoListCopy = this.state.todoList.slice();
    todoListCopy.push({ task: this.state.task, id: Date.now(), completed: false });
    this.setState({ todoList: todoListCopy, task: "" });
  };

  handleComplete = id => {
    const todoListCopy = this.state.todoList.slice();
    for (let i = 0; i < this.state.todoList.length; i++) {
      if (this.state.todoList[i].id === id) {
        todoListCopy[i].completed = !todoListCopy[i].completed; 
      }
    }
    this.setState({ todoList: todoListCopy, task: "" });
  }

  clearCompleted = e => {
    e.preventDefault();
    // get a copy of Todos
    const todoListCopy = this.state.todoList.slice();
    // filter out completed todos
    let copiedList = todoListCopy.filter(todo => !todo.completed);
    // setState
    this.setState({ todoList: copiedList});
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List: MVP</h1>
        <TodoList
        todoList={this.state.todoList}
        handleComplete={this.handleComplete}
        />
        <TodoForm
          handleAddTodo={this.handleAddTodoSubmit}
          handleTask={this.handleTaskChange}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;