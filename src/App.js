import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList/>
      </div>
    );
  }
}

export default App;