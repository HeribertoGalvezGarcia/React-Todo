import React from 'react';
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((task) => <Todo key={task.id} {...task} handleClick={this.props.handleClick} />)}
      </div>
    )
  }
}

export default TodoList;
