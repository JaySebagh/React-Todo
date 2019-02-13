import React from 'react';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <Todo/>
      </div>
    );
  }
}

export default App;