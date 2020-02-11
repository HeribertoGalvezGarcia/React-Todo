import React from 'react';

class Todo extends React.Component {
  render() {
    return <p style={this.props.completed ? {textDecoration: 'line-through'} : {}} onClick={() => this.props.handleClick(this.props.id)}>{this.props.task}</p>;
  }
}

export default Todo;
