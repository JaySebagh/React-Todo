import React from 'react';
// import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      input: "",
      list: []
    }
  }

  change(event){
    this.setState({
      input: event
    })
  }

  add(event){
    let array = this.state.list;
    array.push(event);
    this.setState({
      list: array,
      input: ""
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.list.map( (event) => <p>{event}</p>)}
        </div>

        <input
          onChange={ (event) => this.change(event.target.value) }
          value={this.state.input}
          type="text"
        />

        <button onClick={ (event) => this.add(this.state.input) }>Add Todo</button>
      </div>
    );
  }
}

export default TodoList;